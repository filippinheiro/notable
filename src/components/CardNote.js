import React from 'react';

import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Note from './Notes'

export default function CardNote({title, content}){
    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <Note title={title}  content = {content}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginBottom: 5,
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 20
    }
})