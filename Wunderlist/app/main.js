import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button, FlatList, SafeAreaView, Alert } from 'react-native';
import styles from './main.css';
import { datetime, compare } from './utils/datetime';

export default class main extends React.Component {

    render () {
        const { navigate } = this.props.navigation;
        
        const DATA = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              title: 'First Item',
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Second Item',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              title: 'Third Item',
            },
        ];
    
        const Item = ({ title }) => (
            <View style={styles.item}>
              <View style={styles.itemtop}></View>
              <Text style={styles.title}>{title}</Text>
            </View>
        );
    
        const renderItem = ({ item }) => (
            <Item title={item.title} />
        );

        return(
            <View style={styles.container}>
                <Text> { datetime() } </Text>
                <Text> { compare(datetime(), "2021-03-15T23:37:14.000Z") } </Text>
                <View style={styles.end}>
                    <Button color="#000" title="Profile" onPress={() => navigate('Profile')}/>
                    <Button color="#000" title="Login" onPress={() => navigate('Login')}/>
                    <Button color="#000" title="Inbox" onPress={() => navigate('Inbox')}/>
                    <Button color="#000" title="prueba" onPress={() => navigate('prueba')}/>
                    <Button color="#000" title="tags" onPress={() => navigate('tags')}/>
                </View>
                <Image source={{uri: 'https://picsum.photos/200/200'}} style={styles.img}/>
            
                <View style={styles.center}>
                    <Button color="#000" title="center button" />
                </View>

                <SafeAreaView style={styles.container}>
                    <View style={styles.end}>
                        <Button color="#000" title="add task" onPress={() =>
                            DATA.push({
                                id: '1',
                                title: 'Fourth Item',
                            })}
                        />
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>


                <View style={styles.fixToText}>
                    <Button
                    title="Left button"
                    onPress={() => Alert.alert('Left button pressed')}
                    />
                    <Button
                    title="Right button"
                    onPress={() => console.log('Right button pressed')}
                    />
                </View>

            </View>
        );
    };
}