import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#FFF", 
        height: "100%", 
    },
    image: { 
        width: "100%", 
        height: "20%",
    },
    text1: {
        marginTop: 20,
        fontSize: 30,
        alignSelf: "center",
    },
    text2: {
        marginHorizontal: 55,
        textAlign: "center",
        marginVertical: 5,
        opacity: 0.4,
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 15,
        paddingHorizontal: 10,
        borderColor: "#d8412e",
        borderRadius: 23,
        paddingVertical: 2,
    },
    buttonRegister: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#d8412e",
        marginVertical: 10,
        borderRadius: 23,
    },
    textButton: {
        color: "white",
    },
    buttonNavigation: {
        alignSelf: "center",
        color: "#d8412e",
    }
});

export default styles;