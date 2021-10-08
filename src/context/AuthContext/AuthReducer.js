import React from 'react';
import useAuthContext from './index';
import {SESSION_STORE} from '../../constants/AuthConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Realm from 'realm';
import {User} from '../../models/User';
import {ObjectId} from 'bson';

export const ACTIONS = {
  SET_DATA: 'set_data',
  SIGN_IN_REQUEST: 'signIn_request',
  SIGN_IN_SUCCESS: 'signIn_success',
  SIGN_IN_FAILURE: 'signIn_failure',

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
    default:
      return initialState;
  }
}
export default function useAuthReducer() {
  const {state, dispatch} = useAuthContext();

  const signIn = async ({username, password}) => {
    try {
      dispatch({type: ACTIONS.SIGN_IN_REQUEST});

      const sessionData = {
        username: username,
        token: 'TEST_TOKEN',
        role: username === 'Student' ? 'Student' : 'Tutor',
      };
      const app = new Realm.App({
        id: 'tutor-jktla',
        app: {name: 'tutor', version: '0'},
      });
      const credentials = Realm.Credentials.emailPassword(
        'lahiru@gmail.com',
        'lahiru123',
      );
      console.log('credentials', credentials);
      const user = await app.logIn(credentials);
      console.log('User', user.id);
      await openRealm(user, app);
      await AsyncStorage.setItem(SESSION_STORE, JSON.stringify(sessionData));
      dispatch({type: ACTIONS.SIGN_IN_SUCCESS, payload: sessionData});
    } catch (e) {
      console.log('error', e);
      dispatch({type: ACTIONS.SIGN_IN_FAILURE, payload: e.message});
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

  return {state, dispatch, methods: {signIn, signOut}};
}

const openRealm = async (user, app) => {
  console.log('user', user.id);
  let realm;
  try {
    const config = {
      schema: [User.schema],
      sync: {
        user: user,
        partitionValue: user.id,
      },
    };
    realm = await Realm.open(config);
    realm.write(() => {
      realm.create('user', {
        _id: new ObjectId(),
        userName: 'Fido',
        email: 'testing@gmail.com',
        partition: user.id,
      });
    });
    const dogs = realm.objects('User');
    console.log('sss', dogs);
  } catch (error) {
    console.log('errorOpenRealm', error);
  }
};
