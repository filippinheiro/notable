import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import CardNote from '../components/CardNote'
import api from '../services/api'

export default function Main({navigation : {navigate}}) {

    const [page, setPage] = useState(1)
    const [notes, setNotes] = useState([])
    const [noteInfo, setNoteInfo] = useState({})

    useEffect(() => {
        loadNotes()
    }, [])

    async function loadNotes(pages = 1) {
        const response = await api.get(`/notes?page=${pages}`)
        const {docs, ...noteInfo} = response.data
        setNotes([...notes, ...docs])
        setNoteInfo(noteInfo)
        setPage(pages)
    }

    function loadMore() {
        if(page === noteInfo.pages) return
        const pageNumber = page + 1
        loadNotes(pageNumber)
    }

    function renderItem({item}) {
        return (
            <CardNote data = {item} target = "NoteDetail" cardFunction = {navigate}/>
        )
    }

    return (
        <View styles={styles.container}>
            <FlatList
                contentContainerStyle= {styles.list}
                renderItem={renderItem}
                data={notes}
                keyExtractor = {item => item._id}
                onEndReached = {loadMore}
                onEndReachedThreshold = {0.1}/>
        </View>
    ) 
}


Main.navigationOptions = {
    title: 'Notable'
} 

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fafafa',
    },
    list: {
        paddingBottom: 20
    }
})

