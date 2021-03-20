import React from "react";
import axios from "axios";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import styles from "./profile.css";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default class profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //loading : false,
      username: "",
      password: "",
      email: "",
      editData: false,
      id: 0,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    let res = "";
    try {
      res = await AsyncStorage.getItem("user");
    } catch (error) {
      // Error retrieving data
    }
    this.setState({
      username: JSON.parse(res).username,
      email: JSON.parse(res).email,
      id: JSON.parse(res).user_id,
    });
  };

  async saveData() {
    console.log("llego");
    const form = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    let id = this.state.id;
    console.log(id.toString(), form);
    const res = await axios.put(
      "https://listical.herokuapp.com/api/users/" + id.toString(),
      form
    );
    console.log(res);
    try {
      await AsyncStorage.setItem("user", JSON.stringify(res.data[0]));
      this.setState({ editData: false });
    } catch (e) {
      //error
    }
  }

  logout = async (replace) => {
    Alert.alert(
      "Logout",
      "Are you sure you want log out?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel",
        },
        {
          text: "Log out",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem("user");
              replace("Login");
            } catch (error) {
              // Error retrieving data
            }
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  render() {
    const { navigate, route, replace } = this.props.navigation;
    if (this.state.editData == true) {
      return (
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Edit your data
          </Text>
          <Text style={{ fontSize: 20, marginTop: 15 }}>Username:</Text>
          <TextInput
            style={{ marginTop: 15, fontSize: 15 }}
            placeholder="Enter new username"
            placeholderTextColor="#d8412e"
            onChangeText={(username) => this.setState({ username: username })}
          />
          <Text style={{ fontSize: 20, marginTop: 15 }}>Password:</Text>
          <TextInput
            style={{
              marginTop: 20,
              fontSize: 15,
              borderColor: "#d8412e",
              marginBottom: 15,
            }}
            placeholder="Enter new password"
            placeholderTextColor="#d8412e"
            onChangeText={(password) => this.setState({ password: password })}
          />
          <TouchableOpacity
            onPress={() => this.saveData()}
            style={{
              marginHorizontal: 90,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
              backgroundColor: "#d8412e",
              paddingVertical: 13,
              paddingHorizontal: 25,
              borderRadius: 23,
              height: 40,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "white" }}>Save</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <View
            style={{
              backgroundColor: "white",
              alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <Text style={{ color: "gray", marginTop: 5 }}>Signed in as:</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
              {this.state.username}
            </Text>
            <Text style={{ color: "gray", marginBottom: 30 }}>
              {this.state.email}
            </Text>
            <Icon
              name="user"
              color="#d8412e"
              size={24}
              style={{ marginBottom: 20 }}
            />
            <Button
              title="Edit user data"
              onPress={() => this.setState({ editData: true })}
            ></Button>
          </View>
          <TouchableOpacity
            style={{ marginVertical: 30 }}
            onPress={() => this.logout(replace)}
          >
            <Text style={{ color: "#d8412e", alignSelf: "center" }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}
