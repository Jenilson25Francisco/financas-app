import { StyleSheet, Text, View } from "react-native/types";

export default function Balance(){
    return(
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    }
})