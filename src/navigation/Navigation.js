import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreeen from '../screens/home/homeScreen'
import DrawerNavigation from './Drawer/DrawerNavigation'
import screenName from '../utils/screenName'
import LoginScreen from '../screens/login/LoginScreen'
const Stack = createNativeStackNavigator()

const Route = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screenName.Login} component={LoginScreen} />
                <Stack.Screen name={screenName.DrawerStack} component={DrawerNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route
