import React from 'react';
import {View, Image} from 'react-native';
import logoImage from '../assets/images/logo.png';

export default function LogoContainer() {
  return <Image key={logoImage} source={logoImage} />;
}
