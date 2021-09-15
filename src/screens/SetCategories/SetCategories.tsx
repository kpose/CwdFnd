import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import {Text} from 'react-native-paper';
import {fonts, colors, hp} from '~utils';
import styles from './styles';
import {BigButton, CategoryButton} from '~components';
import LinearGradient from 'react-native-linear-gradient';
import {WelcomeStackProps} from '~types/NavigationTypes';
import {categories} from '~assets/data/categories';

const SetCategories = ({navigation}: WelcomeStackProps) => {
  const [color, setColor] = useState(colors.WHITE);

  let CategoriesArray: Array<string> = [];

  const addCategory = (item: string) => {
    CategoriesArray.push(item);
    setColor(colors.SECONDARY);
    console.log(CategoriesArray);
    console.log(CategoriesArray.length);
  };

  const renderItem = ({item}: any) => (
    <CategoryButton
      title={item}
      onPress={() => addCategory(item)}
      bgColor={color}
    />
  );

  return (
    <LinearGradient
      colors={[colors.PRIMARY, colors.PRIMARY, colors.PRIMARY_LIGHT]}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[fonts.title, {textAlign: 'center'}]}>
            Welcome to FloatMe
          </Text>
          <Text style={[fonts.caption, styles.description]}>
            Select at least 3 categories to personalize your homepage
          </Text>
        </View>

        <View style={styles.categoryContainer}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.bottomContainer}>
          <BigButton
            title="Next"
            onPress={() => navigation.navigate('HomeStack')}
            /* disabled={CategoriesArray.length <= 3 ? true : false} */
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SetCategories;
