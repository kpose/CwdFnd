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
  fullname: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
});

const SetName = ({navigation}: WelcomeStackProps) => {
  const onSubmit = (values: {}) => {
    console.log(values);
    navigation.navigate('SetCategories');
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
          <Text style={[fonts.title]}>What can we call you?</Text>
          <Text style={[fonts.caption, styles.description]}>
            Please enter your name below
          </Text>
        </View>

        <Formik
          validationSchema={schema}
          validateOnChange={false}
          onSubmit={values => onSubmit(values)}
          initialValues={{fullname: ''}}>
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
                value={values.fullname}
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                autoCorrect={false}
                autoCompleteType="name"
                textContentType="name"
                autoCapitalize="none"
                outlineColor={colors.PRIMARY}
                error={touched.fullname && errors.fullname ? true : false}
                style={[styles.fullname, fonts.textInput]}
                testID={'fullnameInputField'}
              />
              {errors.fullname && touched.fullname && (
                <Text
                  style={[
                    fonts.caption,
                    {
                      color: colors.WARNING,
                    },
                  ]}>
                  {errors.fullname}
                </Text>
              )}
              <View style={styles.bottomContainer}>
                <BigButton
                  title="Confirm"
                  onPress={handleSubmit}
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

export default SetName;
