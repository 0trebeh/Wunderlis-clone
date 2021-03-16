import React, { useState, useEffect } from "react";
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
} from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./inbox.css";

export default function Inbox() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const renderItem = ({ item, index, drag, isActive }) => (
    <TouchableOpacity onLongPress={drag}>
      <Text>{item.label}</Text>
      <View
        style={styles.ContainerView}
      >
        <Text style={styles.TaskText}>{item}</Text>
        <TouchableOpacity onPress={() => removeTask(item)}>
          <MaterialIcons name="delete-forever" size={25} color="#f64c75" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  async function addTask() {
    if (newTask === "") {
      return;
    }

    const search = task.filter((task) => task === newTask);

    if (search.length !== 0) {
      Alert.alert("Duplicate task", "Task already exists");
      return;
    }

    setTask([...task, newTask]);
    setNewTask("");

    Keyboard.dismiss();
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
          onPress: () => setTask(task.filter((tasks) => tasks !== item)),
        },
      ],
      {
        cancelable: false,
      }
    );
  }

  /*useEffect(() => {
    async function loadData() {
      const task = await AsyncStorage.getItem("task");

      if (task) {
        setTask(JSON.parse(task));
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function savedData() {
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    savedData();
  }, [task]);*/

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={70}
      behavior="padding"
      style={{ flex: 1 }}
      enabled={Platform.OS === "ios"}
    >
      <View style={styles.container}>
        <View style={styles.Body}>
          <DraggableFlatList
            data={task}
            index={task.index}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onDragEnd={() => setTask(...task, newTask)} //Aqui es q se borran
          />
        </View>
        <View style={styles.Form}>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#999"
            placeholder="Add a new task"
            onChangeText={(text) => setNewTask(text)}
            value={newTask}
          />
          <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
            <Ionicons name="ios-add" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
