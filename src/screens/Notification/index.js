import React from 'react';
import {FlatList} from 'native-base';
import {NotificationContainer} from '../../components/Notification';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';

export default function Notification() {
  const notifications = [
    {
      id: 1,
      title: 'New Student registered',
      message: 'S L R Subasignhe registered',
      timestamp: '2021-10-20 12:20:04',
    },
    {
      id: 2,
      title: 'New Student registered',
      message: 'Lahiru Ramesh registered',
      timestamp: '2021-10-20 12:20:04',
    },
    {
      id: 3,
      title: 'New Course',
      message: 'Vectors for beginners',
      timestamp: '2021-10-20 12:20:04',
    },
    {
      id: 4,
      title: 'New Course',
      message: 'AL Force',
      timestamp: '2021-10-20 12:20:04',
    },
    {
      id: 5,
      title: 'New Course',
      message: 'AL Chemistry by Kesiri vithanage',
      timestamp: '2021-10-20 12:20:04',
    },
  ];
  return (
    <NativeBaseProvider>
      <FlatList
        data={notifications}
        renderItem={notification => (
          <NotificationContainer notification={notification} />
        )}
        keyExtractor={item => item.id}
      />
    </NativeBaseProvider>
  );
}
