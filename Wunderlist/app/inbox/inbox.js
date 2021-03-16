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
} from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./inbox.css";

export default function Inbox() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

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

  useEffect(() => {
    async function loadData() {
      const task = JSON.parse(localStorage.getItem("task"));
    }
    loadData();
  }, []);

  useEffect(() => {
    async function savedData() {
      localStorage.setItem("task", JSON.stringify(task));
    }
    savedData();
  }, [task]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={70}
      behavior="padding"
      style={{ flex: 1 }}
      enabled={Platform.OS === "ios"}
    >
      <View style={styles.container}>
        <View style={styles.Body}>
          <FlatList
            style={styles.FlatList}
            data={task}
            keyExtractor={(item) => item.toString()} //item.id
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  marginBottom: 15,
                  padding: 15,
                  borderRadius: 4,
                  backgroundColor: "#eee", // item.color
                  borderColor: "#eee", // item.color
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderWidth: 1,
                  alignItems: "center",
                }}
              >
                <Text style={styles.TaskText}>{item}</Text>
                <TouchableOpacity onPress={() => removeTask(item)}>
                  <MaterialIcons
                    name="delete-forever"
                    size={25}
                    color="#f64c75"
                  />
                </TouchableOpacity>
              </View>
            )}
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
