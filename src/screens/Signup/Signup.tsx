import React from 'react';
import {View, SafeAreaView, Image, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import {fonts, colors} from '~utils';
import styles from './styles';
import {BigButton} from '~components';
import LinearGradient from 'react-native-linear-gradient';
import {WelcomeStackProps} from '~types/NavigationTypes';

const Signup = ({navigation}: WelcomeStackProps) => {
  return (
    <LinearGradient
      colors={[colors.PRIMARY, colors.PRIMARY, colors.PRIMARY_LIGHT]}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[fonts.headerTitle]}>Sign up to get started</Text>
          <Text style={[fonts.subheading, styles.description]}>
            Sign up to access a wide range of products and experiences
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <BigButton
            title="Sign up with mobile number"
            onPress={() => navigation.navigate('HomeStack')}
            testID="mobileNumber"
          />
          <BigButton
            title="Sign up using Email"
            onPress={() => navigation.navigate('EnterEmail')}
            testID="email"
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require('~assets/images/Gmail.jpg')}
            style={styles.socialIcon}
          />
          <Image
            source={require('~assets/images/facebook.png')}
            style={styles.socialIcon}
          />
          <Image
            source={require('~assets/images/twitter.png')}
            style={styles.socialIcon}
          />
        </View>
        <View style={styles.bottomText}>
          <Text style={[fonts.body]}>Already a member?</Text>
          <Pressable onPress={() => navigation.navigate('Signin')}>
            <Text style={[fonts.body, styles.signin]}>Sign in</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Signup;
