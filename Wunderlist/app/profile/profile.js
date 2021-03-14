/*import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button, FlatList, SafeAreaView, Alert } from 'react-native';*/

import React from 'react';
import axios from 'axios';
import { Text, View, Image, Button, FlatList, SafeAreaView, Alert } from 'react-native';
import styles from './profile.css';

export default class profile extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading : false,
      user: []
    }
  }
  
  componentDidMount(){
    this.getElements();
  };

  getElements = async () => {
    this.setState({ loading : true });
    const res = await axios.get('https://listical.herokuapp.com/api/users/');
    this.setState({ user: res.data, loading : false });
    console.log(this.state.user);
  }

  render () {
    const { navigate } = this.props.navigation;

    const Item = ({ username }) => (
      <View style={styles.item}>
        <View style={styles.itemtop}></View>
        <Text style={styles.title}>{username}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item username={item.username} />
    );

    if(this.state.loading){
      return(
        <View>
          <Text>Loading...</Text>
        </View>      
      );
    }else{
      return(
        <View>
          <SafeAreaView style={styles.container}>
            <View style={styles.end}>
              <Button color="#000" title="add task" onPress={() =>
                console.log('asignar elemento a la lista')
                /*this.setState({
                  user: user.push({
                    user_id: '1',
                    username: 'Fourth Item',
                  })
                })*/
              }
              />
            </View>
            <FlatList
              data={this.state.user}
              renderItem={renderItem}
              keyExtractor={item => item.user_id.toString()}
            />
          </SafeAreaView>
        </View>      
      );
    }
  };
};




/*
export default function profile({ navigation, route }) {
  const [count, setCount] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = count;
  });

  return (
    <View>

        <FlatList
            data={count}
        />

        <Button onClick={() => setCount(count + 1)}>
            Click me
        </Button>
    </View>
  );
}*/

// de aqui pa riba es prueba

/*import React from 'react';
import { Text, View, Image, Button, FlatList, SafeAreaView, Alert } from 'react-native';
import styles from './profile.css';

export default class profile extends React.Component {

    render () {
      const { navigate, route } = this.props.navigation;
      return(
          <View>
              <Text>Profile</Text>
          </View>
          
      );
    };
};*/