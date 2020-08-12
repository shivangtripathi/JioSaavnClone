const Data = [
    {
        uri : require('../musicData/explore/images/1.jpg'),
    },
    {
        uri : require('../musicData/explore/images/2.jpg'),
    },
    {
        uri : require('../musicData/explore/images/3.jpg'),
    },
    {
        uri : require('../musicData/explore/images/4.jpeg'),
    },
    {
        uri : require('../musicData/explore/images/5.jpg'),
    },
    {
        uri : require('../musicData/explore/images/6.jpeg'),
    },
    {
        uri : require('../musicData/explore/images/7.jpg'),
    },
    {
        uri : require('../musicData/explore/images/8.jpg'),
    },
    {
        uri : require('../musicData/explore/images/9.jpg'),
    },
    {
        uri : require('../musicData/explore/images/10.jpg'),
    },
]
import React from 'react'
import { View, Text,Image } from 'react-native'

const CardsDisplay = () => {
    return (
        <View style={{height:'100%',width:'100%',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',flex:1}}>
                 <View style={{height:200,width:150,margin:8,opacity:0.5}} >
                     <Image key={1} source={Data[0].uri} style={{width:150,height:180,borderRadius:5,resizeMode:'cover'}}/>
                </View>     
                <View style={{height:150,width:150,margin:8,opacity:0.5,borderRadius:75}} >
                     <Image key={1} source={Data[1].uri} style={{width:150,height:150,borderRadius:75,resizeMode:'cover'}}/>
                </View> 
                <View style={{height:200,width:150,margin:8,opacity:0.5}} >
                     <Image key={1} source={Data[2].uri} style={{width:150,height:180,borderRadius:5,resizeMode:'cover',translateY:-10}}/>
                </View> 
                <View style={{height:200,width:150,margin:8,opacity:0.5}} >
                     <Image key={1} source={Data[3].uri} style={{width:150,height:180,borderRadius:5,resizeMode:'cover',translateY:-50}}/>
                </View> 
                <View style={{height:250,width:130,margin:8,opacity:0.5}} >
                     <Image key={1} source={Data[4].uri} style={{width:130,height:250,borderRadius:5,resizeMode:'cover'}}/>
                </View> 
                <View style={{height:200,width:180,margin:8,opacity:0.5}} >
                     <Image key={1} source={Data[5].uri} style={{width:180,height:180,resizeMode:'cover',translateY:-30}}/>
                </View>
                <View style={{height:150,width:150,margin:8,opacity:0.5}} >
                     <Image key={1} source={Data[6].uri} style={{width:150,height:150,resizeMode:'cover'}}/>
                </View> 
                <View style={{height:250,width:150,margin:8,opacity:0.5}} >
                     <Image key={1} source={Data[7].uri} style={{width:150,height:250,borderRadius:10,resizeMode:'cover',translateY:-80}}/>
                </View> 
                <View style={{height:200,width:150,margin:8,opacity:0.5}} >
                     <Image key={1} source={Data[8].uri} style={{width:200,height:180,borderRadius:5,resizeMode:'cover',translateY:-80}}/>
                </View> 
                <View style={{height:200,width:130,margin:8,opacity:0.5}} >
                     <Image key={1} source={Data[9].uri} style={{width:200,height:250,borderRadius:5,resizeMode:'cover',translateY:-80}}/>
                </View> 
                
               </View>
    )
}

export default CardsDisplay
        

