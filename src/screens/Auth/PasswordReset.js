import React from 'react';
import {NativeBaseProvider} from 'native-base';
import PasswordResetForm from './PasswordResetForm';
export default function SignIn() {
  return (
    <NativeBaseProvider>
      <PasswordResetForm />
    </NativeBaseProvider>
  );
}
