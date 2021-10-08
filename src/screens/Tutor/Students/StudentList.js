import React from 'react';
import {FlatList} from 'native-base';
import ProfileCard from '../../../components/ProfileCard';

export default function () {
  const students = [
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d73',
      fullName: 'Testing',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];

  return (
    <FlatList
      data={students}
      renderItem={({item}) => <ProfileCard item={item} />}
      keyExtractor={item => item.id}
    />
  );
}
