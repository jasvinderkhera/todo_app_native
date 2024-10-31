import { View, Text, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FunBtn from "@/components/FunBtn";
import { Link } from "expo-router";

const ForgotPassword = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Link
      href={"/login"}
        style={{
          display:"flex",
          backgroundColor: "#C4BFBF",
          padding: 20,
          height: 30,
          width: 30,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
      >
        <Icon name="angle-left" size={30} />
      </Link>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          fontWeight: 600,
          paddingBottom: 20,
        }}
      >
        Forgot Password
      </Text>
      <Text style={{paddingTop:20, paddingBottom:40, color:"gray  "}}>Please enter your email address below and we’ll send you a link to reset  the password.</Text>
      <Text style={{ paddingBottom: 10 }}>
        {" "}
        <Icon name="envelope" size={15} /> Your Email
      </Text>
      <TextInput
        placeholder="Enter your Email"
        style={{
          height: 45,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 45,
        }}
      />
      <FunBtn title={"Reset Password"} />
      <View
        style={{
          marginVertical: 30,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 16 }}>
          Don't have a account?
        </Text>
        <Link
          href={"/signup"}
          style={{ color: "#1877F2", fontWeight: 600, fontSize: 16 }}
        >
          Sign Up
        </Link>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            textAlign: "center",
            paddingBottom: 10,
          }}
        >
          OR
        </Text>
        <View
          style={{ borderTopWidth: 1, borderTopColor: "gray", height: 1 }}
        ></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 30,
          justifyContent: "center",
          paddingVertical: 40,
        }}
      >
        <Text style={{ color: "blue" }}>
          <Icon name="facebook" size={30} />
        </Text>
        <Text style={{ color: "red" }}>
          <Icon name="instagram" size={30} />
        </Text>
        <Text style={{ color: "blue" }}>
          <Icon name="twitter" size={30} />
        </Text>
        <Text style={{ color: "orange" }}>
          <Icon name="google" size={30} />
        </Text>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
