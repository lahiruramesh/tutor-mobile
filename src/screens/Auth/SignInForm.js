import React, {useState} from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
} from 'native-base';
import LogoContainer from '../../components/LogoContainer';
import useAuthReducer from '../../context/AuthContext/AuthReducer';
import TouchableItem from 'native-base/src/components/primitives/TouchableItem/index';
import {useNavigation} from '@react-navigation/native';

export default function SignInForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {
    state,
    methods: {signIn},
  } = useAuthReducer();

  const onPressSignInHandler = async () => {
    console.log('userName', userName);
    console.log('password', password);
    await signIn(userName, password);
  };

  const onPressSignUpHandler = () => {
    navigation.navigate('SignUp');
  };

  const onPressResetPasswordHandler = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <Box
      safeArea
      style={{backgroundColor: 'white'}}
      flex={1}
      px="10"
      py="20"
      w="100%"
      mx="auto">
      <Center>
        <LogoContainer key="logoContainer" />
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
      </Center>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>User Name</FormControl.Label>
          <Input
            type="text"
            key="userName"
            onChangeText={setUserName}
            fontSize="md"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            type="password"
            onChangeText={setPassword}
            value={password}
            key="password"
            fontSize="md"
          />
          <TouchableItem>
            <Link
              _text={{fontSize: 'sm', fontWeight: '500', color: 'indigo.500'}}
              alignSelf="flex-end"
              mt="1"
              onPress={onPressResetPasswordHandler}>
              Forget Password?
            </Link>
          </TouchableItem>
        </FormControl>
        <Button
          key="btSignIn"
          onPress={onPressSignInHandler}
          mt="2"
          colorScheme="indigo"
          _text={{color: 'white'}}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="md" color="muted.700" fontWeight={400}>
            I'm a new user.{' '}
          </Text>
          <TouchableItem>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={onPressSignUpHandler}>
              Sign Up
            </Link>
          </TouchableItem>
        </HStack>
      </VStack>
    </Box>
  );
}
