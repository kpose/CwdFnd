import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDarkTheme, CombinedLightTheme} from './src/utils';
import {name as appName} from './app.json';
import App from './src/App';

export default function Main() {
  return <App />;
}

AppRegistry.registerComponent(appName, () => Main);
