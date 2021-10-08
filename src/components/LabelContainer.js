import React from 'react';
import {
  Stack,
  Flex,
  Spacer,
  Text,
  NativeBaseProvider,
  HStack,
  Box,
  VStack,
} from 'native-base';
export default function ({label, value}) {
  return (
    <HStack space={16}>
      <Box width="25%">
        <Text fontSize="md">{label}</Text>
      </Box>
      <Box>
        <Text fontSize="md">{value}</Text>
      </Box>
    </HStack>
  );
}
