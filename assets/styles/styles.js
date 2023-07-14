import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    headerName:{
        backgroundColor: 'red',
        textAlign: 'center',
        padding: 10,
        paddingVertical: -20,
        fontSize: 30,
        color: "blue",
        width: "100%",
    },

    filter:{

        flex: 1,
        fontSize: 30,
        color: "black",
        textAlign: "right"
        
    },
    filterContainer: {

        flexDirection: "row",
        justifyContent: "flex-end"
    },

})