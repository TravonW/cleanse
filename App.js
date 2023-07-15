import { Text, View, Image, Button, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Camera from "./Tabs/Camera";
import Recycle from "./Tabs/Donate";
import { NavigationContainer } from "@react-navigation/native"
import Tracking from "./Tabs/Tracking";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer >
      <Tab.Navigator >
        {/* To adjust styles of components use this line */}
        <Tab.Screen name="Garment Tracking" style={styles.navbar} component={Tracking} options={{
          headerTitleAlign: 'center', tabBarIcon: () => (
            <MaterialCommunityIcons name="tshirt-crew" color={"red"} size={26} />
          ),
        }} />
        <Tab.Screen name="Camera" component={Camera} options={{
          headerTitleAlign: 'center', tabBarIcon: () => (<MaterialCommunityIcons name="camera" color={"red"} size={26} />
          ),
        }} />
        <Tab.Screen name="Donate" component={Recycle}  options={{
          headerTitleAlign: 'center', tabBarIcon: () => (<FontAwesome5 name="hand-holding-heart" color={"red"} size={26} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


// <View style={styles.container}>
//   <Text style={styles.headerName}> Garmant Tracking </Text>


//   {/* Make search bar, make it a form */}

//  {/* Make filter button */}

//  <View style={styles.filterContainer}>
//      <Button title="Filter" style={styles.filter} color="black"   onPress={filterOptions}></Button>
//     <Ionicons name="filter" size={24} color= "black" position />
//     </View>

//     {/* Make bottom navigation bar */}
//     <View>

//     </View>



//   </View>


const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    justifyContent: "center",
    color: 'red !important',
  }
});