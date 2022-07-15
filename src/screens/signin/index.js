import React from 'react';
import styles from '../../screens/signin/styles';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Linking,
} from 'react-native';

function Signin() {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}> Girmiti Project </Text>
      <View style={{width: '100%'}}>
        <TouchableOpacity>
          <TextInput style={styles.loginTextInput} placeholder="Email" />
        </TouchableOpacity>
        <TouchableOpacity>
          <TextInput
            style={styles.loginTextInput}
            secureTextEntry={true}
            placeholder="Password"
          />
        </TouchableOpacity>
      </View>
      <Text
        style={styles.forgotPassword}
        onPress={() => Linking.openURL('http://google.com')}>
        {' '}
        Forgot Password ?
      </Text>
      <View style={{width: '90%'}}>
        <TouchableOpacity>
          <Button style={styles.loginButton} title="Sign In"></Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signin;
