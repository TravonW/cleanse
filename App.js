import { Text, View, Image, Button, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scan from "./Tabs/Scan";
import Recycle from "./Tabs/Donate";
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Tracking from "./Tabs/Tracking";




const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer >
      <Tab.Navigator >
        {/* To adjust styles of components use this line  */}
        <Tab.Screen name="." style={styles.navbar} component={Tracking} options={{
          headerTitleAlign: 'center', tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"red"} size={30} />
          ),
        }} />
        <Tab.Screen name=".." component={Scan} options={{
          headerTitleAlign: 'center', tabBarIcon: () => (<Ionicons name="ios-add-circle-sharp" color={"black"} size={30} />
          ),
        }} />
        <Tab.Screen name="..." component={Recycle}  options={{
          headerTitleAlign: 'center', tabBarIcon: () => (<FontAwesome5 name="hand-holding" color={"blue"} size={30}  />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    justifyContent: "center",
    color: 'red !important',
  }
});