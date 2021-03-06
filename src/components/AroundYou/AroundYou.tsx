import React from 'react';
import {View, StyleSheet} from 'react-native';
import data from '~assets/data/data';
import ProjectCard from '~components/ProjectCard/ProjectCard';

const AroundYou = () => {
  return (
    <View style={styles.container}>
      {data.map(item => (
        <ProjectCard
          image={item.image}
          title={item.title}
          key={item.id}
          onPress={() => console.log('kkkkk')}
        />
      ))}
    </View>
  );
};

export default AroundYou;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
