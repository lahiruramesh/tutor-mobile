import React, {useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import StudentList from './StudentList';
import {Dimensions, StatusBar} from 'react-native';

import {TabView, SceneMap} from 'react-native-tab-view';

const PendingStudentList = () => {
  return <StudentList />;
};

const EnrolledStudentList = () => {
  return <StudentList />;
};

const RejectedStudentList = () => {
  return <StudentList />;
};

const renderScene = SceneMap({
  first: PendingStudentList,
  second: EnrolledStudentList,
  third: RejectedStudentList,
});

const initialLayout = {width: Dimensions.get('window').width};

export default function Students() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'Pending'},
    {key: 'second', title: 'Enrolled'},
    {key: 'third', title: 'Rejected'},
  ]);

  return (
    <NativeBaseProvider>
      <TabView
        onIndexChange={setIndex}
        navigationState={{index, routes}}
        renderScene={renderScene}
        initialLayout={{width: initialLayout}}
        style={{marginTop: StatusBar.currentHeight}}
      />
    </NativeBaseProvider>
  );
}
