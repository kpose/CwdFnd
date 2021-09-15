import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import {Header, MessageRow} from '~components';
import {fonts} from '~utils';

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Header leftText="Back" centerText="Inbox" rightIcon="pencil" />

      <View style={styles.innerContainer}>
        <Text style={[fonts.itemTitle, styles.headerTitle]}>Today</Text>
        <MessageRow unread={true} />
        <MessageRow />
        <MessageRow />
      </View>
    </View>
  );
};

export default Inbox;
