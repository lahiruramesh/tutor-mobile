import React, {useState, useEffect} from 'react';
import {Platform} from '@unimodules/react-native-adapter';
import * as ImagePicker from 'react-native-image-picker';
import {
  Avatar,
  Button,
  Center,
  Heading,
  HStack,
  Modal,
  VStack,
} from 'native-base';
import CameraContainer from '../CameraContainer';

export default function TakeSelfie({submitSelfie}) {
  const [uploadPath, SetUploadPath] = useState('');
  const [showModal, SetShowModal] = useState(false);

  const takeSelfie = selfie => {
    SetUploadPath('');
    let source;
    if (Platform.OS === 'android') {
      source = {...selfie, uri: selfie.uri, isStatic: true};
    } else {
      source = {...selfie, uri: selfie.uri.replace('file://', '')};
    }
    SetUploadPath(source);
    SetShowModal(false);
    submitSelfie(source);
  };

  const openCameraHandler = () => {
    SetShowModal(true);
  };

  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    SetUploadPath('');
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error:' + response.error);
      } else if (response.customButton) {
        console.log('User clicked custom button:' + response.customButton);
      } else {
        const source = {
          ...response.assets[0],
          uri: response.assets[0].uri.replace('file://', ''),
        };
        console.log('imageResponse', source);
        SetUploadPath(source);
        submitSelfie(source);
      }
    });
  };

  return (
    <>
      <Center>
        <Heading py="5" size={'sm'}>
          Selfie Time
        </Heading>
        <VStack>
          <Modal isOpen={showModal} onClose={() => SetShowModal(false)}>
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Body>
                <CameraContainer capture={takeSelfie} />
              </Modal.Body>
            </Modal.Content>
          </Modal>
          <Avatar size="200px" source={uploadPath} />
          <HStack py={12} space={2} px={3}>
            <Button onPress={openCameraHandler}>Camera</Button>
            <Button onPress={launchImageLibrary}>Gallery</Button>
          </HStack>
        </VStack>
      </Center>
    </>
  );
}
