import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

export default function NoteDetail({ navigation: { state: { params: { note } } } }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style = {styles.content}>{note.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingBottom: 15,
        paddingTop: 15,
    },
    container: {
        padding: 10
    },
    content: {
        fontSize: 18,
        paddingStart: 15,
        paddingLeft: 15,
    }
})
NoteDetail.navigationOptions = {
    title: 'Notable'
} 
