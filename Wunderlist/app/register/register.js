import React from "react";
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import styles from './register.css';

export default class Register extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      //loading: false,
      username: '',
      password: '',
      email: '',
    }
  }

  register = async (navigate) => {
    //this.setState({ loading : true });
    await axios.post('https://listical.herokuapp.com/api/users/', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    })
    .then(function (res) {
      //this.setState({ loading : false });
      localStorage.setItem('user', JSON.stringify(res.data[0]));
      console.log(res);
      console.log(res.data[0]);
      navigate('Home');
    })
    .catch(function (error) {
      console.log(error);
    });    
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} >
          <StatusBar style="auto"/>
        <Image
          source={require("../../assets/fondo.png")}
          style={styles.image}
        />
        <Text
          style={styles.text1}
        >
          Get things done!
        </Text>

        <Text
          style={styles.text2}
        >
          Listical is an app for people who want to get things done. In an
          elegant way and with no delays.
        </Text>

        <View
          style={styles.input}
        >
          <Icon name="user" color="#d8412e" size={24} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#d8412e"
            style={{ paddingHorizontal: 70 }}
            onChangeText={(username) => this.setState({username: username})}
          />
        </View>
        <View
          style={styles.input}
        >
          <Icon name="mail" color="#d8412e" size={24} />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#d8412e"
            style={{ paddingHorizontal: 82 }}
            onChangeText={(email) => this.setState({email: email})}
          />
        </View>
        <View
          style={styles.input}
        >
            <Icon name="exclamationcircleo" color="#d8412e" size={24} />
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#d8412e"
            style={{ paddingHorizontal: 70 }}
            onChangeText={(password) => this.setState({password: password})}
          />
        </View>
        <View
          style={styles.input}
        >
            <Icon name="exclamationcircleo" color="#d8412e" size={24} />
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor="#d8412e"
            style={{ paddingHorizontal: 48 }}
          />
        </View>

        <View
          style={styles.buttonRegister}
        >
          <Text
            onPress={() => this.register(navigate)}
            style={styles.textButton}
          >
            Register
          </Text>
        </View>
        <Text
          onPress={() => navigate("Login")}
          style={styles.buttonNavigation}
        >
          Already a user
        </Text>
      </View>
    );
  }
}
