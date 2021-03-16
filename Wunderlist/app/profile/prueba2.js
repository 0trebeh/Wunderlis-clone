import React from 'react';
import axios from 'axios';
import { 
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from './profile.css';

export default class prueba2 extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading : false,
      task: [],
      search: ""
    }
  }
  
  componentDidMount(){
    this.getElements();
  };

  getElements = async () => {
    this.setState({ task : [
        { id: '1', value: '123' },
        { id: '2', value: '12345' },
        { id: '3', value: '15263' },
        { id: '4', value: '2345' },
        { id: '5', value: '54321' },
        { id: '6', value: '0123' },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            value: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            value: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            value: 'Third Item',
        },
    ] });
  }

  search = (char) => {

    this.setState({ search: char });
    const searchState = this.state.search;

    const task = this.state.task;
    const search = task.filter(function(res) { 
        return res.value.toLowerCase().indexOf(searchState.toLowerCase()) > -1;
    });

    if (search.length !== 0) {
        console.log(search);
    } else {
        console.log(search);
    }

  }

  render () {
    const { navigate } = this.props.navigation;
    const task = [
        { id: '1', value: '123' },
        { id: '2', value: '12345' },
        { id: '3', value: '15263' },
        { id: '4', value: '2345' },
        { id: '5', value: '54321' },
        { id: '6', value: '0123' },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            value: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            value: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            value: 'Third Item',
        },
    ];

    const Item = ({ value }) => (
      <View style={styles.item}>
        <View style={styles.itemtop}></View>
        <Text style={styles.title}>{value}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item value={item.value} /> 
    );

    if(this.state.loading){
      return(
        <View>
          <Text>Loading...</Text>
        </View>      
      );
    }
    return(
      <View>
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 0,
                height: 60,
                justifyContent: "center",
                alignSelf: "stretch",
                flexDirection: "row",
                paddingTop: 13,
                borderTopWidth: 1,
                borderColor: "#eee",
            }}>
            <TextInput
                style={{
                    flex: 1,
                    height: 40,
                    backgroundColor: "#eee",
                    borderRadius: 4,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: "#eee",
                  }}
                placeholderTextColor="#999"
                placeholder="Add a new task"
                onChangeText={(text) => this.search(text)}
            />
            <TouchableOpacity style={{
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#1c6cce",
                borderRadius: 4,
                marginLeft: 10,
            }} onPress={() => Alert.alert('busqueda final')}>
                <Ionicons name="ios-add" size={25} color="#fff" />
            </TouchableOpacity>
            </View>
          <FlatList
            data={task}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>      
    );
  };
};