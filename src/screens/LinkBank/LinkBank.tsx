import React, {useState} from 'react';
import {View, SafeAreaView, Pressable} from 'react-native';
import {Text, Button, Portal, Modal, Divider} from 'react-native-paper';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts, hp} from '~utils';
import {LinkBankModal} from '~modals';
import {WelcomeStackProps} from '~types/NavigationTypes';

const LinkBank = ({navigation}: WelcomeStackProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const hideModal = () => setIsModalVisible(false);

  const onYesPress = () => {
    navigation.navigate('BottomTabs');
    hideModal();
  };

  return (
    <LinearGradient
      colors={[colors.PRIMARY, colors.PRIMARY, colors.PRIMARY_LIGHT]}
      style={styles.linearGradient}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.titleContainer}>
          <Text style={[fonts.title, styles.title]}>Link Your Bank</Text>
        </View>
        <Pressable
          style={styles.skipButton}
          onPress={() => setIsModalVisible(true)}>
          <Text style={fonts.caption}>Skip</Text>
        </Pressable>

        <LinkBankModal
          visible={isModalVisible}
          onDismis={hideModal}
          onYesPress={onYesPress}
        />

        <Text style={[fonts.caption, styles.description]}>
          Floatme links your bank account so you can give in the most cost
          effective and secure way.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            // onPress= {() => navigation.navigate('BottomTabs')}
            style={styles.button}
            mode="contained"
            loading={false}
            uppercase={false}>
            <Text style={[fonts.body, {color: colors.PRIMARY}]}>
              Link Your Bank
            </Text>
          </Button>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LinkBank;
