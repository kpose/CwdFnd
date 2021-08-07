import React, {useState} from 'react';
import {View, SafeAreaView, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import {fonts, colors, wp, navigationIconSize} from '~utils';
import styles from './styles';
import {BigButton} from '~components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WelcomeStackProps} from '~types/NavigationTypes';

const Signup = ({navigation}: WelcomeStackProps) => {
  const [selectedNew, setSelectedNew] = useState(false);
  const [selectedBasic, setSelectedBasic] = useState(false);
  const [selectedPro, setSelectedPro] = useState(false);
  return (
    <LinearGradient
      colors={[colors.PRIMARY, colors.PRIMARY, colors.PRIMARY_LIGHT]}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[fonts.title]}>Hello Ebuka,</Text>
          <Text style={[fonts.caption, styles.description]}>
            Which option describes you the best?
          </Text>
        </View>

        <Pressable
          style={styles.optionsContainer}
          onPress={() => setSelectedNew(!selectedNew)}>
          <Icon
            name={selectedNew ? 'check-circle' : 'minus-circle'}
            size={navigationIconSize}
            color={selectedNew ? colors.SECONDARY : colors.WHITE}
            style={{marginLeft: wp(2)}}
          />
          <View style={{marginLeft: wp(3)}}>
            <Text style={[fonts.textInput, styles.title]}>
              I am new to the market
            </Text>
            <Text style={[fonts.caption]}>Don't worry, we got your back</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.optionsContainer}
          onPress={() => setSelectedBasic(!selectedBasic)}>
          <Icon
            name={selectedBasic ? 'check-circle' : 'minus-circle'}
            size={navigationIconSize}
            color={selectedBasic ? colors.SECONDARY : colors.WHITE}
            style={{marginLeft: wp(2)}}
          />
          <View style={{marginLeft: wp(3)}}>
            <Text style={[fonts.textInput, styles.title]}>
              I have some basic knowledge about funding
            </Text>
            <Text style={[fonts.caption]}>
              We would just provide you with some tips.
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.optionsContainer}
          onPress={() => setSelectedPro(!selectedPro)}>
          <Icon
            name={selectedPro ? 'check-circle' : 'minus-circle'}
            size={navigationIconSize}
            color={selectedPro ? colors.SECONDARY : colors.WHITE}
            style={{marginLeft: wp(2)}}
          />
          <View style={{marginLeft: wp(3)}}>
            <Text style={[fonts.textInput, styles.title]}>
              I am an experienced personnel
            </Text>
            <Text style={[fonts.caption]}>It's a free world.</Text>
          </View>
        </Pressable>

        <View style={styles.bottomContainer}>
          <BigButton
            title="Continue"
            onPress={() => navigation.navigate('SetCategories')}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Signup;
