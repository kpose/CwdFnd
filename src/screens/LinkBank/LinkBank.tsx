import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {colors, fonts, hp, wp} from '../../utils';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const LinkBank = () => {
  return (
    <LinearGradient
      colors={[colors.PRIMARY, colors.PRIMARY, colors.PRIMARY_LIGHT]}
      style={styles.linearGradient}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.titleContainer}>
          <Text style={[fonts.title, styles.title]}>Link Your Bank</Text>
        </View>
        <Text style={[fonts.caption, styles.description]}>
          Floatme links your bank account so you can give in the most cost
          effective and secure way.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            mode="contained"
            loading={false}
            uppercase={false}>
            <Text style={[fonts.body, {color: colors.PRIMARY}]}>
              Link Your Bank
            </Text>
          </Button>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LinkBank;
