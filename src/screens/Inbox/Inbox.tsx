import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import {Header, MessageRow} from '~components';
import {fonts} from '~utils';
import {MessageStackProps} from '~types/NavigationTypes';

const Inbox = ({navigation}: MessageStackProps) => {
  return (
    <View style={styles.container}>
      <Header
        leftText="Back"
        centerText="Inbox"
        rightIcon="pencil"
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => navigation.navigate('InboxSuggested')}
      />

      <View style={styles.innerContainer}>
        <Text style={[fonts.itemTitle, styles.headerTitle]}>Today</Text>
        <MessageRow unread={true} />
        <MessageRow />
        <MessageRow />
      </View>

      <View style={styles.innerContainer}>
        <Text style={[fonts.itemTitle, styles.headerTitle]}>Yesterday</Text>
        <MessageRow unread={true} />
      </View>
    </View>
  );
};

export default Inbox;
