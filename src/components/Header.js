import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../values/colors'

export default function Header({style, title}) {
    return (
        <View style={[styles.headerContainer, style]}>
            <Text style = {styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 70,
        alignContent: 'center',
        width: '100%',
        backgroundColor: colors.primaryGreen
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 20,
        paddingStart: 10,

    }
})



