import React from 'react';
import {View, SafeAreaView, Image, Animated} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, fonts, regularIconSize} from '~utils';
import styles from './styles';

interface Props {
  leftText?: string;
  leftIcon?: string;
  rightText?: string;
  rightIcon?: string;
  centerText?: string;
  centerImage?: string;
}

const Header = ({
  leftIcon,
  leftText,
  rightIcon,
  rightText,
  centerImage,
  centerText,
}: Props) => {
  return (
    <Surface style={styles.headerContainer}>
      <SafeAreaView style={styles.header}>
        <View>
          {leftText && (
            <Animated.Text style={[fonts.caption]}>{leftText}</Animated.Text>
          )}
          {leftIcon && (
            <Icon
              name={leftIcon}
              size={regularIconSize}
              color={colors.PRIMARY}
            />
          )}
        </View>

        <View>
          {centerText && (
            <Animated.Text style={[fonts.modalTitle]}>
              {centerText}
            </Animated.Text>
          )}
          {centerImage && <Image source={{uri: centerImage}} />}
        </View>

        <View>
          {rightText && (
            <Animated.Text style={[fonts.caption]}>{rightText}</Animated.Text>
          )}
          {rightIcon && (
            <Icon
              name={rightIcon}
              size={regularIconSize}
              color={colors.PRIMARY}
            />
          )}
        </View>
      </SafeAreaView>
    </Surface>
  );
};

export default Header;
