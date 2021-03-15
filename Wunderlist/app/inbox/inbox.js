import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";

import { AsyncStorage } from "@react-native-community/async-storage";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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
            keyExtractor={(item) => item.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.ContainerView}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  Body: {
    flex: 1,
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10,
  },
  FlatList: {
    flex: 1,
    marginTop: 5,
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  TaskText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
});
