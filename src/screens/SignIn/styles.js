import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {
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

export default styles;
