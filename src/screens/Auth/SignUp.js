import React from 'react';
import {NativeBaseProvider, View} from 'native-base';
import SignUpForm from './SignUpForm';
export default function SignIn() {
  return (
    <NativeBaseProvider>
      <SignUpForm />
    </NativeBaseProvider>
  );
}
