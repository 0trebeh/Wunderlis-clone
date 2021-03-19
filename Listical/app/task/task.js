import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button, FlatList, SafeAreaView, Alert } from 'react-native';
import styles from './task.css';

export default class task extends React.Component {

    
    
    /* <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={styles.img}
        /> */
    

        <Button
            title="add img"
            onPress={() => {
            navigation.navigate("Image");
            }}
        />
}