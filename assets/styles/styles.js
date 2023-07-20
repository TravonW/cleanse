import { StyleSheet } from "react-native";

export default StyleSheet.create({

    // Tracking
    container: {
        position: "relative",
        height: 125,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    search: {
        position: "absolute",
        right: 70,
        top: 10,
     
        width: 32,
        height: 32,
    },
    logoContainer: {
        left: 20,
        marginTop: 75,
        flex: 1,
        flexDirection: 'row'
    },
    profile: {
        position: "absolute",
        right: 30,
        bottom: 10,
        

       
        width: 32,
        height: 32,
    },
    leastused: {
        position: "absolute",
        marginTop: 70,
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 20,
    },
    shirts: {
        position: "absolute",
        marginTop: 300,
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 20,
    },
    pants: {
        position: "absolute",
        marginTop: 480,
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 20,
    },
    logo: {
        position: "absolute",
        left: -10,
        height: 52,
        width: 260,
        bottom: 3,
    },
    logoContainer:{
        flex: 1,
    },
    wrapButton:{
        alignItems: 'center',
        marginHorizontal:50,
        padding:20,
        backgroundColor: 'orange',
    },
    txtFontSize:{
        fontSize:20,
    },
    item:{
        borderWidth:0.5,
        padding: 8,
        borderRadius:10,
        justifyContent: "center"
        
    },
    image:{
        width: 100,
        height: 100,

    }

    // Donate

    // Scan

})