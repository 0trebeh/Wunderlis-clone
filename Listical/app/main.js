import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./main.css";
import { datetime, compare } from "./utils/datetime";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { color } from "react-native-reanimated";
export default class main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      Lists: [],
      user: "",
      createNewList: false,
      listname: "",
    };
  }

  async componentDidMount() {
    this.getElements();
  }

  async componentDidUpdate() {
    const value = await AsyncStorage.getItem("user");
    this.setState({ user: JSON.parse(value) });
  }

  getElements = async () => {
    this.setState({ loading: true });

    try {
      const value = await AsyncStorage.getItem("user");
      console.log(value);
      this.setState({ user: JSON.parse(value) });
    } catch (e) {
      // error reading value
    }
    let id = this.state.user;
    console.log(id);
    const res = await axios.get(
      "https://listical.herokuapp.com/api/lists/" + id.user_id.toString()
    );

    this.setState({ Lists: res.data, loading: false });
    console.log(this.state.Lists);
  };

  createList = async () => {
    console.log("llego");

    let pos = this.state.Lists.length + 1;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let newColor = "#" + randomColor;
    console.log(newColor);

    const newList = {
      title: this.state.listname,
      position: pos,
      color: newColor,
      edited: datetime(),
      created: datetime(),
      user_id: this.state.user.user_id,
    };
    console.log(newList);

    await axios.post("https://listical.herokuapp.com/api/list", newList);

    this.getElements();
  };

  deleteList = async (item) => {
    Alert.alert(
      "Delete list?",
      "Are you sure you want to delete this list?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            remove(item);
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  remove = async (item) => {
    const id = item.task_id;
    let lists = this.state.Lists;
    this.setState({ Lists: lists.filter((list) => list !== item) });
    await axios.delete(
      "https://listical.herokuapp.com/api/list/" + id.toString()
    );
  };

  saveData() {
    this.setState({ createNewList: false });
  }

  render() {
    if (this.state.createNewList == true) {
      return (
        <View>
          <Text style={{ fontSize: 20, marginTop: 15 }}>
            Enter new list name:
          </Text>
          <TextInput
            style={{ marginTop: 15, fontSize: 15 }}
            placeholder="Enter new listname"
            placeholderTextColor="#d8412e"
            onChangeText={(name) => this.setState({ listname: name })}
          ></TextInput>
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
            <Text style={{ color: "white" }} onPress={() => this.createList()}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    const renderLists = ({ item }) => (
      <TouchableOpacity
        onPress={() =>
          navigate("Inbox", {
            id: item.list_id,
            title: item.title,
            color: item.color,
          })
        }
      >
        <View
          style={{
            marginBottom: 10,
            padding: 0,
            borderRadius: 14,
            backgroundColor: "#eee",
            borderColor: "#eee",
            borderWidth: 10,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <MaterialIcons
            style={{ marginHorizontal: 5 }}
            name="format-list-bulleted"
            size={20}
            color={item.color}
          />
          <Text style={styles.listTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );

    if (this.state.loading) {
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE",
          }}
        >
          <ActivityIndicator animating size="small" color="#999999" />
        </View>
      );
    }

    const { navigate } = this.props.navigation;
    const username = this.state.user.username;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Button
            title="probar notification"
            onPress={() => navigate("notifications")}
          ></Button>
          <View style={styles.body}>
            <TouchableOpacity onPress={() => navigate("Profile")}>
              <View style={styles.ContainerView}>
                <Text style={styles.categoryText}>{username}</Text>
                <MaterialIcons name="person-outline" size={30} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("tags")}>
              <View style={styles.ContainerView}>
                <Text style={styles.categoryText}>Tags</Text>
                <MaterialIcons
                  name="bookmark-outline"
                  size={30}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigate("Inbox", {
                  id: 0,
                  title: "inbox",
                  color: "gray",
                })
              }
            >
              <View style={styles.ContainerView}>
                <Text style={styles.categoryText}>Inbox</Text>
                <MaterialIcons name="inbox" size={30} color="black" />
              </View>
            </TouchableOpacity>
            <Text style={styles.myLists}> My lists: </Text>
            <FlatList
              data={this.state.Lists}
              renderItem={renderLists}
              keyExtractor={(item) => item.list_id.toString()}
            ></FlatList>
            <Button
              title="Add new list"
              onPress={() => this.setState({ createNewList: true })}
            ></Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
