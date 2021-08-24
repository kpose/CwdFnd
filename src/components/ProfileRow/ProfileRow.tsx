import React from 'react';
import {View, ScrollView} from 'react-native';
import BigButton from '~components/BigButton/BigButton';
import Row from './Row';
import Single from './Single';

const ProfileRow = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Row title="Your Company" caption="Register your company and projects" />
      <Row title="Projects" caption="Saved, Backed Projects" />
      <Single title="Notification" />
      <Row
        title="Security & Privacy"
        caption="Contact, Password, Blocked Users"
      />
      <Single title="Terms" />
      <Single title="Community Guidelines" />

      <BigButton title="Log Out" onPress={() => console.log('out')} />
    </ScrollView>
  );
};

export default ProfileRow;
