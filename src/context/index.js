import React from 'react';
import {AuthContextProvider} from "./AuthContext";
import {AppContainerProvider} from "./AppContainer";

export default function Store({children}) {
    return (
        <AuthContextProvider>
            <AppContainerProvider>{children}</AppContainerProvider>
        </AuthContextProvider>
    )
}
