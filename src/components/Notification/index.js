import React, {useState} from 'react';
import {Avatar, Box, HStack, Spacer, Text, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';

export function NotificationContainer({notification}) {
  const onPressHandler = e => {
    console.log('testing', notification);
    e.preventDefault();
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
          <VStack>
            <Text
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              bold>
              {notification.item.title}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              {notification.item.message}
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
            {notification.item.timestamp}
          </Text>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}
