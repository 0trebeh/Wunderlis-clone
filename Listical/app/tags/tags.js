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
import styles from './tags.css';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

export default class tags extends React.Component {
    constructor(props){
        super(props);
      
      this.state = {
        loading : false,
        tags : [],
        user : ""
      }
    }
        
    componentDidMount(){
      this.getElements();
    };
  
    componentDidUpdate(){
    }
      
    getElements = async () => {
      this.setState({ loading : true });
      let response = "";
      try {
        response = await AsyncStorage.getItem('user');
      } catch (error) {
        // Error retrieving data
      }
      const res = await axios.get('https://listical.herokuapp.com/api/tags/' + 
      JSON.parse(response).user_id.toString());
  
      this.setState({ user: response, tags: res.data, loading : false });
      console.log(this.state.tags);
    }

    createTag = async () => {
        let newName = "";
    
        Alert.alert(
          "el nombre del tag",
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
            name : newName, 
            description, 
            color, 
            priority,
            user_id: JSON.parse(this.state.user).user_id
        }
        console.log(newList);
    
        /*let tag = this.state.tags;
        const res = await axios.post("https://listical.herokuapp.com/api/tag", newTag);
        this.setState({ tags : tag.push( res.data[0] ) });*/
      }

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
      }

      remove = async (item) => {
        const id = item.tag_id;
        let tag = this.state.tags;
        this.setState({ Lists: tag.filter((tags) => tags !== item) });
        await axios.delete("https://listical.herokuapp.com/api/tag/" + id.toString());
      }

      render() {
        const { navigate } = this.props.navigation;
    
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
              <ActivityIndicator animating size="small" />
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
                onPress={() => this.createTag()}
              ></Button>
            </View>
          </View>
        );
      }
}