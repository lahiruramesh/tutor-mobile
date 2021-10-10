import React from 'react';
import {NativeBaseProvider} from 'native-base';
import SignInForm from './SignInForm';
export default function SignIn() {
  return (
    <NativeBaseProvider>
      <SignInForm />
    </NativeBaseProvider>
  );
}
