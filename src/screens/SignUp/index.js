
import React, { useState } from "react";
import styles from "./styles"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";

export default function SignUp() {
const [Email, setEmail] = useState();
const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt_font}>
          Create Your Account
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#161515"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
   
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#161515"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#161515"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=" Confirm Password"
          placeholderTextColor="#161515"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>



      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
     
      <View>


        <TouchableOpacity>
          <Text style={styles.signup}>LOGIN </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
