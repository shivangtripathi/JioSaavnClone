import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import Data from './Data'
import {AntDesign} from '@expo/vector-icons'
const Shorties = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'white',padding:5}}>Shorties</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal scrollEventThrottle={16} style={{flexDirection:'row',marginTop:8}}>
                {Data.map((item,index)=>(
                    <View key={index} style={{height:280,width:100,marginHorizontal:3,borderRadius:5}}>
                        <TouchableWithoutFeedback>
                        <View style={{height:250,width:100}}>
                            <Image source={item.img}  style={{flex:1, height: undefined, width: undefined,borderRadius:5,opacity:0.4}} resizeMode="cover"/>
                            <TouchableOpacity style={{translateY:-220,marginLeft:'auto',zIndex:5,paddingHorizontal:8}}>
                            <AntDesign name='like2' size={22} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={{height:60,width:60,translateY:-140,marginLeft:20}}>
                            <Image source={item.img}  style={{flex:1, height: undefined, width: undefined,borderRadius:30}} resizeMode="cover"/>
                        </View>
                        <Text style={{color:'white',fontSize:12,paddingLeft:8,translateY:-120}}>{item.title}</Text>
                        </TouchableWithoutFeedback>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Shorties

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:260,
        flex:1,
        marginLeft:15,
    }
})