import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import dateExtractor from '../services/dateExtractor'


export default function Note({title, content, dateString}) {

    const shortDate = dateExtractor.getShortDate(dateString)

    return (
        <View style = {styles.container}>
            <Text style={styles.date}>{shortDate}</Text>
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

    date:{
        fontSize: 12,
        paddingStart: 10,
        paddingLeft: 10,
        color: '#999'
    },
    container:{
        alignContent: 'center',
        paddingBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingStart: 10,
        paddingLeft: 10,
        paddingTop: 10
    },
    content:{
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        paddingStart: 10,
        paddingLeft: 10,
        color: '#000'
    }
    
})
