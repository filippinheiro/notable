import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../values/colors'

export default function Note({title, content}) {
    return (
        <View styles = {styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style = {styles.content}>
                {content}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingStart: 10,
        paddingTop: 10
    },
    content:{
        fontSize: 16,
        padding: 10,
        color: '#999'
    }
})
