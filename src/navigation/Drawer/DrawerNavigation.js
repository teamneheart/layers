import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../../screens/home/homeScreen'
import screenName from '../../utils/screenName'
import CustomDrawer from './CustomDrawer'
import colors from '../../utils/colors'

const Drawer = createDrawerNavigator()

const DrawerNavigation = (props) => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false, drawerType: 'front',
                drawerStyle: { width: '80%', backgroundColor: colors.coolBlack }
            }}
        >
            <Drawer.Screen name={screenName.Home} component={HomeScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
