import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {Header, SmallButton} from '~components';
import {colors, fonts} from '~utils';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProjectLaunch = () => {
  return (
    <View style={styles.container}>
      <Header centerText="Floata" />
      <View style={styles.textContainer}>
        <Text style={[fonts.itemTitle, styles.title]}>
          Your project is launched & ready to go!
        </Text>
        <Text style={[fonts.caption, styles.description]}>
          We can't wait to see what you accomplish, let's better our communities
          together!
        </Text>
        <SmallButton
          title="View project"
          backgroundColor={colors.SECONDARY}
          onPress={() => console.log('view')}
        />
      </View>

      <View style={styles.shareContainer}>
        <Text style={[fonts.itemTitle, styles.title]}>Share your project</Text>
        <Text style={[fonts.caption, styles.shareDescription]}>
          Widen your impact and share with your friends!
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.iconContainer}>
          <Icon name="facebook-official" size={25} color={colors.PRIMARY} />
          <Icon name="twitter" size={25} color={colors.PRIMARY} />
          <Icon name="instagram" size={25} color={colors.PRIMARY} />
          <Icon name="linkedin" size={25} color={colors.PRIMARY} />
          <Icon name="envelope-o" size={25} color={colors.PRIMARY} />
        </View>
      </View>
    </View>
  );
};

export default ProjectLaunch;
