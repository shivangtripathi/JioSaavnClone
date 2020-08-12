import React from 'react'
import { View, Text,TextInput, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {AntDesign} from '@expo/vector-icons'
import CardsDisplay from './CardsDisplay'
export default function Search() {
    return (
        <View style={{backgroundColor:'#2a2d36',alignItems:'center',flex:1}}>
           <ScrollView  style={{width:'100%'}} showsVerticalScrollIndicator={false}>
               <View style={{flex:1,width:'100%'}} >
                   <CardsDisplay />
               </View>
           </ScrollView>
           <View style={{backgroundColor:'#2a2d36',width:'100%',minHeight:'10%',borderBottomWidth:1,borderBottomColor:'grey', alignItems:'center',justifyContent:'center',borderTopStartRadius:20,borderTopEndRadius:20}}>
               <View style={{padding:8,fontSize:16,backgroundColor:'white',width:'94%',flexDirection:'row',borderRadius:12,alignItems:'center'}}>
                <AntDesign name="search1" size={20} color='black' style={{marginLeft:10}}/><TextInput style={{fontSize:20,marginLeft:10}}  autoFocus={false} placeholder="Music, Artist and Podcasts" placeholderTextColor='black' />
                </View>
           </View>
        </View>
    )
}
