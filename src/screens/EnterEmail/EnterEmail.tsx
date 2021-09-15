import React from 'react';
import {View, SafeAreaView, Pressable} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {fonts, colors, regularIconSize, wp} from '~utils';
import styles from './styles';
import {BigButton} from '~components';
import LinearGradient from 'react-native-linear-gradient';
import {WelcomeStackProps} from '~types/NavigationTypes';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Enter a valid email'),
});

const EnterEmail = ({navigation}: WelcomeStackProps) => {
  const onSubmit = (values: {}) => {
    navigation.navigate('SetPassword');
  };

  return (
    <LinearGradient
      colors={[colors.PRIMARY, colors.PRIMARY, colors.PRIMARY_LIGHT]}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
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
        <View style={styles.titleContainer}>
          <Text style={[fonts.title]}>Enter your Email Address</Text>
          <Text style={[fonts.caption, styles.description]}>
            Enter your email address to register your account
          </Text>
        </View>

        <Formik
          validationSchema={schema}
          validateOnChange={false}
          onSubmit={values => onSubmit(values)}
          initialValues={{email: ''}}>
          {({
            handleChange,
            handleBlur,
            values,
            handleSubmit,
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
                placeholder="Email address"
                placeholderTextColor={colors.BLACK}
                theme={{colors: {text: colors.BLACK}}}
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
                    },
                  ]}
                  testID="errorText">
                  {errors.email}
                </Text>
              )}
              <View style={styles.bottomContainer}>
                <BigButton
                  title="Confirm"
                  onPress={handleSubmit}
                  testID="confirmButton"
                  //disabled={!isValid}
                />
              </View>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EnterEmail;
