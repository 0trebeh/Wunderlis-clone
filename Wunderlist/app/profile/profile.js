import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button, FlatList, SafeAreaView, Alert } from 'react-native';

export default function profile({ navigation, route }) {
  const [count, setCount] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = count;
  });

  return (
    <View>

        <FlatList
            data={count}
        />

        <Button onClick={() => setCount(count + 1)}>
            Click me
        </Button>
    </View>
  );
}

// de aqui pa riba es prueba

/*import React from 'react';
import { Text, View, Image, Button, FlatList, SafeAreaView, Alert } from 'react-native';
import styles from './profile.css';

export default class profile extends React.Component {

    render () {
      const { navigate, route } = this.props.navigation;
      return(
          <View>
              <Text>Profile</Text>
          </View>
          
      );
    };
};*/