import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { categoriesData } from "../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Categories(){
    return(
        <View style={{ marginHorizontal:5}}>
        <View style={{flexDirection:'row', marginHorizontal:10,marginVertical:10}}>
            <Text style={{fontWeight:'bold'}}>
                Categories
            </Text>
            <TouchableOpacity style={{marginLeft:250,color:'orange'}}>
            <Text style={{color:'orange'}}>
                
                See All</Text>   
                </TouchableOpacity> 
            
            
            </View>
            
            
            <ScrollView horizontal
             
             
             showsHorizontalScrollIndicator={false}
             >
            {
            categoriesData.map((cat,index)=>{
            return (
            <TouchableOpacity key={index} style={{margin:10}}>
                    <Image source={cat.image} style={{width:70,height:70,borderRadius:35    }}/>
                  <Text style={{textAlign:'center'}} >{cat.title}</Text>

                </TouchableOpacity >
                       

                    
            
            )
            }

            )}


            </ScrollView>
        </View>
    )
}

export default Categories;