import React from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import {fonts, colors, wp, hp, regularIconSize} from '~utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface Props {
  leftText?: string;
  leftIcon?: string;
  rightText?: string;
  rightIcon?: string;
  onRightPress?: () => void;
  navigation?: any;
}

const PreviewProjectHeader = ({navigation, rightIcon, onRightPress}: Props) => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/2.jpg')}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.banner}>
          <View>
            <Pressable
              style={styles.navIcon}
              onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={regularIconSize}
                color={colors.PRIMARY}
              />
            </Pressable>
          </View>

          <View>
            <Text style={[fonts.title]}>FloatMe</Text>
          </View>

          <View>
            {rightIcon && (
              <Pressable style={styles.navIcon} onPress={onRightPress}>
                <Icon
                  name={rightIcon}
                  size={regularIconSize}
                  color={colors.PRIMARY}
                />
              </Pressable>
            )}
          </View>
        </SafeAreaView>

        <View style={styles.titleContainer}>
          <View style={styles.categoryContainer}>
            <Text style={[fonts.caption, {color: colors.WHITE}]}>
              Education
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: hp(1),
            }}>
            <Text style={[fonts.title, {color: colors.WHITE, width: wp(75)}]}>
              Help me launch my project
            </Text>
          </View>
          <Text numberOfLines={3} style={[fonts.body, {color: colors.WHITE}]}>
            Together, we can build an enabling environmet for investors and
            entreprenuers
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.locationContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="location-arrow"
            size={regularIconSize}
            color={colors.PRIMARY}
          />
          <Text style={[fonts.caption, {marginLeft: wp(2)}]}>
            Lagos, Nigeria
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/1.jpg')}
            style={styles.avatar}
          />
          <Text style={[fonts.caption]}>By Samantha Bridges</Text>
        </View>
      </View>
    </View>
  );
};

export default PreviewProjectHeader;

/* {
  leftIcon && (
    <Pressable style={styles.navIcon} onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={regularIconSize} color={colors.PRIMARY} />
    </Pressable>
  );
}
{
  centerText && <Text style={[fonts.title]}>FloatMe</Text>;
}
{
  rightIcon && (
    <Pressable style={styles.navIcon} onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={regularIconSize} color={colors.PRIMARY} />
    </Pressable>
  );
} */
