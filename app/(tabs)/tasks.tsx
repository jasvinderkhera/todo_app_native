import { View, Text, ScrollView, StyleSheet, CheckBox } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const Tasks = () => {
  const [isSelected, setSelection] = useState(false);
  const router = useRouter();

  const taskAdd = () => {
    router.navigate("/addTask");
  };
  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Link
          href={"/login"}
          style={{
            display: "flex",
            backgroundColor: "#C4BFBF",
            padding: 20,
            height: 30,
            width: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Icon name={"angle-left"} size={30} />
        </Link>
        <Link
          href={"/login"}
          style={{
            display: "flex",
            backgroundColor: "#C4BFBF",
            padding: 20,
            height: 30,
            width: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Icon name="user" size={30} />
        </Link>
      </View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          fontWeight: "bold",
          paddingVertical: 20,
        }}
      >
        Tasks
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "gray",
          paddingBottom: 7,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          <Icon name="star" size={18} style={{ paddingRight: 10 }} />
          My Tasks + New List
        </Text>
      </View>

      <View style={{ paddingVertical: 15 }}>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text style={{ fontSize: 20 }}>Project 1</Text>
          </View>
          <Icon name="star" size={18} />
        </View>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text style={{ fontSize: 20 }}>Meeting</Text>
          </View>
          <Icon name="star" size={18} />
        </View>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text style={{ fontSize: 20 }}>Birthday Party</Text>
          </View>
          <Icon name="star" size={18} />
        </View>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text style={{ fontSize: 20 }}>Morning Walk</Text>
          </View>
          <Icon name="star" size={18} />
        </View>
      </View>

      <View style={styles.AddTask}>
        <TouchableOpacity onPress={taskAdd}>
          <Icon name="plus" style={{ fontSize: 20, color: "white" }} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20, // Adjust the size as needed
    height: 20,
    borderRadius: 15, // Makes the checkbox circular
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#4CAF50", // Customize the color when checked
  },
  innerCircle: {
    width: 10, // Smaller circle size inside
    height: 10,
    borderRadius: 7.5,
    backgroundColor: "#fff",
  },
  outerContainer: {
    marginVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  AddTask: {
    padding: 20,
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -220,
    right: 20,
  },
});

export default Tasks;

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../../components/store';
// import { addTodo, deleteTodo } from '../../components/todoSlice';
// import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Tasks: React.FC = () => {
//   const todos = useSelector((state: RootState) => state.todos.todos);
//   const dispatch = useDispatch<AppDispatch>();
//   const [newTask, setNewTask] = useState<string>('');

//   const handleAddTask = () => {
//     if (newTask.trim()) {
//       dispatch(addTodo(newTask));
//       setNewTask('');
//     }
//   };

//   const handleDeleteTask = (id: number) => {
//     dispatch(deleteTodo(id));
//   };

//   return (
//     <ScrollView style={{ padding: 20 }}>
//       <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', paddingVertical: 20 }}>
//         Tasks
//       </Text>

//       {todos.map((todo) => (
//         <View key={todo.id} style={styles.outerContainer}>
//           <View style={styles.innerContainer}>
//             <Text style={{ fontSize: 20 }}>{todo.text}</Text>
//           </View>
//           <TouchableOpacity onPress={() => handleDeleteTask(todo.id)}>
//             <Icon name="trash" size={18} color="red" />
//           </TouchableOpacity>
//         </View>
//       ))}

//       <View style={styles.outerContainer}>
//         <TextInput
//           value={newTask}
//           onChangeText={setNewTask}
//           placeholder="New Task"
//           style={{ borderWidth: 1, padding: 10, flex: 1 }}
//         />
//         <TouchableOpacity onPress={handleAddTask} style={styles.AddTask}>
//           <Icon name="plus" style={{ fontSize: 20, color: 'white' }} />
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     marginVertical: 10,
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//   },
//   innerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   AddTask: {
//     padding: 10,
//     backgroundColor: 'black',
//     width: 40,
//     height: 40,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Tasks;
