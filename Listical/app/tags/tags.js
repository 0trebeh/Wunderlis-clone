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
  TextInput,
} from "react-native";
import styles from "./tags.css";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputSpinner from "react-native-input-spinner";

export default class tags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      tags: [],
      user: "",
      createTag: false,
      number: 1,
    };
  }

  componentDidMount() {
    this.getElements();
  }

  componentDidUpdate() {}

  getElements = async () => {
    this.setState({ loading: true });
    let response = "";
    try {
      response = await AsyncStorage.getItem("user");
    } catch (error) {
      // Error retrieving data
    }
    const res = await axios.get(
      "https://listical.herokuapp.com/api/tags/" +
        JSON.parse(response).user_id.toString()
    );

    this.setState({ user: response, tags: res.data, loading: false });
    console.log(this.state.tags);
  };

  createTag = async () => {
    let newName = "";

    Alert.alert(
      "Enter tag name",
      "",
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

    const newTag = {
      name: newName,
      description,
      color,
      priority,
      user_id: JSON.parse(this.state.user).user_id,
    };
    console.log(newList);

    /*let tag = this.state.tags;
        const res = await axios.post("https://listical.herokuapp.com/api/tag", newTag);
        this.setState({ tags : tag.push( res.data[0] ) });*/
  };

  deleteTag = async (item) => {
    Alert.alert(
      "Delete tag",
      "Are you sure you want to delete this tag?",
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
    const id = item.tag_id;
    let tag = this.state.tags;
    this.setState({ Lists: tag.filter((tags) => tags !== item) });
    await axios.delete(
      "https://listical.herokuapp.com/api/tag/" + id.toString()
    );
  };

  render() {
    const { navigate } = this.props.navigation;

    if (this.state.createTag == true) {
      return (
        <View>
          <Text style={{ fontSize: 20, marginTop: 15 }}>Enter tag name:</Text>
          <TextInput
            style={{ marginTop: 15, fontSize: 15 }}
            placeholder="Enter new listname"
            placeholderTextColor="#d8412e"
            onChangeText={(listname) => this.setState({ listname: listname })}
          ></TextInput>
          <Text style={{ fontSize: 20, marginTop: 15 }}>
            Enter tag description:
          </Text>
          <TextInput
            style={{ marginTop: 15, fontSize: 15 }}
            placeholder="Enter new listname"
            placeholderTextColor="#d8412e"
            onChangeText={(listname) => this.setState({ listname: listname })}
          ></TextInput>
          <Text style={{ fontSize: 20, marginTop: 15, marginBottom: 15 }}>
            Enter new tag priority:
          </Text>
          <InputSpinner
            max={5}
            min={1}
            step={1}
            colorMax={"#d8412e"}
            colorMin={"#d8412e"}
            value={this.state.number}
            onChange={(num) => {
              this.setState({ number: num });
            }}
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
            <Text style={{ color: "white" }} onPress={() => this.createList}>
              Create tag
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    const renderTags = ({ item }) => (
      <TouchableOpacity>
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
            name="bookmark-outline"
            size={20}
            color={item.color}
          />
          <Text style={styles.listTitle}>{item.name}</Text>
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
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.myLists}> My tags: </Text>
          <FlatList
            scrollEnabled={false}
            data={this.state.tags}
            renderItem={renderTags}
            keyExtractor={(item) => item.tag_id.toString()}
          ></FlatList>
          <Button
            title="Add new tag"
            onPress={() => this.setState({ createTag: true })}
          >
            {" "}
          </Button>
        </View>
      </View>
    );
  }
}
