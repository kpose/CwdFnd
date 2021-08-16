import React from 'react';
import {View, SafeAreaView, Image, Pressable} from 'react-native';
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
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

const Header = ({
  leftIcon,
  leftText,
  rightIcon,
  rightText,
  centerImage,
  centerText,
  onLeftPress,
  onRightPress,
}: Props) => {
  return (
    <Surface style={styles.headerContainer}>
      <SafeAreaView style={styles.header}>
        <Pressable onPress={onLeftPress}>
          {leftText && <Text style={[fonts.caption]}>{leftText}</Text>}
          {leftIcon && (
            <Icon
              name={leftIcon}
              size={regularIconSize}
              color={colors.PRIMARY}
            />
          )}
        </Pressable>

        <View>
          {centerText && (
            <Text style={[fonts.title, {color: colors.PRIMARY}]}>
              {centerText}
            </Text>
          )}
          {centerImage && <Image source={{uri: centerImage}} />}
        </View>

        <Pressable onPress={onRightPress}>
          {rightText && <Text style={[fonts.caption]}>{rightText}</Text>}
          {rightIcon && (
            <Icon
              name={rightIcon}
              size={regularIconSize}
              color={colors.PRIMARY}
            />
          )}
        </Pressable>
      </SafeAreaView>
    </Surface>
  );
};

export default Header;
