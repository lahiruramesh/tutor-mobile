import React from 'react';
import {Box, VStack, Avatar, Heading, Text, Spacer, HStack} from 'native-base';
import LabelContainer from './LabelContainer';
export default function () {
  const profile = {
    displayName: 'Lahiru Ramesh',
    role: 'Tutor',
    profile_url:
      '/Users/admin/Library/Developer/CoreSimulator/Devices/DABA0747-CFFE-4ED7-916E-5E244A80E67C/data/Containers/Data/Application/67275B5A-C0CC-4A4F-B647-F1BFE500CB46/Library/Caches/Camera/90F367C8-2CE0-4463-9DEE-B5AB1B300190.jpg',
    firstName: 'Lahiru',
    lastName: 'Ramesh',
    email: 'lahiru@test.com',
    mobile: '0768282452',
    city: 'Matara',
    bio: 'Test Description',
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
