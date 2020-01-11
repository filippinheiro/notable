import React from 'react';

import { Text, View } from 'react-native';

export default function NoteDetail({navigation: {state: {params: {note}}}}) {
    return (
        <View style = {StyleSheet.container}>
        <Text>{note.content}</Text>
        </View>
    )
}


NoteDetail.navigationOptions = {
    title: 'Notable'
} 
