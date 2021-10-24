import React from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from 'native-base';
import LogoContainer from '../../components/LogoContainer';
import TouchableItem from 'native-base/src/components/primitives/TouchableItem/index';

export default function PasswordResetForm() {
  return (
    <Box
      safeArea
      style={{backgroundColor: 'white'}}
      flex={1}
      px="10"
      py="20"
      w="100%"
      mx="auto">
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Old Password</FormControl.Label>
          <Input
            type="password"
            key="userName"
            //   onChangeText={setUserName}
            fontSize="md"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>New Password</FormControl.Label>
          <Input
            type="password"
            //     onChangeText={setPassword}
            //      value={password}
            key="password"
            fontSize="md"
          />
        </FormControl>
        <Button
          key="btSignIn"
          //      onPress={onPressSignInHandler}
          mt="2"
          colorScheme="indigo"
          _text={{color: 'white'}}>
          Reset
        </Button>
      </VStack>
    </Box>
  );
}
