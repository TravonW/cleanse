import { StyleSheet, Text, View } from "react-native";

export default function Tracking() {
    return (
        <View style={styles.container}>
            <Text> Hello from Tracking</Text>
            {/* <Image source={} /> */}
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    }
});