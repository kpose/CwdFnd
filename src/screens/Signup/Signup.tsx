import React, {useRef} from 'react';
import {View, Pressable, Image, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import {Text, TextInput, Switch} from 'react-native-paper';
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
  firstname: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
});

interface EmailPasswordFormProps {
  onSubmit: (data: EmailPasswordFormState) => void;
  onForgotPasswordPress: () => void;
}

type EmailPasswordFormState = {
  email: string;
  password: string;
};

const Signup = (
  {navigation}: WelcomeStackProps,
  {onSubmit, onForgotPasswordPress}: EmailPasswordFormProps,
) => {
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
        <Formik
          validationSchema={schema}
          validateOnChange={false}
          //validateOnMount={false}
          initialValues={{email: '', password: '', firstname: ''}}
          onSubmit={onSubmit}>
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
                value={values.firstname}
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                label="Firstname"
                autoCorrect={false}
                autoCompleteType="name"
                textContentType="name"
                autoCapitalize="none"
                error={touched.firstname && errors.firstname ? true : false}
                style={[styles.email, fonts.caption]}
                testID={'firstnameInputField'}
              />
              {errors.firstname && touched.firstname && (
                <Text
                  style={[
                    fonts.caption,
                    {
                      color: colors.WARNING,
                      //marginBottom: hp(3),
                      marginLeft: wp(2),
                    },
                  ]}>
                  {errors.firstname}
                </Text>
              )}
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
                  ]}>
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
                  testID="passwordErrorId"
                  style={[
                    fonts.caption,
                    {
                      color: colors.WARNING,
                      //marginBottom: hp(3),
                      marginLeft: wp(2),
                    },
                  ]}>
                  {errors.password}
                </Text>
              )}

              <View style={{marginBottom: hp(3), marginTop: hp(2)}}>
                {!values.email && (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="check-square-o"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.PRIMARY}
                    />
                    <Text style={[fonts.caption, {color: colors.PRIMARY}]}>
                      should be Valid email address
                    </Text>
                  </View>
                )}

                {values.email && !errors.email ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="check-square-o"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.PRIMARY_LIGHT}
                    />
                    <Text
                      style={[fonts.caption, {color: colors.PRIMARY_LIGHT}]}>
                      Valid email address
                    </Text>
                  </View>
                ) : null}

                {!values.password && (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="check-square-o"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.PRIMARY}
                    />
                    <Text style={[fonts.caption, {color: colors.PRIMARY}]}>
                      Pasword: At least One Uppercase, One Lowercase, One Number
                      and One Special Case Character
                    </Text>
                  </View>
                )}

                {values.password && !errors.password ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="check-square-o"
                      size={20}
                      style={styles.validatorIcon}
                      color={colors.PRIMARY_LIGHT}
                    />
                    <Text
                      style={[
                        fonts.caption,
                        {color: colors.PRIMARY_LIGHT, alignSelf: 'center'},
                      ]}>
                      Pasword: At least One Uppercase, One Lowercase, One Number
                      and One Special Case Character
                    </Text>
                  </View>
                ) : null}
                {/*  <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: wp(2),
                    marginLeft: wp(2),
                  }}>
                  <Text style={[fonts.caption, {textAlign: 'center'}]}>
                    I agree to the Terms of use
                  </Text>
                  <Switch />
                </View> */}
              </View>

              <Text style={[fonts.caption, styles.forgot]}>
                Forgot Password?
              </Text>
              <View style={{alignItems: 'center'}}>
                <SmallButton
                  title="Sign up"
                  onPress={handleSubmit}
                  testID="signupButton"
                  disabled={!isValid}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
      {/* <View style={styles.socialContainer}>
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
      </View> */}
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
