import React from 'react';
import {View, Pressable, Image, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import {Text, TextInput, Switch} from 'react-native-paper';
import {WavyHeader, SmallButton} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WelcomeStackProps} from '../../types/NavigationTypes';
import {hp, colors, fonts, wp} from '../../utils';

const Signup = ({navigation}: WelcomeStackProps) => {
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
        <Text style={[fonts.title]}>Hello,</Text>
        <Text style={[fonts.headerTitle]}>Sign up!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Name"
          autoCorrect={false}
          style={[styles.email, fonts.caption]}
        />
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

        <View style={{marginBottom: hp(3)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="check-square-o"
              size={20}
              style={styles.validatorIcon}
              color={colors.PRIMARY}
            />
            <Text style={[fonts.caption]}>Valid email address</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="check-square-o"
              size={20}
              style={styles.validatorIcon}
              color={colors.PRIMARY_LIGHT}
            />
            <Text style={[fonts.caption, {color: colors.PRIMARY_LIGHT}]}>
              Password: 6-64 characters
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[fonts.caption, {textAlign: 'center'}]}>
              I agree to the Terms of use
            </Text>
            <Switch />
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <SmallButton title="Sign up" onPress={() => console.log('pressed')} />
        </View>
      </View>
      <View style={styles.socialContainer}>
        <Text style={[fonts.caption]}>OR</Text>
        <Text style={[fonts.caption]}>Sign up with social media</Text>
        <View style={{flexDirection: 'row'}}>
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
          marginTop: hp(2),
        }}>
        <Text style={[fonts.caption, {marginRight: wp(1)}]}>
          Already have an account?
        </Text>
        <Pressable onPress={() => navigation.navigate('Signin')}>
          <Text
            style={[
              fonts.caption,
              {textDecorationLine: 'underline', color: colors.PRIMARY},
            ]}>
            Sign in
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
