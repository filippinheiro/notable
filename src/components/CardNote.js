import React from 'react';

import {StyleSheet, View } from 'react-native';
import Note from './Notes'
import { TouchableOpacity } from 'react-native';

export default function CardNote({data, data : {title, content, createdAt}, cardFunction, target}){

    return (
        <TouchableOpacity onPress = {() => {cardFunction(target, {note: data})}}>
            <View style={styles.card}>
                <Note title={title} dateString = {createdAt} content = {content}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    }
})