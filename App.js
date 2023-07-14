import { Text, View, Image, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./assets/styles/styles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tracking from "./Tabs/tracking";
import Camera from "./Tabs/camera";
import Recycle from "./Tabs/Recycle";


import { NavigationContainer } from "@react-navigation/native"



const Tab = createBottomTabNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tracking" component={Tracking} />
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Recycle" component={Recycle} />
      </Tab.Navigator>
    </NavigationContainer>


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
  );
}