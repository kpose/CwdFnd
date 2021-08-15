import React from 'react';
import {View, Image, Pressable} from 'react-native';
import {Text, Divider, Surface} from 'react-native-paper';
import {fonts, hp} from '~utils';
import styles from './styles';

interface Props {
  title: string;
  image: string;
  onPress: () => void;
}

const ProjectCard = ({title, image, onPress}: Props) => {
  console.log(image);
  return (
    <Pressable onPress={onPress}>
      <Surface style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text numberOfLines={2} style={[fonts.caption, styles.title]}>
          {title}
        </Text>
        <Divider style={styles.divider} />
        <Text style={[fonts.caption, {marginBottom: hp(1)}]}>500 of 20000</Text>
      </Surface>
    </Pressable>
  );
};

export default ProjectCard;
