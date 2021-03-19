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
} from "react-native";
import styles from "./main.css";
import { datetime, compare } from "./utils/datetime";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      Lists: [],
      user: "",
    };
  }

  async componentDidMount() {
    this.getData();
    this.getElements();
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      console.log(value);
      this.setState({ user: value });
      if (value !== null) {
        console.log("null");
      }
    } catch (e) {
      // error reading value
    }
  };

  getElements = async () => {
    this.setState({ loading: true });
    let response = "";
    if (this.state.loading === null) {
      console.log("Already loaded");
    } else {
      try {
        console.log("Loading");
        this.setState({ loading: false });
        const response = await AsyncStorage.getItem("user");
        console.log(response);
      } catch (error) {
        // Error retrieving data
      }
    }
    const res = await axios.get(
      "https://listical.herokuapp.com/api/lists/" +
        JSON.parse(response).user_id.toString()
    );

    this.setState({ user: response.username, Lists: res.data, loading: false });
    console.log(this.state.Lists);
  };

  createList = async () => {
    let newtitle = "";
    let pos = this.state.Lists.length;

    Alert.alert(
      "el titulo de la lista",
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

    const newList = {
      title: newtitle,
      position: pos,
      color: "gray",
      edited: datetime(),
      created: datetime(),
      user_id: JSON.parse(this.state.user).user_id,
    };
    console.log(newList);

    /*let lists = this.state.Lists;
    const res = await axios.post("https://listical.herokuapp.com/api/list", newList);
    this.setState({ Lists : lists.push( res.data[0] ) });*/
  };

  deleteList = async (item) => {
    Alert.alert(
      "Delete list",
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

  render() {
    const { navigate } = this.props.navigation;
    const username = this.state.user;

    console.log();

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
          <ActivityIndicator animating size="small" />
          <Text>I am loading</Text>
        </View>
      );
    }
    return (
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
              <MaterialIcons name="bookmark-outline" size={30} color="black" />
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
            scrollEnabled={false}
            data={this.state.Lists}
            renderItem={renderLists}
            keyExtractor={(item) => item.list_id.toString()}
          ></FlatList>
          <Button
            title="Add new list"
            onPress={() => this.createList()}
          ></Button>
        </View>
      </View>
    );
  }
}
