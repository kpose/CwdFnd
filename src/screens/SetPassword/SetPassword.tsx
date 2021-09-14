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
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Invalid password',
    ),
});

const SetPassword = ({navigation}: WelcomeStackProps) => {
  const onSubmit = (values: {}) => {
    navigation.navigate('SetName');
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
          <Text style={[fonts.title]}>Set a password for your account</Text>
          <Text style={[fonts.caption, styles.description]}>
            Password should contain a capital letter, a small letter, a number
            and a special character.
          </Text>
        </View>

        <Formik
          validationSchema={schema}
          validateOnChange={false}
          onSubmit={values => onSubmit(values)}
          initialValues={{password: ''}}>
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
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Password"
                placeholderTextColor={colors.BLACK}
                theme={{colors: {text: colors.BLACK}}}
                autoCorrect={false}
                returnKeyType="done"
                autoCapitalize="none"
                secureTextEntry
                error={touched.password && errors.password ? true : false}
                style={[styles.email, fonts.caption]}
                testID={'passwordInputField'}
              />
              {errors.password && touched.password && (
                <Text
                  style={[
                    fonts.caption,
                    {
                      color: colors.WARNING,
                    },
                  ]}
                  testID="errorText">
                  {errors.password}
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

export default SetPassword;
