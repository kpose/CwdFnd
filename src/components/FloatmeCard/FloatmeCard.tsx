import React from 'react';
import {View, Pressable, Image} from 'react-native';
import styles from './styles';
import {Divider, Text, Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {colors, fonts, regularIconSize, wp} from '~utils';

const FloatmeCard = () => {
  return (
    <Surface style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <Pressable style={styles.profileImage} />
            <View style={{marginLeft: wp(3), justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="home"
                  color={colors.SECONDARY}
                  size={regularIconSize}
                />
                <Text style={[fonts.caption, {marginLeft: wp(1)}]}>
                  Kpose Richard
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="home"
                  color={colors.SECONDARY}
                  size={regularIconSize}
                />
                <Text style={[fonts.caption, {marginLeft: wp(1)}]}>
                  Kpose Richard
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Feather
              style={{marginRight: wp(3)}}
              name="user-check"
              color={colors.SECONDARY}
              size={regularIconSize}
            />
            <Icon
              name="ellipsis1"
              color={colors.SECONDARY}
              size={regularIconSize}
            />
          </View>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.titleContainer}>
        <Text style={[fonts.subheading]}>
          Support for humanitarian add in Malayshia
        </Text>
        <Icon name="right" color={colors.SECONDARY} size={regularIconSize} />
      </View>
      <View>
        <Image
          source={require('~assets/images/Gmail.jpg')}
          style={styles.image}
        />
        <Text numberOfLines={1} style={[fonts.body, styles.description]}>
          Support for humanitarian add in Malayshia
        </Text>
        <Pressable style={styles.currencyImage} />
      </View>
      <View style={styles.amountContainer}>
        <Feather
          name="message-square"
          color={colors.SECONDARY}
          size={regularIconSize}
        />
        <Text>Support amount: 50,000</Text>
      </View>
    </Surface>
  );
};

export default FloatmeCard;
/* 
<Pressable style={styles.currencyImage} />; */
