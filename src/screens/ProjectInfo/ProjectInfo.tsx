import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import {PreviewProjectHeader} from '~components';
import SupportContainer from './SupportContainer';
import {fonts} from '~utils';
import {OptionsModal} from '~modals';
import {AddProjectProps} from '~types/NavigationTypes';

const ProjectInfo = ({navigation}: AddProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOptionsPress = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onEditPress = () => {
    setIsModalOpen(false);
    navigation.navigate('EditProject');
  };
  const onUpdatePress = () => {
    setIsModalOpen(false);
    navigation.navigate('UpdateProject');
  };
  return (
    <View style={styles.container}>
      <PreviewProjectHeader
        rightIcon="home"
        onRightPress={onOptionsPress}
        navigation={navigation}
      />
      <SupportContainer />
      <Text style={fonts.title}>ADD TAB NAVIGATOR</Text>
      <OptionsModal
        visible={isModalOpen}
        onDismis={() => setIsModalOpen(false)}
        first="Edit"
        second="Update"
        third="Share"
        fourth="Archive"
        onFirstPress={onEditPress}
        onSecondPress={onUpdatePress}
        onThirdPress={() => console.log('lololo')}
        onFourthPress={() => console.log('lololo')}
        onCancelPress={() => console.log('lololo')}
      />
    </View>
  );
};

export default ProjectInfo;
