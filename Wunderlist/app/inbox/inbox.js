import React from 'react';
import { Text, View, StyleSheet,  TextInput, TouchableOpacity } from 'react-native';

export default function Inbox() {
    return(
        <View style={styles.container}>
            <View style={styles.Body}>

            </View>
            <View style={styles.Form}>
                <TextInput/>
                <TouchableOpacity/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 20,
    },
    Body: {
        flex: 1,
    },
    Form: {
        padding: 0,
        height: 60,
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingTop: 13,
        borderTopWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#777'
    }
})