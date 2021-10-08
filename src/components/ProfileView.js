import React from 'react';
import {Box, VStack, Avatar, Heading, Text, Spacer, HStack} from 'native-base';
import {View} from 'react-native';
import LabelContainer from './LabelContainer';
export default function () {
  const profile = {
    displayName: 'CIA Testing',
    role: 'Student',
    profile_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    firstName: 'Lahiru',
    lastName: 'Subasinghe',
    email: 'lahiru.ramesh@gmail.com',
    mobile: '0768282452',
    city: 'Matara',
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it" +
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  };

  return (
    <Box>
      <VStack alignItems="center" space={3} py="2">
        <Avatar
          size="70px"
          source={{
            uri: profile.profile_url,
          }}
        />
        <Heading>{profile.displayName}</Heading>
        <Text>{profile.role}</Text>
        <Text>{profile.bio}</Text>
        <Spacer />
      </VStack>
      <VStack space={4} px={4}>
        <Heading fontSize="md">Basic Information</Heading>
        <BasicInformation profile={profile} />
      </VStack>
    </Box>
  );
}

function BasicInformation({profile}) {
  return (
    <>
      <LabelContainer label="First Name" value={profile.firstName} />
      <LabelContainer label="Last Name" value={profile.lastName} />
      <LabelContainer label="Email" value={profile.email} />
      <LabelContainer label="Mobile" value={profile.mobile} />
      <LabelContainer label="City" value={profile.city} />
    </>
  );
}
