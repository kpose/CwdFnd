import React from 'react';
import {View, FlatList} from 'react-native';
import data from '~assets/data/data';
import ProjectCard from '~components/ProjectCard/ProjectCard';

const AroundYou = () => {
  const renderItem = ({item}: any) => (
    <ProjectCard title={item.title} image={item.image} />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      // keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

export default AroundYou;
