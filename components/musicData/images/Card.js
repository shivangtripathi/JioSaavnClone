import React from 'react'
import { View, Text ,Image} from 'react-native'

const Card = ({url,title}) => {
    return (
        <View style={{height:200,flex:1,borderRadius:10,marginVertical:20,marginHorizontal:5,flexDirection:'column',justifyContent:'space-between'}}>
        <View style={{height:180,width:100}}>
            <Image source={url} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
            <Text style={{flex:1,fontSize:12,color:'white',alignSelf:'center',lineHeight:20}}>{title}</Text>
        </View>
        </View>
    )
}

export default Card
