import React from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import styles from "./login.css";

export default class login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      username: "",
      password: "",
    };
  }

  saveUserData = async (username) => {
    console.log("running");
    try {
      await AsyncStorage.setItem("userName", username);
      console.log(value);
    } catch (e) {
      // saving error
    }
  };

  login = async () => {
    this.setState({ loading: true });
    await axios
      .post("https://listical.herokuapp.com/api/users/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(function (res) {
        console.log(res.data[0].username);
        if (res.data[0].status == 404) {
          Alert.alert("User not found");
          return;
        } else {
          this.saveUserData(res.data[0].username);
          this.props.navigate.replace("Home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ loading: false });
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE",
          }}
        >
          <ActivityIndicator animating size="small" />
        </View>
      );
    }

    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={70}
        behavior="padding"
        style={{ flex: 1 }}
        enabled={true}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Image
            source={require("../../assets/fondo.png")}
            style={styles.image}
          />
          <Text style={styles.text1}>Get things done!</Text>

          <Text style={styles.text2}>
            Listical is an app for people who want to get things done. In an
            elegant way and with no delays.
          </Text>

          <View style={styles.input}>
            <Icon name="user" color="#d8412e" size={24} />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#d8412e"
              style={styles.textInput}
              onChangeText={(username) => this.setState({ username: username })}
            />
          </View>
          <View style={styles.input}>
            <Icon name="exclamationcircleo" color="#d8412e" size={24} />
            <TextInput
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#d8412e"
              style={styles.textInput}
              onChangeText={(password) => this.setState({ password: password })}
            />
          </View>
          <TouchableOpacity
            id="loginBtn"
            disabled={(this.state.username == "") | (this.state.password == "")}
            onPress={() => this.login()}
            style={
              this.state.username == "" || this.state.password == ""
                ? styles.buttonLoginDisabled
                : styles.buttonLogin
            }
          >
            <Text style={styles.textButton}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginVertical: 30 }}
            onPress={() => navigate("Register")}
          >
            <Text style={styles.buttonNavigation}>New User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginVertical: 30 }}
            onPress={() => localStorage.removeItem("user")}
          >
            <Text style={styles.buttonNavigation}>clear</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
