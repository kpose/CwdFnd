import React, {useCallback} from 'react';
import {View, Pressable, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {fonts} from '~utils';
import styles from './styles';
import ProjectCard from '~components/ProjectCard/ProjectCard';

/* type DataProps = {
    image: string;
    title: string;
    id: string | number;
    onPress : () => void
} */

interface Props {
  title: string;
  data: any;
}

const ExploreProjectContent = ({title, data}: Props) => {
  const renderItem = useCallback(
    ({item}) => (
      <ProjectCard
        image={item.image}
        title={item.title}
        key={item.id}
        onPress={() => console.log('kkkkk')}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[fonts.itemTitle]}>{title}</Text>
        <Pressable>
          <Text style={[fonts.caption, styles.seemore]}>See more</Text>
        </Pressable>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExploreProjectContent;
