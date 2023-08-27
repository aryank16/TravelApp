import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import WindowScreen from "../screens/WindowScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

function AppNavigation(){
    return(
        <NavigationContainer>
       <Stack.Navigator initialRouteName='Window' screenOptions={{headerShown: false}}>
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Window" component={WindowScreen} />
       <Stack.Screen name="Detail" component={DetailScreen} />
      
    </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;