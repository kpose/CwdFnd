import React from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import {Text} from 'react-native-paper';
import {fonts, colors, wp, hp, regularIconSize} from '~utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface Props {
  item: {
    category: string;
    title: string;
    daysLeft: string;
    body: string;
    location: string;
    ProjectOwner: string;
  };
  navigation: any;
}

const BackgroundImage = ({item, navigation}: Props) => {
  console.log(item);
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/2.jpg')}
        style={styles.image}
        imageStyle={{borderRadius: wp(10)}}>
        <SafeAreaView style={styles.banner}>
          <Pressable style={styles.navIcon} onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-left"
              size={regularIconSize}
              color={colors.PRIMARY}
            />
          </Pressable>
          <Text style={[fonts.title]}>FloatMe</Text>
          <View />
        </SafeAreaView>

        <View style={styles.titleContainer}>
          <View style={styles.categoryContainer}>
            <Text style={[fonts.caption, {color: colors.WHITE}]}>
              {item.category}
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
              {item.title}
            </Text>
            <Text
              style={[
                fonts.caption,
                {color: colors.WARNING, fontWeight: 'bold'},
              ]}>
              {item.daysLeft} days left
            </Text>
          </View>
          <Text numberOfLines={3} style={[fonts.body, {color: colors.WHITE}]}>
            {item.body}
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
            {item.location}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/1.jpg')}
            style={styles.avatar}
          />
          <Text style={[fonts.caption]}>By {item.ProjectOwner}</Text>
        </View>
      </View>
    </>
  );
};

export default BackgroundImage;
