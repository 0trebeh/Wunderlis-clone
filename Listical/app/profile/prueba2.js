import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

export default class prueba2 extends React.Component {

  constructor(props){
    super(props);
  } 
  
  componentDidMount(){
    console.log("llamar notification");
    this.props.navigation.navigate("Example");
  };

  render () {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <Button
            title="Prueba con draggable flatlist"
            onPress={() => {
            navigate("Example");
            }}
        />
      </View>   
    );
  };
};