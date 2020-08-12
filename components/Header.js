import React from 'react'
import { View, Text,TouchableWithoutFeedback,Animated,StyleSheet} from 'react-native'

export default function Header({navigation}) {

    return (
        <View  style={{minHeight:40,backgroundColor:'#2a2d36',padding:12,color:'white',flexDirection:'row'}}>
            <TouchableWithoutFeedback ><Text style={{borderBottomWidth:2,borderBottomColor:'#56c3b1',color:'white',margin:5,fontSize:20,fontWeight:'bold'}} >Music</Text></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Search')} ><Text style={{color:'white',margin:5,fontSize:20,fontWeight:'bold',opacity:0.8}}>Podcasts</Text></TouchableWithoutFeedback>
            <TouchableWithoutFeedback  ><Text style={{color:'white',margin:5,fontSize:20,fontWeight:'bold',opacity:0.8}}>JioTunes</Text></TouchableWithoutFeedback>
            <TouchableWithoutFeedback style={{marginLeft:'auto'}}><Text style={[styles.btn,{color:'white',fontWeight:'bold',margin:5,fontSize:13,alignSelf:'center',alignItems:'center',marginLeft:'auto',justifyContent:'center',paddingHorizontal:12,paddingVertical:3}]}>Go Pro</Text></TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#56c3b1',
        borderRadius:20,
        width:70,
        height:30,
    }
})