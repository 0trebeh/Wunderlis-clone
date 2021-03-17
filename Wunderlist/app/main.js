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
import { color } from "react-native-reanimated";

export default class main extends React.Component {
  constructor(props){
        super(props);
    
        this.state = {
            loading : false,
            Lists : [],
        }
    }
      
    componentDidMount(){
        this.getElements();
    };

    componentDidUpdate(){

    }
    
    getElements = async () => {
        this.setState({ loading : true });
        const res = await axios.get('https://listical.herokuapp.com/api/lists/' + '1');
        this.setState({ Lists: res.data, loading : false });
        console.log(this.state.Lists);
    }

  render() {
    const { navigate } = this.props.navigation;

    const Lists = [
      {
        title: "Homework",
        color: "red",
      },
      {
        title: "Reading list",
        color: "blue",
      },
    ];

    const renderLists = ({ item }) => (
      <TouchableOpacity onPress={() => navigate("Inbox")}>
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
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text> {datetime()} </Text>
        <Text> {compare(datetime(), "2021-03-16T23:37:14.000Z")} </Text>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigate("Inbox")}>
            <View
              style={styles.ContainerView}
            >
              <Text style={styles.categoryText}>Inbox</Text>
              <MaterialIcons name="inbox" size={30} color="black" />
            </View>
          </TouchableOpacity>
          <Text style={styles.myLists}> My lists: </Text>
          <FlatList
            scrollEnabled={false}
            data={Lists}
            renderItem={renderLists}
            keyExtractor={(item) => item.title}
          ></FlatList>
          <Button
            title="Add new list"
            onPress={() => Alert.alert("New list added")}
          ></Button>
        </View>
        <View style={styles.end}>
          <Button
            color="#000"
            title="Profile"
            onPress={() => navigate("Profile")}
          />
          <Button
            color="#000"
            title="Login"
            onPress={() => navigate("Login")}
          />
          <Button color="#000" title="tags" onPress={() => navigate("tags")} />
        </View>
      </View>
    );
  }
}
