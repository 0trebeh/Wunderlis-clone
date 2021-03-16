import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    end: {
      alignItems: 'flex-end',
      marginVertical: 10,
      marginHorizontal: 16,
    },

    img: {
      height: 200,
      marginHorizontal: 10
    },

    //boton del medio
    buttonCenter: {
      marginVertical: 7,
    },

    //botones de abajo
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 13,
      marginHorizontal: 20,
    },

    //notas
    itemtop: {
      backgroundColor: '#ffd700',
      width: 6,
      marginVertical: 0,
      marginEnd: 10,
    },
    item: {
      flexDirection: 'row',
      backgroundColor: 'khaki',
      padding: 0,
      marginVertical: 3,
      marginHorizontal: 6,
    },
    title: {
      fontSize: 32,
    },
});

export default styles;