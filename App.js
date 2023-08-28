import{View,Text,StyleSheet, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const HomeStackScreen = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor:"#F3B562",
                  },
            }}
        >
            
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="List" component={ListScreen}/> 
        </Stack.Navigator>
    )
}

const App=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen  name=" " component={HomeStackScreen}
                options={{
                    headerShown: false}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const style = StyleSheet.create({});

export default App;
