import React, {useState, useEffect} from 'react';
import {FormControl, Heading, Input, TextArea, VStack} from 'native-base';

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
          <FormControl.Label>School Name</FormControl.Label>
          <Input
            type="text"
            key="schoolName"
            onChangeText={value =>
              setFormData({...educationalInfoForm, schoolName: value})
            }
            fontSize="md"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Grade</FormControl.Label>
          <Input
            key="grade"
            onChangeText={value =>
              setFormData({...educationalInfoForm, grade: value})
            }
            fontSize="md"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Bio</FormControl.Label>
          <TextArea
            key="bio"
            onChangeText={value =>
              setFormData({...educationalInfoForm, bio: value})
            }
            fontSize="md"
          />
        </FormControl>
      </VStack>
    </>
  );
}
