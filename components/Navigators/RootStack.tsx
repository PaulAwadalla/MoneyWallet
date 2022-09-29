import React, { FunctionComponent } from 'react'

import Home from '../../screens/Home';
//React Nav

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Welcome from '../../screens/Welcome';
import { colors } from '../colors';
import Greeting from '../Header/Greeting';
import Profile from '../Header/Profile';
import avi from '/Users/paulawadalla/MoneyWallet/assets/avi/avatar.png'

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
} ;

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.graylight,
                    borderBottomWidth: 0,
                    shadowColor: "transparent",
                    shadowOpacity: 0,
                    elevation: 0,
                    height: 120,
                },
                headerTintColor: colors.secondary,
                headerRightContainerStyle: {
                    paddingRight: 25,
                },
                headerLeftContainerStyle: {
                    paddingLeft:10,
                },
                headerRight: () => (
                    <Profile img={avi} imgContainerStyle={{ backgroundColor: colors.tertiary }}/>
                )
            }}
            initialRouteName='Home'
        >
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name='Home'
            component={Home}
            options={{
                headerTitle: (props) => (
                    <Greeting mainText={'Hello Paul'} subText={'Welcome Back'} {...props} />
                )
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack