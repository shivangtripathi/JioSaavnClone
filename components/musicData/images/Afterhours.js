import React from 'react'
import { View, Text,Image} from 'react-native'

const Afterhours = ({url,title}) => {
    return (
        <View style={{height:250,flex:1,marginLeft:2,borderRadius:10,marginVertical:20,marginHorizontal:10,flexDirection:'column',justifyContent:'space-between'}}>
        <View style={{height:240,width:150}}>
            <Image source={url} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
            <Text style={{flex:1,fontSize:16,color:'white',alignSelf:'center',marginTop:10}}>{title}</Text>
        </View>
        </View>
    )
}

export default Afterhours
