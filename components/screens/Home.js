import React from 'react'
import { View, Text,Image,Dimensions,TouchableWithoutFeedback } from 'react-native'
import Header from '../Header'
import { ScrollView } from 'react-native-gesture-handler';
const {width} = Dimensions.get('window').width;
const bannerIMG = require('../images/banner.png')
import Data from '../musicData/images/Data';
import Card from '../musicData/images/Card';
import Afterhours from '../musicData/images/Afterhours';
import Data2 from '../musicData/images/Data2';
import Shorties from '../musicData/images/Shorties';
export default function Home({navigation}) {
    return (
        <>
        <Header navigation={navigation}/>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:'#2a2d36'}}>
            <View style={{height:200,width:width,marginVertical:5}}>
                <Image source={bannerIMG} style={{flex:1, height: undefined, width: undefined}} resizeMode="cover"/>
            </View>
            <View style={{flex:1,height:200,width:width,marginLeft:15}}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Sweet Dreams</Text>
                <Text style={{fontWeight:'bold',opacity:0.3,letterSpacing:0.5,color:'white',fontSize:12}}>RECENTLY PLAYED</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal scrollEventThrottle={16} style={{flexDirection:'row'}}>
                    {Data.map((items,index)=>(
                        <Card url={items.img} title={items.title}  key={index}/>	
                    ))}
                </ScrollView>
            </View>
            <View style={{flex:1,height:220,width:width,marginLeft:15}}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>After Hours</Text>
                <ScrollView  showsHorizontalScrollIndicator={false} horizontal scrollEventThrottle={16} style={{flexDirection:'row'}}>
                    {Data2.map((items,index)=>(
                        <Afterhours url={items.img} title={items.title}  key={index} />	
                    ))}
                </ScrollView>
            </View>
            <Shorties />
            <View style={{flex:1,height:200,width:width,marginLeft:15,marginTop:10}}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Hi there</Text>
                <Text style={{fontWeight:'bold',opacity:0.3,letterSpacing:0.5,color:'white',fontSize:12}}>RECENTLY PLAYED</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal scrollEventThrottle={16} style={{flexDirection:'row'}}>
                    {Data2.map((items,index)=>(
                        <Card url={items.img} title={items.title}  key={index}/>	
                    ))}
                </ScrollView>
            </View>
            
        </ScrollView>
        
        </>
    )
}
