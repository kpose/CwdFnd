import React, {useRef} from 'react';
import {
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {Text, TextInput} from 'react-native-paper';
import {WavyHeader, SmallButton} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WelcomeStackProps} from '../../types/NavigationTypes';
import {hp, colors, fonts, wp} from '../../utils';

import {Formik} from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Enter a valid email'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Invalid password',
    ),
});

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

      <SafeAreaView style={{marginLeft: wp(5)}}>
        <Pressable onPress={() => navigation.navigate('OnBoarding')}>
          <Icon
            name="close"
            size={24}
            //style={styles.icon}
            color={colors.WHITE}
          />
        </Pressable>

        <View style={styles.headerContainer}>
          <Text style={[fonts.title]}>Welcome Back,</Text>
          <Text style={[fonts.headerTitle]}>Log In!</Text>
        </View>
      </SafeAreaView>

      <View style={styles.inputContainer}>
        <Formik
          validationSchema={schema}
          validateOnChange={true}
          //validateOnMount={false}
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <TextInput
                mode="outlined"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                label="Email address"
                autoCorrect={false}
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                returnKeyType="done"
                autoCapitalize="none"
                error={touched.email && errors.email ? true : false}
                style={[styles.email, fonts.caption]}
                testID={'emailInputField'}
              />
              {errors.email && touched.email && (
                <Text
                  style={[
                    fonts.caption,
                    {
                      color: colors.WARNING,
                      //marginBottom: hp(3),
                      marginLeft: wp(2),
                    },
                  ]}
                  testID="emailError">
                  {errors.email}
                </Text>
              )}

              <TextInput
                mode="outlined"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                clearButtonMode="while-editing"
                label="Password"
                textContentType="password"
                error={touched.password && errors.password ? true : false}
                testID={'passwordInputField'}
                secureTextEntry={true}
                style={[styles.email, fonts.caption]}
              />

              {errors.password && touched.password && (
                <Text
                  style={[
                    fonts.caption,
                    {
                      color: colors.WARNING,
                      //marginBottom: hp(3),
                      marginLeft: wp(2),
                    },
                  ]}
                  testID="passwordError">
                  {errors.password}
                </Text>
              )}

              <View style={{marginBottom: hp(3), marginTop: hp(2)}}>
                {!values.email && (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="edit"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.LIGHT_GRAY}
                    />
                    <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
                      Should be valid email address
                    </Text>
                  </View>
                )}

                {values.email && errors.email ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="edit"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.LIGHT_GRAY}
                    />
                    <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
                      Typing ...
                    </Text>
                  </View>
                ) : null}

                {values.email && !errors.email ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="check-square-o"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.PRIMARY}
                    />
                    <Text style={[fonts.caption, {color: colors.PRIMARY}]}>
                      Should be valid email address
                    </Text>
                  </View>
                ) : null}

                {!values.password && (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="edit"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.LIGHT_GRAY}
                    />
                    <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
                      Password: At least One Uppercase, One Lowercase, One
                      Number, and One Special Case Character
                    </Text>
                  </View>
                )}

                {values.password && errors.password ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="edit"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.LIGHT_GRAY}
                    />
                    <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
                      Unacceptable password format
                    </Text>
                  </View>
                ) : null}

                {values.password && !errors.password ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="check-square-o"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.PRIMARY}
                    />
                    <Text
                      style={[
                        fonts.caption,
                        {color: colors.PRIMARY, alignSelf: 'center'},
                      ]}>
                      Pasword: At least One Uppercase, One Lowercase, One Number
                      and One Special Case Character
                    </Text>
                  </View>
                ) : null}
              </View>

              <Text style={[fonts.caption, styles.forgot]}>
                Forgot Password?
              </Text>
              <View style={{alignItems: 'center'}}>
                <SmallButton
                  title="Log in"
                  onPress={handleSubmit}
                  testID="loginButton"
                  //disabled={!isValid}
                />
              </View>
            </>
          )}
        </Formik>
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
              {textDecorationLine: 'underline', color: colors.SECONDARY},
            ]}>
            Click here
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signin;

{
  /* <View style={styles.socialContainer}>
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
      </View> */
}
