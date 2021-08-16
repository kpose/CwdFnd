import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import WelcomeStack from './navigation/WelcomeStack';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDarkTheme, CombinedLightTheme} from '../src/utils';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={CombinedLightTheme}>
        <PaperProvider theme={CombinedLightTheme}>
          <WelcomeStack />
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
