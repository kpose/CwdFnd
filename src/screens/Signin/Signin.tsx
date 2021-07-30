import React from 'react';
import {View, Pressable, Image, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import {Text, TextInput} from 'react-native-paper';
import {WavyHeader, SmallButton} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WelcomeStackProps} from '../../types/NavigationTypes';
import {hp, colors, fonts, wp} from '../../utils';

const Signin = ({navigation}: WelcomeStackProps) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={hp(18)}
        customTop={hp(15)}
        customBgColor={colors.PRIMARY}
        customWavePattern="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,154.7C672,139,768,117,864,106.7C960,96,1056,96,1152,133.3C1248,171,1344,245,1392,282.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />

      <Pressable onPress={() => navigation.navigate('OnBoarding')}>
        <Icon name="close" size={20} style={styles.icon} color={colors.WHITE} />
      </Pressable>
      <View style={styles.headerContainer}>
        <Text style={[fonts.title]}>Welcome Back,</Text>
        <Text style={[fonts.headerTitle]}>Log In!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Email address"
          autoCorrect={false}
          textContentType="emailAddress"
          keyboardType="email-address"
          style={[styles.email, fonts.caption]}
        />
        <TextInput
          mode="outlined"
          label="Password"
          textContentType="password"
          secureTextEntry={true}
          style={[styles.email, fonts.caption]}
        />
        <Text style={[fonts.caption, styles.forgot]}>Forgot Password?</Text>
        <View style={{alignItems: 'center'}}>
          <SmallButton title="Log in" onPress={() => console.log('pressed')} />
        </View>
      </View>
      <View style={styles.socialContainer}>
        <Text style={[fonts.caption, {marginBottom: hp(0)}]}>OR</Text>
        <Text style={[fonts.caption]}>Login with social media</Text>
        <View style={{flexDirection: 'row', marginTop: hp(1)}}>
          <Pressable>
            <Image
              style={styles.image}
              source={require('../../assets/images/Gmail.jpg')}
            />
          </Pressable>
          <Pressable>
            <Image
              style={styles.image}
              source={require('../../assets/images/f_logo_RGB-Hex-Blue_512.png')}
            />
          </Pressable>

          <Pressable>
            <Image
              style={styles.image}
              source={require('../../assets/images/twitter-circle-1865867-2745474.png')}
            />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: hp(3),
        }}>
        <Text style={[fonts.caption, {marginRight: wp(1)}]}>
          Don't have an account?
        </Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text
            style={[
              fonts.caption,
              {textDecorationLine: 'underline', color: colors.PRIMARY},
            ]}>
            Click here
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signin;
