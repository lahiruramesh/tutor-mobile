import React from 'react';
import StudentTabs from './Student';
import TutorTabs from './Tutor';
import useAuthReducer from '../context/AuthContext/AuthReducer';
import {ROLE_STUDENT, ROLE_TUTOR} from '../constants/AuthConstants';
import AuthStack from './Auth';

export default function RootNavigation() {
  const {state: AuthState} = useAuthReducer();
  if (AuthState.token === null) {
    return <AuthStack />;
  } else if (AuthState.role == ROLE_STUDENT) {
    return <StudentTabs />;
  } else if (AuthState.role == ROLE_TUTOR) {
    return <TutorTabs />;
  }
}
