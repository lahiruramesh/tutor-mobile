import React, {useState, useEffect} from 'react';
import {Box, VStack, Button, HStack, Spacer} from 'native-base';
import useAuthReducer from '../../context/AuthContext/AuthReducer';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../models/User';
import SignUPWizard from '../../components/SignUpWizard';

export default function SignUpForm() {
  const [step, SetStep] = useState(1);
  const [role, SetRole] = useState(User.ROLE_STUDENT);
  const [basicForm, SetBasicForm] = useState({});
  const navigation = useNavigation();
  const {
    state,
    methods: {signIn},
  } = useAuthReducer();

  const onNextWizardHandler = () => {
    if (step > 3) {
      alert('Finish');
      return;
    }
    SetStep(step + 1);
  };

  const onBackWizardHandler = () => {
    if (step < 1) {
      SetStep(1);
    }
    SetStep(step - 1);
  };

  const selectedRole = role => {
    SetRole(role);
  };

  const submitBasicFormDetails = form => {
    console.log('testing', form);
    SetBasicForm(form);
  };

  const submitEducationalBackground = form => {
    console.log('form', form);
  };

  useEffect(() => {}, []);

  return (
    <Box
      safeArea
      style={{backgroundColor: 'white'}}
      flex={1}
      px={2}
      w="100%"
      mx="auto">
      <SignUPWizard
        step={step}
        selectedRole={selectedRole}
        submitBasicFormDetails={submitBasicFormDetails}
        submitEducationalBackground={submitEducationalBackground}
      />
      <VStack space={3} mt="5">
        <HStack space={2}>
          {step > 1 ? (
            <Button
              key="btnBackStep"
              onPress={onBackWizardHandler}
              mt="2"
              colorScheme="gray"
              _text={{color: 'white'}}>
              Back
            </Button>
          ) : null}
          <Spacer />
          <Button
            key="btnNextStep"
            onPress={onNextWizardHandler}
            mt="2"
            colorScheme="indigo"
            _text={{color: 'white'}}>
            Next
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
