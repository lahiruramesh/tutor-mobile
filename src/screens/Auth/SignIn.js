import React from "react";
import { Input, Center, NativeBaseProvider } from "native-base"
import SignInForm from "./SignInForm";
export default function SignIn() {
    return (
        <NativeBaseProvider>
            <SignInForm />
        </NativeBaseProvider>
    );
}
