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

export default function TakeSelfie() {
  const [uploadPath, SetUploadPath] = useState(
    require('../../assets/images/default.png'),
  );
  const [showModal, SetShowModal] = useState(false);

  useEffect(() => {
    console.log('xxx', uploadPath);
  }, [uploadPath]);
  const takeSelfie = selfie => {
    let source;
    if (Platform.OS === 'android') {
      source = {uri: selfie.uri, isStatic: true};
    } else {
      source = {uri: selfie.uri.replace('file://', ''), isStatic: true};
    }

    SetUploadPath({uri: source.uri});
    console.log('profile', uploadPath);
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

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error:' + response.error);
      } else if (response.customButton) {
        console.log('User clicked custom button:' + response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('imageResponse', JSON.stringify(response));
        SetUploadPath(source);
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
