import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import {fonts} from '~utils';
import styles from './styles';

interface Props {
  unread?: boolean;
}

const MessageRow = ({unread}: Props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require('~assets/images/3.jpg')}
          style={[styles.image, unread && styles.unreadStyle]}
        />
        <View style={styles.detailsContainer}>
          <Text style={[fonts.body, styles.name]}>Samantha Chan</Text>
          <Text numberOfLines={1} style={[fonts.caption, styles.messageBody]}>
            You: Hello, thanks for supporting my project
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Text>4 hrr</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
    </TouchableOpacity>
  );
};

export default MessageRow;
