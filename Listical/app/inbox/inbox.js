import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  SearchBar,
  ActivityIndicator,
} from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { datetime, compare } from "../utils/datetime";
import styles from "./inbox.css";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Inbox({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  var renderItem = "";

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      let res = [];
      if(route.params.id == 0){
        let response = "";
        try {
          response = await AsyncStorage.getItem('user');
        } catch (error) {
          // Error retrieving data
        }
        res = await axios.get("https://listical.herokuapp.com/api/inbox/" + 
        JSON.parse(response).user_id.toString());
      }else{
        res = await axios.get("https://listical.herokuapp.com/api/tasks/" + route.params.id.toString());
      }
      const task = res.data;
      console.log(task);
      if (task) {
        setTask(task);
        setTasks(task);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  async function addTask() {
    if (newTask === "") {
      return;
    }

    const search = task.filter((task) => task === newTask);

    if (search.length !== 0) {
      Alert.alert("Duplicate task", "Task already exists");
      return;
    }

    const Task = {
      value: newTask,
      img: null,
      position_list: null,
      position_inbox: null,
      created: datetime(),
      edited: datetime(),
      tag: null,
      list: route.params.id
    }
    Keyboard.dismiss();
    await axios.post("https://listical.herokuapp.com/api/task", Task);
    const res = await axios.get("https://listical.herokuapp.com/api/tasks/" + route.params.id.toString());
    setTask( res.data );
    setNewTask("");
      
  }

  async function removeTask(item) {
    Alert.alert(
      "Delete task",
      "Are you sure you want to delete this task?",
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

  async function remove(item) {
    const id = item.task_id;
    setTask(task.filter((tasks) => tasks !== item));
    await axios.delete("https://listical.herokuapp.com/api/task/" + id.toString());
  }


  function search(string) {
    if(string !== ""){
      let tasksSearch = tasks.filter(function(res) { 
        return res.value.toLowerCase().indexOf(string.toLowerCase()) > -1;
      });
      setTask( tasksSearch );
    }
    else {
      setTask( tasks );
    }    
  }

  if(route.params.id == 0){
    renderItem = ({ item, index, drag, isActive }: RenderItemParams<{tasks: string}> ) => (
      <TouchableOpacity onLongPress={ drag }>
        <View style={styles.ContainerView}>
          <Text style={styles.TaskText}>{item.value}</Text>
          <TouchableOpacity onPress={() => removeTask(item)}>
            <MaterialIcons name="delete-forever" size={25} color={ isActive ? 'black' : item.color} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }else{
    renderItem = ({ item, index, drag, isActive }: RenderItemParams<{tasks: string}>) => (
      <TouchableOpacity onLongPress={drag}>
        <View style={styles.ContainerView}>
          <Text style={styles.TaskText}>{item.value}</Text>
          <TouchableOpacity onPress={() => removeTask(item)}>
            <MaterialIcons name="delete-forever" size={25} color={ isActive ? 'black' : route.params.color} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
  
  if (loading) {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator animating size="small" color='#999999' />
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={70}
      behavior="padding"
      style={{ flex: 1 }}
      enabled={Platform.OS === "ios"}
    >
      <View style={styles.SearchBar}>
        <TextInput
          style={styles.Input}
          placeholderTextColor="#999"
          placeholder="Search a task"
          onChangeText={(text) => search(text)}
        />
        <Ionicons name="search-outline" style={styles.searchButton} size={25} color="#000"/>
      </View>
      <View style={styles.container}>
        <View style={styles.Body}>
          <DraggableFlatList
            data={task}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.task_id.toString()}
            onDragEnd={({ data }) => setTask(data)}
          />
        </View>
        <View style={ route.params.id == 0 ? { width: 0, height: 0 } : styles.Form}>
          <TextInput
            style={ route.params.id == 0 ? { width: 0, height: 0 } : styles.Input}
            placeholderTextColor="#999"
            placeholder="Add a new task"
            onChangeText={(text) => setNewTask(text)}
            value={newTask}
          />
          <TouchableOpacity style={ route.params.id == 0 ? { width: 0, height: 0 } : styles.Button} 
          onPress={() => addTask()}>
            <Ionicons name="ios-add" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
