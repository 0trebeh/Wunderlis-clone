import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from "react-native";
import styles from "./main.css";
import { datetime, compare } from "./utils/datetime";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

export default class main extends React.Component {
  /*constructor(props){
        super(props);
    
        this.state = {
            loading : false,
            DATA: []
        }
    }
      
    componentDidMount(){
        this.getElements();
    };

    componentDidUpdate(){

    }
    
    getElements = async () => {
        this.setState({ loading : true });
        const res = await axios.get('https://listical.herokuapp.com/api/tasks/1');
        this.setState({ DATA: res.data, loading : false });
        console.log(this.state.DATA);
    }*/

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

    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
      },
    ];

    const Item = ({ title }) => (
      <View style={styles.item}>
        <View style={styles.itemtop}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

    const renderLists = ({ item }) => (
      <TouchableOpacity onPress={() => navigate("Inbox")}>
        <View
          style={{
            marginBottom: 10,
            padding: 0,
            borderRadius: 14,
            backgroundColor: "#eee", // item.color
            borderColor: "#eee", // item.color
            borderWidth: 10,
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="format-list-bulleted"
            size={20}
            color={item.color}
          />
          <Text style={styles.listTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );

    const renderItem = ({ item }) => <Item title={item.title} />;

    return (
      <View style={styles.container}>
        <Text> {datetime()} </Text>
        <Text> {compare(datetime(), "2021-03-16T23:37:14.000Z")} </Text>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigate("Inbox")}>
            <View
              style={{
                marginBottom: 30,
                padding: 15,
                borderRadius: 20,
                backgroundColor: "#eee", // item.color
                borderColor: "#eee", // item.color
                display: "flex",
                flexDirection: "center",
                justifyContent: "space-evenly",
                borderWidth: 20,
                alignItems: "center",
              }}
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
            keyExtractor={(item) => item.id}
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
          <Button
            color="#000"
            title="prueba"
            onPress={() => navigate("prueba")}
          />
          <Button
            color="#000"
            title="prueba2"
            onPress={() => navigate("prueba2")}
          />
          <Button color="#000" title="tags" onPress={() => navigate("tags")} />
        </View>
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={styles.img}
        />

        <View style={styles.center}>
          <Button color="#000" title="center button" />
        </View>

        <SafeAreaView style={styles.container}>
          <View style={styles.end}>
            <Button
              color="#000"
              title="add task"
              onPress={() =>
                DATA.push({
                  id: "1",
                  title: "Fourth Item",
                })
              }
            />
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>

        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert("Left button pressed")}
          />
          <Button
            title="Right button"
            onPress={() => console.log("Right button pressed")}
          />
        </View>
      </View>
    );
  }
}
