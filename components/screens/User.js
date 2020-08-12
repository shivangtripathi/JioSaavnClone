const DATA = [
    {
      title: 'Songs',
      icon:'music',
    },
    {
      title: 'Albums',
      icon:'album',
    },
    {
      title: 'Artists',
      icon:'headset',
    },
    {
        title: 'Podcasts',
        icon:'surround-sound',
      },
      {
        title: 'Downloads',
        icon:'download',
      },
      {
        title: 'Playlist',
        icon:'equalizer',
      },
  ];

import React from 'react'
import { View, Text,FlatList } from 'react-native'
import {AntDesign,MaterialCommunityIcons} from '@expo/vector-icons'

const Item = ({ title ,icon}) => (
    <View style={{flexDirection:'row',marginTop:20}}>
        <MaterialCommunityIcons name={icon} size={20} color="white" style={{marginLeft:20}}/>
      <Text  style={{opacity:0.8,letterSpacing:0.3,color:'white',marginLeft:20,fontSize:20}}>{title}</Text>
      <AntDesign name='right' size={20} color='white' style={{marginLeft:'auto',marginRight:10}}/>
    </View>
  );




export default function User() {
    const renderItem = ({ item }) => (
        <Item title={item.title} icon={item.icon}/>
    )
    return (
        <View style={{flex:1,backgroundColor:'#2a2d36'}}>
            <View style={{height:'8%',width:'100%',marginTop:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{marginLeft:20,color:'white',fontWeight:'bold',fontSize:26}}>My Library</Text>
                <AntDesign name='setting' size={26} color='white' style={{marginRight:20}}/>
            </View>
            <View style={{height:'8%',width:'100%',borderBottomWidth:1,borderBottomColor:'#dedede',marginTop:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <AntDesign name='user' size={20} color='white' style={{marginRight:20}} style={{marginLeft:20}}/>
                <Text style={{opacity:0.8,letterSpacing:0.3,color:'white',fontWeight:'bold',fontSize:20}}>shivangtripathi2000</Text>
                <Text style={{marginRight:20,opacity:0.8,color:'#56c3b1',fontSize:14}}>Edit</Text>
                </View>
                <View style={{backgroundColor:'#434141'}}>
                <FlatList
                        data={DATA}
                        renderItem={renderItem}
                    />
                    </View>
        </View>
    )
}
