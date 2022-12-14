import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import assets from '../../assets/assets'
import CustomStatusbar from '../../components/CustomStatusbar'
import InputContainer from '../../components/InputContainer'
import colors from '../../utils/colors'
import loginStyle from './login.style'

const LoginScreen = (props) => {
    return (
        <View style={loginStyle.container}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <CustomStatusbar />
                {/* Curved Content View */}
                <View style={loginStyle.topCurve}>
                    <Text style={loginStyle.welcomeLabel}>Login</Text>
                </View>
                <View style={loginStyle.footerContent}>
                    <View style={loginStyle.bottomCurvefill} />
                    <View style={loginStyle.bottomCurve}>
                        <View>
                            <InputContainer
                                label='Email'
                                keyboardType='email-address'
                            />
                            <InputContainer
                                label='Password'
                                secureTextEntry={true}
                            />

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen
