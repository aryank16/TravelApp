import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { destinationData } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';

import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const Destination = () => {

   const navigation = useNavigation();

    

  return (
    <View style={styles.picture}>
  
   
    
    {
        destinationData.map((data,index)=>{
            const[isPressed,setIsPressed]= useState(false)
            return(
                
                <TouchableOpacity key={index} style={{height:270,width:190,marginLeft:6,position:'relative'}} onPress={()=>navigation.navigate('Detail',{...data})}>
                    
                    <Image source={data.image} style={{height:260,width:180,position:'absolute',borderRadius:20}}/>
                    <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={{width: wp(46), height: hp(35.3), borderBottomLeftRadius: 20, borderBottomRightRadius: 20,position:'absolute'}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                
            />

            <TouchableOpacity onPress={()=>setIsPressed(!isPressed)}>
                <HeartIcon color={isPressed?'red':'white'} size={30}  style={{marginLeft:145,marginTop:10,backgroundColor:'rgba(255,255,255,0.4)'}}/>
               
            </TouchableOpacity>

            
         




            



                    <Text style={{color:'white',textAlign:'center',marginTop:100,fontWeight:'bold',fontSize:20}}>{data.title}</Text>
                    <Text style={{color:'white',textAlign:'center'}}>{data.shortDescription}</Text>
                   

                </TouchableOpacity>
            
                
            )
        })
    }
   
   </View>
 
  )
}

export default Destination;

const styles = StyleSheet.create({
    picture:{
        flexDirection:'row',
        justifyContent:'space-between',
        
        
        
       
        flexWrap:'wrap'

    }

})