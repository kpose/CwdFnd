import React, {useState} from 'react';
import {View, ScrollView, Pressable, StyleSheet} from 'react-native';
import styles from './styles';
import {Text, TextInput, Surface} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {Header, SmallButton} from '~components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, fonts, hp, wp} from '~utils';
import {AddProjectProps} from '~types/NavigationTypes';

const location = [
  {
    label: 'Football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
  },
];

const projectcategory = [
  {
    label: 'Football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
  },
];

const AddProject = ({navigation}: AddProjectProps) => {
  const [category, setCategory] = useState('');
  const locationPlaceholder = {
    label: 'Select a location',
    value: null,
    color: colors.LIGHT_GRAY,
  };
  const categoryPlaceholder = {
    label: 'Select a category',
    value: null,
    color: colors.LIGHT_GRAY,
  };
  return (
    <View style={styles.container}>
      <Header
        centerText="Start a Project"
        rightText="Cancel"
        leftText="close"
        onRightPress={() => navigation.navigate('Home')}
      />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={[fonts.itemTitle, styles.step]}>Step 1 of 2</Text>
          <Text style={[fonts.caption, styles.description]}>
            Create a name for your project
          </Text>
          <TextInput style={styles.input} />
          <Text style={[fonts.caption, styles.description2]}>
            Tip: Titles should be eye-catching and describe your project
          </Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={[fonts.caption, styles.step]}>Add a description</Text>
          <TextInput style={styles.descriptionInput} />
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.pickerRow}>
            <Text style={[fonts.caption]}>Project category</Text>
            <RNPickerSelect
              placeholder={categoryPlaceholder}
              items={projectcategory}
              onValueChange={language => setCategory(language)}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              value={category}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return (
                  <Icon name="chevron-down" size={20} color={colors.PRIMARY} />
                );
              }}
            />
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.pickerRow}>
            <Text style={[fonts.caption]}>Location</Text>
            <RNPickerSelect
              placeholder={locationPlaceholder}
              items={location}
              onValueChange={language => setCategory(language)}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              value={category}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return (
                  <Icon
                    name="location-arrow"
                    size={20}
                    color={colors.PRIMARY}
                  />
                );
              }}
            />
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Text style={[fonts.caption, styles.upload]}>
            Upload a cover photo
          </Text>
          <Pressable>
            <Surface style={styles.picker}>
              <Icon name="camera-retro" size={40} color={colors.LIGHT_GRAY} />
            </Surface>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <SmallButton
            title="Next >"
            onPress={() => navigation.navigate('Step2')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddProject;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    height: hp(5),
    borderRadius: 10,
    color: colors.PRIMARY,
    paddingRight: wp(15),
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
