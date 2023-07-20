import { Pressable, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../assets/images/search.png"
import Profile from "../assets/images/profile.png"
import Logo from "../assets/images/logo.png"
import styles from "../assets/styles/styles";
import useClothes from "../hooks/useClothes";
import { useState, useEffect } from "react";




/// functions //
const filterOptions = () => {
    console.log('hello')
}

export default function Tracking() {

    // object destructuring
    const { clothes } = useClothes()
    const [isLoading, setisLoading] = useState(true);

    renderItem = ({item, index}) =>{
        return(
            <TouchableOpacity
            style={[styles.item,
            {
                marginTop: 11,
                height: 150,
                backgroundColor: "white",
            }
            ]}
            >
                <Image
                style={styles.image}
                />

            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.logo} />
                <Image source={Search} style={styles.search} />
                <Image source={Profile} style={styles.profile} />
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.leastused}> Least Used </Text>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                    data={clothes}
                    renderItem={renderItem}
                    keyExtractor={item => `key-${item.id}`}   
                  />
                )}

                    <TouchableOpacity style={styles.wrapButton}>
                    <Text style={styles.txtFontSize}> Scroll To Item Selected</Text>
                    </TouchableOpacity>



                {/*  
                <FlatList
                      data={clothes}
                      renderItem={({ item }) => 
                    <View style={{uri: item.src}}>
                        <Image style={{width: 100, height: 100}} source={item.src} />
                        <Text> hello </Text>
                    </View>
                    }
                      keyExtractor={item => item.id}
                      horizontal= {true}
                      />
                      */}
                
            </View>

            <View>
                <Text style={styles.shirts}> Shirts </Text>
            </View>

            <View>
                <Text style={styles.pants}> Pants </Text>
            </View>

        </View>
    );
}