import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useSelector } from "react-redux";
import { addTodo } from "../lib/features/TodoList/service";

export default function TodoForm({ navigation }) {
  const { loading, error } = useSelector((state) => state.todoList);
  const [todo, setTodo] = useState("");

  function saveTodo() {
    addTodo({
      title: todo,
      completed: false,
    });
    navigation.goBack();
  }

  if (loading) {
    return <Text style={styles.loading}>loading...</Text>;
  }
  if (error) {
    return <Text style={styles.error}>error...</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        <Button
          style={styles.backButton}
          title="GO Back"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Todolist Form</Text>
        <TextInput
          placeholder="Enter a task"
          onChangeText={setTodo}
          style={styles.input}
        />
        <Button title="Save Todo" onPress={saveTodo} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
 
  loading: {
    color: "#333",
    backgroundColor: "#f0f0f0",
    padding: 10,
    textAlign: "center",
  },
  error: {
    color: "#333",
    backgroundColor: "#f0f0f0",
    padding: 10,
    textAlign: "center",
  },
  backButton: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffe6e6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#ffccd5",
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: "#D3D3D3	rgb(243, 232, 154)",
    
  },
});
