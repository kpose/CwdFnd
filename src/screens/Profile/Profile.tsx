import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import {Header, SmallButton, ProfileRow} from '~components';
import {colors, fonts, wp} from '~utils';

const Profile = () => {
  return (
    <>
      <Header centerText="Account" />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View>
            <Image
              source={require('~assets/images/5.jpg')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={[fonts.body]}>Kpose Richard </Text>
            <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
              user1@mail.com
            </Text>
            <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
              Lives in Ontario, Canada
            </Text>
          </View>
        </View>

        <View style={styles.companyContainer}>
          <Text>My Companies</Text>
          <View style={styles.logoContainer}>
            <Image
              source={require('~assets/images/8.jpg')}
              style={styles.companyLogo}
            />
            <Image
              source={require('~assets/images/8.jpg')}
              style={styles.companyLogo}
            />
            <Image
              source={require('~assets/images/8.jpg')}
              style={styles.companyLogo}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <SmallButton
            onPress={() => console.log('lll')}
            title="Edit Account"
          />
          <SmallButton
            onPress={() => console.log('lll')}
            title="Change Password"
            backgroundColor={colors.LIGHT_GRAY}
          />
        </View>
        <ProfileRow />
      </View>
    </>
  );
};

export default Profile;
