const BrowseData = [
    {
        img:require('../musicData/browse/iamges/1.png'),
    },
    {
        img:require('../musicData/browse/iamges/2.png'),
    },
    {
        img:require('../musicData/browse/iamges/3.png'),
    }
]

const BrowseData2= [
    {
        img:require('../musicData/browse/iamges/3.png'),
    },
    {
        img:require('../musicData/browse/iamges/2.png'),
    },
    {
        img:require('../musicData/browse/iamges/1.png'),
    }
]

const BrowseData3= [
    {
        img:require('../musicData/images/AF1.jpg'),
    },
    {
        img:require('../musicData/images/AF2.jpg'),
    },
    {
        img:require('../musicData/images/AF3.jpeg'),
    },
    {
        img:require('../musicData/images/AF4.jpeg'),
    },
    {
        img:require('../musicData/images/cover1.jpg'),
    }, 
    {
        img:require('../musicData/images/cover2.jpg'),
    },

]

import React from 'react'
import { View, Text ,Image,TextInput,ScrollView} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
export default function Browse() {
    return (
        <ScrollView style={{flex:1,backgroundColor:'#2a2d36'}}>
           <View style={{flex:1,width:'100%',marginLeft:10}}>
            <Text style={{fontSize:22,fontWeight:'bold',color:'white',marginHorizontal:10,marginVertical:20,letterSpacing:0.5}}>Browse</Text>
            <View style={{height:120,flex:1,borderRadius:10,marginVertical:20}}>
                 <View style={{height:120,width:'100%',flexDirection:'row'}}>
            <Image source={BrowseData[0].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5,marginLeft:5}} resizeMode="cover"/>
            <Image source={BrowseData[1].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5,marginLeft:5}} resizeMode="cover"/>
            <Image source={BrowseData[2].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5,marginLeft:5}} resizeMode="cover"/>
        </View>
        </View>
           </View>
           <View style={{flex:1,width:'100%',marginLeft:10}}>
            <Text style={{fontSize:22,fontWeight:'bold',color:'white',marginHorizontal:10,marginVertical:20,letterSpacing:0.5}}>Made Just For You</Text>
            <View style={{height:120,flex:1,borderRadius:10,marginVertical:20}}>
                 <View style={{height:120,width:'100%',flexDirection:'row'}}>
            <Image source={BrowseData2[0].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5,marginLeft:5}} resizeMode="cover"/>
            <Image source={BrowseData2[1].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5,marginLeft:5}} resizeMode="cover"/>
            <Image source={BrowseData2[2].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5,marginLeft:5}} resizeMode="cover"/>
        </View>
        </View>
           </View>
           <View style={{flex:1,width:'100%',marginLeft:10,marginTop:10}}>
           <View style={{padding:8,fontSize:16,backgroundColor:'#2a2d36',width:'94%',flexDirection:'row',borderRadius:12,alignItems:'center',borderBottomColor:'#dedede',borderBottomWidth:1,opacity:0.7}}>
                <AntDesign name="search1" size={20} color='#dedede' style={{marginLeft:10}}/><TextInput style={{fontSize:16,marginLeft:10}}  autoFocus={false} placeholder="Find Your Mood" placeholderTextColor='#dedede' />
                </View>
           </View>
           <View style={{opacity:0.7,flex:1,borderRadius:10,marginVertical:20,marginHorizontal:10,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <View style={{height:150,width:'45%',margin:5}}>
            <Image source={BrowseData3[0].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
            </View>
            <View style={{height:150,width:'45%',margin:5}}>
            <Image source={BrowseData3[1].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
            </View>
            <View style={{height:150,width:'45%',margin:5}}>
            <Image source={BrowseData3[2].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
            </View>
            <View style={{height:150,width:'45%',margin:5}}>
            <Image source={BrowseData3[3].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
            </View>
            <View style={{height:150,width:'45%',margin:5}}>
            <Image source={BrowseData3[4].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
            </View>
            <View style={{height:150,width:'45%',margin:5}}>
            <Image source={BrowseData3[5].img} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
            </View>

             
        </View>
        </ScrollView>
    )
}
