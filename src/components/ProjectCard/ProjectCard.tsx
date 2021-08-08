import React from 'react';
import {View, Image} from 'react-native';
import {Text, Divider, Surface} from 'react-native-paper';
import {fonts, hp} from '~utils';
import styles from './styles';

interface Props {
  title: string;
  image: string;
}

const ProjectCard = ({title, image}: Props) => {
  return (
    <Surface style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text numberOfLines={1} style={[fonts.subheading, styles.title]}>
        {title}
      </Text>
      <Divider style={styles.divider} />
      <Text style={[fonts.caption, {marginBottom: hp(1)}]}>500 of 20000</Text>
    </Surface>
  );
};

export default ProjectCard;
