import React from 'react';
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
} from 'native-base';

export default function Course() {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      width="100%"
      shadow={1}
      _light={{backgroundColor: 'gray.50'}}
      _dark={{backgroundColor: 'gray.700'}}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _text={{color: 'white', fontWeight: '700', fontSize: 'xs'}}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5">
          VIDEOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            OL
          </Heading>
          <Text
            fontSize="xs"
            _light={{color: 'violet.500'}}
            _dark={{color: 'violet.300'}}
            fontWeight="500"
            ml="-0.5"
            mt="-1">
            Grade 12
          </Text>
        </Stack>
        <Text fontWeight="400">Grade 12 Maths Vectors</Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="gray.500" fontWeight="400">
              2021/10/18
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}
