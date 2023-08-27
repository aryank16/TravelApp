import {StyleSheet, Image, Text, View, TouchableOpacity, Button } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native";




function WindowScreen(){
    const navigation = useNavigation();
    return(
       
            <View style={styles.container}>
                <View style={styles.image}>
            <Image source={require('../../assets/images/lake.png')} style={{height:wp(208),width:wp(100)}} />
            </View>
            <View style={{justifyContent:'flex-end',marginTop:500}}>
            {/* <LinearGradient
            colors={['transparent', 'rgba(3,105,161,0.8)']}
            style={{width: wp(100), height: hp(150)}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            // className="absolute bottom-0"
        /> */}
            <View >
            <Text style={styles.title}>Travelling  made easy!</Text>
            <Text style={{ color:'white',textAlign:'center',
            fontSize:wp(4)}}> Experience the world's best adventure around the world with us</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
              <Text style={styles.buttonText}>Lets Go</Text>
            </TouchableOpacity>
            </View>
             </View>
      
     )
}
export default WindowScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "center",
      
     
      
  
    },
    image:{
       
        position:'absolute',
       height:'auto',
        width:'auto',
       
       
        },
        button: {
            backgroundColor: 'orange', 
            padding: 10,
            borderRadius: 35,
            width:100,
            marginLeft:70,
            marginTop:40,
            height:70,
            width:250
           
        },
        buttonText: {
            color: 'white',
            fontSize: 30,
            textAlign:'center'
        },
        title:{
            color:'white',
            textAlign:'center',
           
            fontSize: wp(10)
        }
  });