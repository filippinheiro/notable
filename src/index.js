import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Text, FlatList} from 'react-native';
import './config/StatusBarConfig'
import Header from './components/Header'
import CardNote from './components/CardNote'
import api from './services/api'

export default function App() {

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
        setPage(pages)
        setNoteInfo(noteInfo)
        console.log(pages, noteInfo)
    }

    function loadMore() {
        if(page === noteInfo.pages) return
        const pageNumber = page + 1
        setPage(pageNumber)
        loadNotes(pageNumber)
    }

    function renderItem({item}) {
        return (
            <CardNote title={item.title} content={item.content}/>
        )
    }

    return (
        <View styles={styles.container}>
        <Header style = {styles.header} title="Notable"/>
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

const styles = StyleSheet.create({
    header: {
        flex: 0
    },
    container: {
        flex:1,
        backgroundColor: '#fafafa',
    },
    list: {
        padding: 10
    }
})

