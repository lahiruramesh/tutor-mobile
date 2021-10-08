import React from 'react';
import {Box, HStack, Avatar, VStack, Text, Spacer} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default function ({item}) {
  const onPressHandler = e => {
    e.preventDefault();
    alert(item.fullName);
  };
  return (
    <TouchableOpacity onPress={e => onPressHandler(e)}>
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: 'gray.600',
        }}
        borderColor="coolGray.200"
        pl="4"
        pr="5"
        py="2">
        <HStack space={3} justifyContent="space-between">
          <Avatar
            size="48px"
            source={{
              uri: item.avatarUrl,
            }}
          />
          <VStack>
            <Text
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              bold>
              {item.fullName}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              {item.recentText}
            </Text>
          </VStack>
          <Spacer />
          <Text
            fontSize="xs"
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            alignSelf="flex-start">
            {item.timeStamp}
          </Text>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}
