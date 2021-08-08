import React, {useState, useRef} from 'react';
import {View, SafeAreaView, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import {fonts, colors, wp, regularIconSize} from '~utils';
import styles from './styles';
import {BigButton} from '~components';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WelcomeStackProps} from '~types/NavigationTypes';

const EnterNumber = ({navigation}: WelcomeStackProps) => {
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  const onButtonPress = () => {
    //const checkValid = phoneInput.current?.isValidNumber(value);
    navigation.navigate('EnterOTP');
  };
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
          <Text style={[fonts.title]}>Enter your mobile number</Text>
          <Text style={[fonts.caption, styles.description]}>
            Enter your mobile number to register your account
          </Text>
        </View>

        {/*  */}

        {/* <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="NG"
          layout="first"
          onChangeText={text => setValue(text)}
          onChangeFormattedText={text => setFormattedValue(text)}
          containerStyle={styles.textContainer}
          textContainerStyle={{borderRadius: 10}}
          withDarkTheme
          withShadow
          autoFocus
        /> */}

        {/*  */}

        <View style={styles.bottomContainer}>
          <BigButton title="Continue" onPress={onButtonPress} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EnterNumber;
