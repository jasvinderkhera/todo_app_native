import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

const AddTask = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: 700, textAlign: "center" }}>
        Add new Task
      </Text>

      <TextInput placeholder="Enter new task.." style={styles.input} />
      <TouchableOpacity>
        <View style={styles.addBtn}>
          <Text style={{color:"white",fontSize:18}}>Add Task</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    borderWidth:1,
    borderRadius:5
  },
  addBtn: {
    height:40,
    width:150,
    backgroundColor:"black",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:80
  },
});

export default AddTask;
