import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { sortData } from '../constants';
import { useState } from 'react';

function SortCategories() {

    const[activeSort,setActiveSort]=useState(false)

   

   

    

  return (



    <View style={{flexDirection:'row',borderWidth:1,borderRadius:34,height:70,margin:10,backgroundColor:'#F5F5DC'}}>
        {sortData.map((data,index)=>{
             

            
         
            return(
              
                
                <TouchableOpacity  onPress={(index)=>setActiveSort(true)}>
                    <View  key={index} style={{margin:8,borderWidth:0,marginTop:10,padding:12,marginRight:9,backgroundColor: activeSort[index] ? 'white' : '#F5F5DC',}} >
                    <Text  >
                    {data}

                    </Text>
                    </View>
                    
                    

                   
                </TouchableOpacity>
              
            )
        })}
        
        </View>
  )
}

export default SortCategories;