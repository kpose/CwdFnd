import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {Header, SmallButton} from '~components';
import {colors, fonts} from '~utils';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Step2 = () => {
  return (
    <View>
      <Header centerText="Start a Project" leftText="Back" rightText="Cancel" />
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
            style={styles.textInput}
            left={<TextInput.Icon name="home" />}
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
          <SmallButton
            title="Add a milestone"
            backgroundColor={colors.SECONDARY}
            onPress={() => console.log('milestone')}
          />
        </View>

        <View style={styles.bottomBottons}>
          <SmallButton
            title="Preview project"
            backgroundColor={colors.LIGHT_GRAY}
            onPress={() => console.log('milestone')}
          />
          <SmallButton
            title="Launch project"
            onPress={() => console.log('milestone')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Step2;
