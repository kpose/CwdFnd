import React, {useState} from 'react';
import {View, ScrollView, TextInput} from 'react-native';
import {Text} from 'react-native-paper';
import {Header, SmallButton} from '~components';
import {colors, fonts} from '~utils';
import styles from './styles';
import {AddProjectProps} from '~types/NavigationTypes';

const Step2 = ({navigation}: AddProjectProps) => {
  const [isMilestone, setIsMilestone] = useState(false);
  return (
    <View>
      <Header
        centerText="Start a Project"
        leftText="Back"
        rightText="Cancel"
        onRightPress={() => navigation.navigate('Home')}
        onLeftPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={[fonts.itemTitle]}>Step 2 of 2</Text>
          <Text style={[fonts.itemTitle, styles.titleDescription]}>
            Let's break this down
          </Text>
          <Text style={[fonts.caption, styles.goal]}>Your target goal</Text>
        </View>
        <View style={styles.amountContainer}>
          <TextInput
            style={[styles.txt, fonts.body]}
            placeholder="Enter amount"
            placeholderTextColor={colors.LIGHT_GRAY}
          />
        </View>
        <View style={styles.milestoneContainer}>
          <Text style={[fonts.itemTitle, styles.titleDescription]}>
            Set milestones
          </Text>
          <Text style={styles.milestone}>
            Break your project down by step, this will engage your funders and
            allow them to go on this journey with you{' '}
          </Text>

          {!isMilestone && (
            <SmallButton
              title="Add a milestone"
              backgroundColor={colors.SECONDARY}
              onPress={() => setIsMilestone(true)}
            />
          )}

          {isMilestone && (
            <View style={styles.addMilestone}>
              <Text style={[fonts.caption, styles.milestoneAmount]}>
                Amount
              </Text>
              <TextInput
                style={[styles.txt, fonts.body]}
                placeholder="Enter amount"
              />

              <Text style={[fonts.caption, styles.describe]}>
                Describe this milestone
              </Text>
              <TextInput
                style={[styles.txtDesc, fonts.body]}
                placeholder="Describe this milestone"
              />
              <Text style={[styles.desc, fonts.caption]}>
                In 75 characters or less
              </Text>

              <SmallButton
                title="Add another milestone "
                onPress={() => console.log('klklk')}
              />
            </View>
          )}
        </View>

        <View style={styles.bottomBottons}>
          <SmallButton
            title="Preview project"
            backgroundColor={colors.LIGHT_GRAY}
            onPress={() => navigation.navigate('PreviewProject')}
          />
          <SmallButton
            title="Launch project"
            onPress={() => navigation.navigate('ProjectLaunch')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Step2;
