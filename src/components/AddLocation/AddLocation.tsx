import React from 'react';
import {View, Pressable} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';
import {fonts, wp} from '~utils';

const AddLocation = () => {
  return (
    <View style={styles.container}>
      <Text style={[fonts.title, {alignSelf: 'center'}]}>
        Fund projects you care about
      </Text>
      <Pressable style={styles.buttonContainer}>
        <Text style={[fonts.smallButtonText]}>Use your current location</Text>
      </Pressable>
      <Text style={[fonts.body]}>Or enter your location manually</Text>
    </View>
  );
};

export default AddLocation;
