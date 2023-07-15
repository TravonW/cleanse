import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";


/// functions //
const filterOptions = () =>{
    console.log('hello')
}

export default function Tracking() {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput  style ={ styles.searchBar}> hi </TextInput>
            <Pressable onPress={filterOptions} >
                <Text style={styles.filterText}>Filter</Text>
                {/* <Ionicons size={30} style={styles.filterImage} /> */}
                <Ionicons name="filter" size={24} style={styles.filterImage}/>
            </Pressable>
            {/* <Image source={} /> */}
            {/* <StatusBar style="auto" /> */}
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        position: "relative",

        backgroundColor: 'green',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    filterText: {
        position: "absolute",
        top: 125,
        right: 40,
        color: "red",
        fontSize: 35,
    },
    filterImage: {
        position: "absolute",
        top: 135,
        right: 10,
        color: "red",
    },
    searchBar:{
        position: "absolute",
        top: 120,
        right: 30,
    },
    
});