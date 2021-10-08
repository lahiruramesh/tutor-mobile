import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Student/Home';
import Profile from '../screens/Profile';
import MyLearnings from '../screens/Student/MyLearnings';
import Notification from '../screens/Notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function StudentTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="StudentHome"
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="MyLearnings"
        options={{
          title: 'MyLearnings',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bookshelf"
              size={size}
              color={color}
            />
          ),
        }}
        component={MyLearnings}
      />
      <Tab.Screen
        name="StudentNotification"
        options={{
          title: 'Notification',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" size={size} color={color} />
          ),
        }}
        component={Notification}
      />
      <Tab.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" size={size} color={color} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
