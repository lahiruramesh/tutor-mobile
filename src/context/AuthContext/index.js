import React from 'react';
import {createContext, useContext, useReducer, useEffect} from 'react';
import {ACTIONS, AuthReducer, initialState, init} from "./AuthReducer";
import {isEmpty} from 'lodash';
import {SESSION_STORE} from "../../constants/AuthConstants";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export default function useAuthContext(){
    return useContext(AuthContext);
}

export function AuthContextProvider({children}) {

    const [state, dispatch] = useReducer(AuthReducer, initialState, init);

    const AuthContextValue = {state, dispatch};

    useEffect(async () => {
        if(isEmpty(state.token)) {
            let data = await AsyncStorage.getItem(SESSION_STORE);
            if(!isEmpty(data)) if (data != null) dispatch({type: ACTIONS.SET_DATA, payload: JSON.parse(data)});
        }

    }, []);

    return (<AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>);
}
