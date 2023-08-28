import react from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
    return (
        <View style={styles.container}>
           <View style={styles.content}>
            <Text style={styles.username}>Jenilson Francisco</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonuser}>
                <Feather name="user" size={27} color="#fff" />
            </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8000ff",
        paddingTop: statusBarHeigth,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    },
    buttonuser: {
        width: 44,
        height: 44,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2,

    }
})