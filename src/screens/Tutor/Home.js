import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {
  Heading,
  HStack,
  IconButton,
  ScrollView,
  Spacer,
  VStack,
  Icon,
  Button,
} from 'native-base';
import Course from '../../components/Course';
import CreateMetaData from './Courses/CreateMetaData';

export default function Home() {
  const [createCourse, setCreateCourse] = useState(false);

  const onPressCreateCourseHandler = () => {
    console.log('tesing');
    return <CreateMetaData openModal={true} />;
  };

  return (
    <NativeBaseProvider>
      <VStack space={1} alignmentItems="center" mt={3}>
        <Heading textAlign="center" mb="10">
          My Courses
        </Heading>
      </VStack>
      <ScrollView>
        <VStack px="12" space={2} alignmentItems="center">
          <Course />
        </VStack>
      </ScrollView>
      <VStack space={1} alignmentItems="left" mt={2} px="12">
        <Button onPress={onPressCreateCourseHandler}>New Course</Button>
      </VStack>
    </NativeBaseProvider>
  );
}
