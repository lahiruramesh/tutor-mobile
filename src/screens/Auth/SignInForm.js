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
    Center
} from 'native-base';
import LogoContainer from "../../components/LogoContainer";
import useAuthReducer from "../../context/AuthContext/AuthReducer";
export default function SignInForm() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {state, methods: {signIn}} = useAuthReducer();

    const onPressSignInHandler = async () => {
        await signIn(userName, password);
    }

    return (
        <Box safeArea flex={1} p="2" py="20" w="90%" mx="auto">
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
                    <FormControl.Label
                        _text={{
                            color: 'coolGray.800',
                            fontSize: 'md',
                            fontWeight: 500,
                        }}>
                        User Name
                    </FormControl.Label>
                    <Input type="text" key="userName" onChangeText={setUserName} fontSize="md" />
                </FormControl>
                <FormControl>
                    <FormControl.Label
                        _text={{
                            color: 'coolGray.800',
                            fontSize: 'md',
                            fontWeight: 500,
                        }}>
                        Password
                    </FormControl.Label>
                    <Input type="password" onChangeText={setPassword} value={password} key="password" fontSize="md" />
                    <Link
                        _text={{ fontSize: 'sm', fontWeight: '500', color: 'indigo.500' }}
                        alignSelf="flex-end"
                        mt="1">
                        Forget Password?
                    </Link>
                </FormControl>
                <Button key="btSignIn" onPress={onPressSignInHandler} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                    Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="md" color="muted.700" fontWeight={400}>
                        I'm a new user.{' '}
                    </Text>
                    <Link
                        _text={{
                            color: 'indigo.500',
                            fontWeight: 'medium',
                            fontSize: 'sm',
                        }}
                        href="#">
                        Sign Up
                    </Link>
                </HStack>
            </VStack>
        </Box>
    )
}
