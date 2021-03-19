import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
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

  getUser = async () => {
    let res = "";
    try {
      res = await AsyncStorage.getItem('user');
    } catch (error) {
      // Error retrieving data
    }
    this.setState({ 
      username: JSON.parse(res).username,
      email: JSON.parse(res).email
    }); 
  };

  logout = async () => {
    var log = true;
    Alert.alert(
      "Logout",
      "Are you sure you want logout?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel",
        },
        {
          text: "logout",
          onPress: () => {
            log = false;
          },
        },
      ],
      {
        cancelable: false,
      }
    );
    if(log == false){
      try {
        await AsyncStorage.removeItem('user');
      } catch (error) {
        // Error retrieving data
      }
    }
  }

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
        <TouchableOpacity
          style={{ marginVertical: 30 }}
          onPress={() => this.logout()}
        >
          <Text style={styles.buttonNavigation}>Logout</Text>
        </TouchableOpacity>
      </View>   
    );
  };
};