import React, {useState, useEffect, useCallback} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';
import {Header} from '~components';
import {MessageStackProps} from '~types/NavigationTypes';
import {GiftedChat} from 'react-native-gifted-chat';

const MessageConversation = ({navigation}: MessageStackProps) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Header
        centerText="Message"
        leftText="Back"
        onLeftPress={() => navigation.goBack()}
      />

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default MessageConversation;
