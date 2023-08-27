import {StyleSheet, SafeAreaView, ScrollView, Text, View, Image, TextInput } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import SortCategories from "../components/SortCategories";
import Destination from "../components/destination";

function HomeScreen(){
    return(
        <SafeAreaView>
            <ScrollView >
                <View style={{marginTop:50,marginLeft:10,flexDirection:'row'}}>
            <Text style={styles.discover}>
                Let's Discover
            </Text>
            <Image source={require('../../assets/images/avatar.png')} style={{height:wp(12),width:wp(12),marginLeft:160}} />
            </View>
            
            <View style={{margin:40}}>
            <View style={{marginLeft:65,width:180,margin:30,backgroundColor:'#F5F5DC',flexDirection:'row',flex:1,justifyContent:'center',alignItem:'center',borderRadius:20,borderWidth:1}}>
            <MagnifyingGlassIcon size={20} strokeWidth={2} color="gray" style={{marginTop:8,marginLeft:9,}}/>
                <TextInput
                placeholder="Search  destination"
                
                style={{padding:9,paddingHorizontal:50,paddingVertical:5,width:150,}}
                />
                </View>
                
            </View>
            <View style={{marginBottom:20}}>
                <Categories/>
                
            </View>

            <View  style={{marginBottom:20}}>
                
               <SortCategories/>
            </View>

            <View>
                
                <Destination/>
             </View>
            

            </ScrollView>
           

        </SafeAreaView>
           

        
    )
}
export default HomeScreen;

const styles = StyleSheet.create({

    discover:{
        fontSize:25,
        fontWeight:'bold'

    }
})