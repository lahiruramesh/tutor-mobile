import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigation/index';
import Store from './context';
import 'react-native-get-random-values';

const App: () => Node = () => {
  return (
    <Store>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Store>
  );
};

export default App;
