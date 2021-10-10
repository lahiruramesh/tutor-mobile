import React, {useState, useEffect} from 'react';
import {FormControl, Heading, Input, VStack} from 'native-base';

export default function BasicInformation({submitBasicFormDetails}) {
  const [basicInfoForm, setFormData] = useState();

  useEffect(() => {
    submitBasicFormDetails(basicInfoForm);
  }, [basicInfoForm, submitBasicFormDetails]);

  return (
    <>
      <Heading py="5" size={'sm'}>
        Basic Information
      </Heading>

      <VStack space={3} mt="5">
        <FormControl isRequired>
          <FormControl.Label>First Name</FormControl.Label>
          <Input
            type="text"
            key="firstName"
            onChangeText={value =>
              setFormData({...basicInfoForm, firstName: value})
            }
            fontSize="md"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Last Name</FormControl.Label>
          <Input
            type="text"
            key="lastName"
            onChangeText={value =>
              setFormData({...basicInfoForm, lastName: value})
            }
            fontSize="md"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Display Name</FormControl.Label>
          <Input
            key="displayName"
            onChangeText={value =>
              setFormData({...basicInfoForm, displayName: value})
            }
            fontSize="md"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            type="email"
            key="email"
            onChangeText={value =>
              setFormData({...basicInfoForm, email: value})
            }
            fontSize="md"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Mobile</FormControl.Label>
          <Input
            type="telephone"
            key="mobile"
            onChangeText={value =>
              setFormData({...basicInfoForm, mobile: value})
            }
            fontSize="md"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>City</FormControl.Label>
          <Input
            type="text"
            key="city"
            onChangeText={value => setFormData({...basicInfoForm, city: value})}
            fontSize="md"
          />
        </FormControl>
      </VStack>
    </>
  );
}
