import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { ClockIcon,  HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

function DetailScreen(props) {
 const navigation = useNavigation()

    const item=props.route.params;
    const[isPressed,setIsPressed]=useState(false)
  return (
    <View>
        <Image source={item.image} style={{width: wp(100), height: hp(55)}}/>
        <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={{width: wp(100), height: hp(55),position:'absolute'}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                
            />
        <StatusBar style={'light'} />
        <SafeAreaView style={{position:'absolute',flexDirection:'row'}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Home')}
            style={{margin:20,marginTop:60,backgroundColor:'rgba(255,255,255,0.5)',borderRadius:50}}
            >
            <ChevronLeftIcon size={wp(10)} strokeWidth={4} color="white" />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>setIsPressed(!isPressed)}
            
            style={{margin:20,marginLeft:250,marginTop:60,backgroundColor:'rgba(255,255,255,0.5)',borderRadius:40}}
            >
            <HeartIcon color={isPressed?'red':'white'}  size={wp(10)} strokeWidth={4}/>
            </TouchableOpacity>



        </SafeAreaView>
        <View style={{marginTop:380,backgroundColor:'white', borderTopLeftRadius: 40, borderTopRightRadius: 40,height:450,position:'absolute',width:400,padding:10}}>
          <View style={{flexDirection:'row',marginTop:15, justifyContent:'space-between',textAlign:'start'}}>
            <Text style={{fontWeight:'bold',fontSize:25,marginLeft:10,width:250}}>{item.title}</Text>
            <Text style={{fontWeight:'bold',fontSize:25,color:'orange',marginRight:20}}>${item.price}</Text>
            </View>
            <Text style={{fontSize:19,marginTop:12}}>{item.longDescription}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,padding:10}}>
                <View style={{flexDirection:'row'}}>
                <ClockIcon color='skyblue'/>
                <View> 
                    <Text>{item.duration}</Text>
                <Text>Duration</Text>
                </View>
                </View>

                <View style={{flexDirection:'row'}}>
                <MapPinIcon color='red'/>
                <View> 
                <Text>{item.distance}</Text>
                <Text>Duration</Text>
                </View>
                </View>

                <View style={{flexDirection:'row'}}>
                <SunIcon color='gold'/>
                <View> 
                <Text>{item.weather}</Text>
                <Text>Duration</Text>
                </View>
                </View>
                
           
               
                
               
            </View>

            <TouchableOpacity style={{backgroundColor:'orange',margin:50,marginLeft:110,borderRadius:30,padding:20,paddingLeft:50,width:160}}>
            <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>Book Now</Text>
        </TouchableOpacity>
        

        </View>
      
       </View>
  )
}

export default DetailScreen