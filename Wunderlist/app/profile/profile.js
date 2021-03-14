import React from 'react';
import { Text, View, Image, Button, FlatList, SafeAreaView, Alert, TextInput } from 'react-native';
import Icon from "@expo/vector-icons/AntDesign";
import styles from './profile.css';

export default class profile extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      //loading : false,
      username: '',
      password: '',
      email: '',
    }
  }
  
  componentDidMount(){
    this.getUser();
  };

  getUser = () => {
    this.setState({ 
      username: JSON.parse(localStorage.getItem('user')).username,
      email: JSON.parse(localStorage.getItem('user')).email,
    }); 
  };

  render () {
    const { navigate, route } = this.props.navigation;
    return(
      <View>
        <Text>{this.state.username}</Text>
        <Text>{this.state.email}</Text>

        <View>
          <Icon name="user" color="#d8412e" size={24} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#d8412e"
            onChangeText={(username) => this.setState({username: username})}
          />
        </View>
        <View>
          <Icon name="exclamationcircleo" color="#d8412e" size={24} />
          <TextInput
          secureTextEntry
            placeholder="Password"
            placeholderTextColor="#d8412e"
            onChangeText={(password) => this.setState({password: password})}
          />
        </View>
      </View>   
    );
  };
};