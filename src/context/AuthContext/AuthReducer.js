import React from 'react';
import useAuthContext from './index';
import {SESSION_STORE} from '../../constants/AuthConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Realm from 'realm';
import {User} from '../../models/User';
import {v4 as uuid} from 'uuid';
import getRealmApp from '../../config/realm';
import saveUser, {getUser} from '../../repositories/UserRepository';

export const ACTIONS = {
  SET_DATA: 'set_data',
  SIGN_IN_REQUEST: 'signIn_request',
  SIGN_IN_SUCCESS: 'signIn_success',
  SIGN_IN_FAILURE: 'signIn_failure',

  SIGN_UP_REQUEST: 'signUp_request',
  SIGN_UP_SUCCESS: 'signUp_success',
  SIGN_UP_FAILURE: 'signUp_failure',

  SIGN_OUT_REQUEST: 'signOut_request',
  SIGN_OUT_SUCCESS: 'signOut_success',
  SIGN_OUT_FAILURE: 'signOut_failure',
};

export const initialState = {
  user: {
    name: null,
  },
  token: null,
  loading: false,
};

export const init = ({user, token}) => ({user, token});

export function AuthReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {...state, ...action.payload};
    case ACTIONS.SIGN_IN_REQUEST:
      return {...state, loading: true};
    case ACTIONS.SIGN_IN_SUCCESS:
      return {...state, ...action.payload, loading: true};
    case ACTIONS.SIGN_IN_FAILURE:
      return {...state, ...action.payload, loading: false};
    case ACTIONS.SIGN_OUT_REQUEST:
      return {...state, loading: true};
    case ACTIONS.SIGN_IN_SUCCESS:
      return {...state, ...action.payload, loading: true};
    case ACTIONS.SIGN_IN_FAILURE:
      return {...state, ...action.payload, loading: false};
    case ACTIONS.SIGN_UP_REQUEST:
      return {...state, loading: true};
    case ACTIONS.SIGN_UP_SUCCESS:
      return {...state, ...action.payload, loading: true};
    case ACTIONS.SIGN_UP_FAILURE:
      return {...state, ...action.payload, loading: false};
    default:
      return initialState;
  }
}
export default function useAuthReducer() {
  const {state, dispatch} = useAuthContext();

  const signIn = async (username, password) => {
    try {
      dispatch({type: ACTIONS.SIGN_IN_REQUEST});

      const sessionData = {
        username: username.toLowerCase(),
        password: password,
        token: 'TEST_TOKEN',
        role: username === 'lahiru@test.com' ? 'Student' : 'Tutor',
      };

      const user = await getUser(username);
      if (user) {
        dispatch({type: ACTIONS.SIGN_IN_SUCCESS, payload: sessionData});
      }
      dispatch({type: ACTIONS.SIGN_IN_SUCCESS, payload: sessionData});
    } catch (e) {
      console.log('error', e);
      dispatch({type: ACTIONS.SIGN_IN_FAILURE, payload: e.message});
    }
  };

  const signUp = async form => {
    try {
      console.log('form', form);
      dispatch({type: ACTIONS.SIGN_UP_REQUEST});
      const user = await saveUser(form);
      if (user) {
        return dispatch({
          type: ACTIONS.SIGN_UP_SUCCESS,
          payload: {message: 'Success', success: true},
        });
      }
      dispatch({
        type: ACTIONS.SIGN_UP_FAILURE,
        payload: {
          message: 'Failed',
          success: false,
        },
      });
    } catch (e) {
      dispatch({type: ACTIONS.SIGN_UP_FAILURE, payload: e.message});
    }
  };

  const signOut = async () => {
    try {
      dispatch({type: ACTIONS.SIGN_OUT_REQUEST});

      await AsyncStorage.removeAll();
      dispatch({type: ACTIONS.SIGN_OUT_SUCCESS, payload: {}});
    } catch (e) {
      dispatch({type: ACTIONS.SIGN_OUT_FAILURE, payload: e.message});
    }
  };

  return {state, dispatch, methods: {signIn, signOut, signUp}};
}
