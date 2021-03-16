import React from 'react';
import axios from 'axios';
import { Text, View, Image, Button, FlatList, SafeAreaView, Alert } from 'react-native';
import styles from './profile.css';

export default class prueba extends React.Component {

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
    const res = await axios.get('https://listical.herokuapp.com/api/tasks/1');
    this.setState({ user: res.data, loading : false });
    console.log(this.state.user);
  }

  render () {
    const { navigate } = this.props.navigation;
    const user = this.state.user;

    const Item = ({ value }) => (
      <View style={styles.item}>
        <View style={styles.itemtop}></View>
        <Text style={styles.title}>{value}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item value={item.value} /> 
    );

    if(this.state.loading){
      return(
        <View>
          <Text>Loading...</Text>
        </View>      
      );
    }
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
            data={user}
            renderItem={renderItem}
            keyExtractor={item => item.task_id.toString()}
          />
        </SafeAreaView>
      </View>      
    );
  };
};