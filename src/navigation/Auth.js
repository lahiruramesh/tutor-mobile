import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "../screens/Auth/SignIn";

const Stack = createNativeStackNavigator();

const signIn = function () {
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}

export default {
    signIn,
}



