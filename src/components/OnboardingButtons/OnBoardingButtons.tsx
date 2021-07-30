import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-paper';
import {colors, fonts} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const OnBoardingButtons = ({scrollX}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        uppercase={false}
        style={styles.button}
        children="Log in"
        labelStyle={[
          fonts.segmentedButtonText,
          {color: colors.PRIMARY, fontWeight: '700'},
        ]}
        color={colors.WHITE}
        onPress={() => navigation.navigate('Signin')}
      />

      <Button
        mode="contained"
        uppercase={false}
        children="Sign up"
        style={styles.button}
        labelStyle={[
          fonts.segmentedButtonText,
          {color: colors.PRIMARY, fontWeight: '700'},
        ]}
        color={colors.WHITE}
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default OnBoardingButtons;
