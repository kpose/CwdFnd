import React from 'react';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {Header} from '~components';
import SuggestedRowItem from './SuggestedRowItem';
import {fonts} from '~utils';
import styles from './styles';
import {MessageStackProps} from '~types/NavigationTypes';

const InboxSuggested = ({navigation}: MessageStackProps) => {
  return (
    <View style={styles.container}>
      <Header
        leftText="Back"
        centerText="Inbox"
        onLeftPress={() => navigation.goBack()}
      />

      <View style={styles.innerContainer}>
        <View style={styles.composeContainer}>
          <Text style={[fonts.itemTitle, styles.title]}>Compose a message</Text>
          <TextInput
            mode="outlined"
            placeholder="Search..."
            style={[styles.input, fonts.textInput]}
          />
        </View>

        <View style={styles.suggestedContainer}>
          <Text style={[fonts.caption, {fontWeight: 'bold'}]}>Suggested</Text>
          <View style={styles.suggestedRow}>
            <SuggestedRowItem />
            <SuggestedRowItem />
            <SuggestedRowItem />
          </View>
        </View>
      </View>
    </View>
  );
};

export default InboxSuggested;
