import React, {useState, useEffect} from 'react';
import {FormControl, Heading, Input, VStack} from 'native-base';

export default function EducationalBackground({submitEducationalBackground}) {
  const [educationalInfoForm, setFormData] = useState();

  useEffect(() => {
    submitEducationalBackground(educationalInfoForm);
  }, [educationalInfoForm, submitEducationalBackground]);

  return (
    <>
      <Heading py="5" size={'sm'}>
        Education
      </Heading>

      <VStack space={3} mt="5">
        <FormControl isRequired>
          <FormControl.Label>First Name</FormControl.Label>
          <Input
            type="text"
            key="firstName"
            onChangeText={value =>
              setFormData({...educationalInfoForm, firstName: value})
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
              setFormData({...educationalInfoForm, lastName: value})
            }
            fontSize="md"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Display Name</FormControl.Label>
          <Input
            key="displayName"
            onChangeText={value =>
              setFormData({...educationalInfoForm, displayName: value})
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
              setFormData({...educationalInfoForm, email: value})
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
              setFormData({...educationalInfoForm, mobile: value})
            }
            fontSize="md"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>City</FormControl.Label>
          <Input
            type="text"
            key="city"
            onChangeText={value =>
              setFormData({...educationalInfoForm, city: value})
            }
            fontSize="md"
          />
        </FormControl>
      </VStack>
    </>
  );
}
