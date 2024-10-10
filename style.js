import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'darkblue',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlayContainer: {
      position: 'absolute',
      bottom: 30,
      right: 30,
    },
    iconContainer: {
      zIndex: 1,
    },
    welcome: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      paddingTop: 10,
    },
    menu: {
      width: 60,
      height: 60,
      borderRadius: 50,
      paddingLeft: 50,
      paddingTop: 20,
    },
    whtsp: {
      width: 70,
      height: 70,
    },
    fixedHeader: {
      position: 'absolute',
      top: 0,
      width: '100%',
      backgroundColor: '#007bff',
      padding: 20,
      zIndex: 1,
      alignItems: 'center',
    },
    companyName: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    banner: {
      backgroundColor: '#007bff',
      padding: 20,
      marginTop: 60,
    },
    text: {
      color: 'white',
      margin: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#007bff',
    },
    white: {
      width: 250,
      height: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      borderRadius: 8,
    },
    call: {
      fontSize: 25,
      textAlign: 'center',
      padding: 7,
    },
    cardHeader: {
      backgroundColor: '#007bff',
      padding: 30,
    },
    image: {
      alignSelf: 'center',
      height: 350,
      width: 400,
      borderRadius: 5,
    },
    largeImage: {
      width: 400,
      height: 400,
      alignSelf: 'center',
    },
    keen: {
      marginHorizontal: 10,
      marginVertical: 50,
    },
    about: {
      fontSize: 30,
      textAlign: 'center',
      color: 'darkblue',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    text2: {
      marginTop: 10,
      fontSize: 20,
      textAlign: 'center',
      lineHeight: 35,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    TextInput: {
      fontSize: 25,
      color: 'black',
      borderWidth: 2,
      borderColor: 'black',
      margin: 5,
      width: 380,
      borderRadius: 30,
      alignSelf: 'center',
    },
    Button: {
      width: 120,
      height: 170,
      paddingLeft: 25,
    },
    feature: {
      marginEnd: 30,
      marginBottom: 10,
      fontWeight: 'bold',
      fontSize: 15,
      paddingLeft: 30,
    },
    info: {
      fontSize: 20,
      textAlign: 'center',
      paddingTop: 10,
      padding: 10,
    },
    contactDetails: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      paddingTop: 20,
    },
  });
  export default styles