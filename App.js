import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductsView from './Views/products.js';
import ProductsAdd from './Views/products_add.js';

function Home(){
    return(
        <View   style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
            <Text>Inicio!</Text>
        </View>
    )
}

function Confing(){
    return(
        <View   style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
            <Text>App Configurations!</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Products' component={ProductsView}/>
            <Tab.Screen name='Configurations' component={Confing}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}
