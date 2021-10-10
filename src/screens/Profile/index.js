import React from 'react';
import {View, Text, Button} from 'react-native';
import useAuthReducer from '../../context/AuthContext/AuthReducer';
import ProfileView from '../../components/ProfileView';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {ScrollView} from 'native-base';

export default function Profile() {
  const {
    state: AuthState,
    methods: {signOut},
  } = useAuthReducer();

  const onPressSignOutHandler = async function () {
    await signOut();
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <ProfileView />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'flex-end',
          }}>
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Button
              style={{alignItems: 'center'}}
              title="Sign out"
              onPress={onPressSignOutHandler}
            />
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
