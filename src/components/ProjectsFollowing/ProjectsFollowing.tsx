import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
//import data from '~assets/data/data';
import ProjectCard from '~components/ProjectCard/ProjectCard';
import {colors, fonts, hp} from '~utils';

type DataProps = {
  image: string;
  title: string;
  id: string;
};
interface Props {
  data?: DataProps;
}

const Follow = () => {
  return (
    <View style={styles.followingContainer}>
      <Pressable>
        <Text style={[fonts.caption, styles.following]}>
          Start following projects....
        </Text>
      </Pressable>
    </View>
  );
};

const ProjectsFollowing = ({data}: Props) => {
  return (
    <View style={styles.container}>
      {data ? (
        data.map(item => (
          <ProjectCard
            image={item.image}
            title={item.title}
            key={item.id}
            onPress={() => console.log('kkkkk')}
          />
        ))
      ) : (
        <Follow />
      )}
    </View>
  );
};

export default ProjectsFollowing;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  followingContainer: {
    marginTop: hp(4),
    marginBottom: hp(3),
  },
  following: {
    color: colors.SECONDARY,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});
