import React from 'react'
import { View, StyleSheet } from 'react-native'
import Balance from '../../components/Balance'
import Header from '../../components/Header'

export default function Home(){
    return (
        <View style={styles.container}>
            <Header name="Jenilson Francisco"/>
            <Balance/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})