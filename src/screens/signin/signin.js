import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Button, 
    StyleSheet,
    Linking
} from 'react-native';

const styleLogin = StyleSheet.create( {
    loginContainer: {
        flex: 1,
        backgroundColor: "#2A5C54",
        alignItems: "center",
        justifyContent: "center"
    },
    loginImage: {
        marginBottom: 40,
    },
    loginTextInput: {
        backgroundColor: "#FFF",
        color: "#000",
        borderRadius: 30,
        height: 40,
        margin: 12,
        padding: 10,
        marginBottom: 20,
        alignItems: "center"
    },
    forgotPassword: {
        color: "#21A4D9",
        fontSize: 15,
        height: 30,
        marginBottom: 30
    },
    loginButton: {
        width: "100%",
        alignSelf: 'stretch',
        borderRadius: 25,
        height: 100,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#164C42"
    },
    loginText: {
        margin: 40,
        fontSize: 30,
        color:"#000"
    }
} );

function Signin() {
    return(
        <View style = { styleLogin.loginContainer }>
            <Text style = { styleLogin.loginText }> Girmiti Project </Text>
            <View style = { { width: "100%" } }>
                <TouchableOpacity>
                    <TextInput style = { styleLogin.loginTextInput } placeholder = 'Email'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <TextInput style = { styleLogin.loginTextInput } secureTextEntry = { true } placeholder = 'Password'/>
                </TouchableOpacity>
            </View>
            <Text style = { styleLogin.forgotPassword } onPress = { () => Linking.openURL('http://google.com') }> Forgot Password ?</Text>
            <View style = { { width: "90%" } }>
                <TouchableOpacity>
                    <Button style = { styleLogin.loginButton } title='Sign Up'></Button>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Signin;
