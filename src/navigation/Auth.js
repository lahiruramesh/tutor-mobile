import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import PasswordReset from '../screens/Auth/PasswordReset';
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        options={{title: ''}}
        component={SignIn}
        style={{backgroundColor: 'white'}}
      />
      <Stack.Screen
        name="SignUp"
        options={{title: 'Sign Up Wizard'}}
        component={SignUp}
      />
      <Stack.Screen
        name="ResetPassword"
        options={{title: 'Password Reset'}}
        component={PasswordReset}
      />
    </Stack.Navigator>
  );
}
