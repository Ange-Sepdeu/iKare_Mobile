import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import tw from "twrnc"
import PatientDrawerContent from '../../components/patient/drawer/PatientDrawerContent'
import Home from "../../components/patient/drawerScreens/Home"
import Profile from "../../components/patient/drawerScreens/Profile"
import { StatusBar } from 'expo-status-bar'
import {MaterialIcons} from "@expo/vector-icons"
import AppointmentNavigation from '../../components/patient/drawerScreens/navigation/AppointmentNavigation'
import ChatNavigation from '../../components/patient/drawerScreens/navigation/ChatNavigation'
import PharmacyNavigation from '../../components/patient/drawerScreens/navigation/PharmacyNavigation'
import Emergency from '../../components/patient/drawerScreens/Emergency'

function Patient() {
    const Drawer = createDrawerNavigator()
  return (
    <>
    <NavigationContainer>
        <StatusBar style="light" />
        <Drawer.Navigator
          screenOptions={{
            headerTitle: "iKare",
            headerTintColor: "#FFFFFF",
            headerTitleStyle: tw `text-white`,
            headerStyle: tw`bg-[#0C3778]`,
            headerRight: () => {
                return (
                    <>
                        <MaterialIcons 
                         style={tw`text-white right-8`}
                        name="notifications" size={30} />
                    </>
                )
            }
          }}
          
          initialRouteName='Home'
          drawerContent={(props) => <PatientDrawerContent {...props} />}
        >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Pharmacies' component={PharmacyNavigation} />
            <Drawer.Screen name='Appointments' component={AppointmentNavigation} />
            <Drawer.Screen name='Emergency' component={Emergency} />
            <Drawer.Screen name='Chat' component={ChatNavigation} />
            <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator>
    </NavigationContainer>
    </>
  )
}

export default Patient