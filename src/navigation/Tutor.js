import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Tutor/Home';
import Profile from '../screens/Profile';
import Students from '../screens/Tutor/Students/index';
import Notification from '../screens/Notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function TutorTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TutorHome"
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="TutorStudents"
        options={{
          title: 'Students',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-group"
              size={size}
              color={color}
            />
          ),
        }}
        component={Students}
      />
      <Tab.Screen
        name="TutorNotification"
        options={{
          title: 'Notification',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" size={size} color={color} />
          ),
        }}
        component={Notification}
      />
      <Tab.Screen
        name="TutorProfile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default TutorTabs;
