import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'

export default function Home(){
    return (
        <View style={styles.container}>
            <Header/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})