import{View,Text,StyleSheet, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/HomeScreen';
import ItemScreen from './src/screens/ItemScreen';

const Stack = createNativeStackNavigator();

// const HomeStackScreen = () => {
//     return(
//         <Stack.Navigator
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor:"#F3B562",
//                   },
//             }}
//         >
            
//             <Stack.Screen name="Home" component={HomeScreen}/>
//             <Stack.Screen name="List" component={ListScreen}/> 
//         </Stack.Navigator>
//     )
// }

const App=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                    backgroundColor:"#F3B562",
                   },
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="List" component={ListScreen}/> 
                <Stack.Screen name="Item" component={ItemScreen}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const style = StyleSheet.create({});

export default App;
