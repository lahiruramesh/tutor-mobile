import React, {useState} from 'react';
import {User} from '../../models/User';
import {
  Center,
  Heading,
  HStack,
  Image,
  Spacer,
  View,
  VStack,
} from 'native-base';
import LogoContainer from '../LogoContainer';
import {TouchableOpacity} from 'react-native';

export default function SelectRole({selectedRoleHandler}) {
  const [selectedRole, SetSelectedRole] = useState(User.ROLE_STUDENT);

  const styles = {
    selected: {
      color: 'indigo',
    },
  };

  const onRoleChangeHandler = (e, role) => {
    SetSelectedRole(role);
    selectedRoleHandler(selectedRole);
  };

  return (
    <View bg="dark">
      <Center>
        <LogoContainer key="logoContainer" />
        <Heading size={'md'}>Welcome</Heading>
        <HStack space={2} py={2}>
          <VStack py="10">
            <View>
              <TouchableOpacity
                value={User.ROLE_STUDENT}
                onPress={e => onRoleChangeHandler(e, User.ROLE_STUDENT)}>
                <Image
                  resizeMode={'contain'}
                  source={require('../../assets/images/student.jpeg')}
                  size="150"
                  alt="Student Image"
                />
              </TouchableOpacity>
              <Center>
                <Heading
                  size="md"
                  style={
                    selectedRole == User.ROLE_STUDENT ? styles.selected : ''
                  }>
                  Student
                </Heading>
              </Center>
            </View>
          </VStack>
          <Spacer />
          <TouchableOpacity
            onPress={e => onRoleChangeHandler(e, User.ROLE_TUTOR)}>
            <VStack py="10">
              <View>
                <Image
                  style={{backgroundColor: 'whitesmoke'}}
                  resizeMode={'contain'}
                  source={require('../../assets/images/tutor.png')}
                  size="150"
                  alt="Student Image"
                />
                <Center>
                  <Heading
                    size="md"
                    style={
                      selectedRole == User.ROLE_TUTOR ? styles.selected : ''
                    }>
                    Tutor
                  </Heading>
                </Center>
              </View>
            </VStack>
          </TouchableOpacity>
          <Spacer />
        </HStack>
      </Center>
    </View>
  );
}
