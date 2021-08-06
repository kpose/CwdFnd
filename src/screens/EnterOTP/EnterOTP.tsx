import React, {useState, useRef} from 'react';
import {View, SafeAreaView, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import {fonts, colors, wp, regularIconSize, hp} from '~utils';
import styles from './styles';
import {BigButton} from '~components';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WelcomeStackProps} from '~types/NavigationTypes';

const EnterOTP = ({navigation}: WelcomeStackProps) => {
  return (
    <LinearGradient
      colors={[colors.PRIMARY, colors.PRIMARY, colors.PRIMARY_LIGHT]}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        {/*  */}
        <Pressable
          onPress={() => navigation.goBack()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="chevron-left"
            size={regularIconSize}
            color={colors.WHITE}
          />
          <Text style={[fonts.caption, {marginLeft: wp(1)}]}>Back</Text>
        </Pressable>

        {/*  */}
        <View style={styles.titleContainer}>
          <Text style={[fonts.title]}>Enter the OTP</Text>
          <Text style={[fonts.caption, styles.description]}>
            Enter the OTP sent to this mobile number: +2348121190078
          </Text>
        </View>

        {/*  */}

        <OTPInputView
          pinCount={4}
          autoFocusOnLoad
          style={styles.otpInput}
          codeInputHighlightStyle={{borderColor: colors.PRIMARY_LIGHT}}
          codeInputFieldStyle={styles.input}
          secureTextEntry={true}
        />
        <Pressable>
          <Text
            style={[
              fonts.caption,
              {marginTop: hp(1), color: colors.SECONDARY},
            ]}>
            Resend OTP
          </Text>
        </Pressable>

        {/*  */}

        <View style={styles.bottomContainer}>
          <BigButton
            title="Continue"
            onPress={() => navigation.navigate('SetName')}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EnterOTP;
