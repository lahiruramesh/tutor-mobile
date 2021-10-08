import React from 'react';
import StudentTabs from './Student';
import TutorTabs from './Tutor';
import useAuthReducer from '../context/AuthContext/AuthReducer';
import SignIn from '../screens/Auth/SignIn';
import {ROLE_STUDENT} from '../constants/AuthConstants';

export default function RootNavigation() {
  const {state: AuthState} = useAuthReducer();

  console.log('authState', AuthState);
  if (AuthState.token === null) {
    return <SignIn />;
  } else if (AuthState.role == ROLE_STUDENT) {
    return <StudentTabs />;
  }
  return <TutorTabs />;
}
