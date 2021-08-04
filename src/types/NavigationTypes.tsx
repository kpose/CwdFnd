import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from 'react-native-screens/native-stack';

export type WelcomeStackParamList = {
  OnBoarding: undefined;
  Signin: undefined;
  Signup: undefined;
  Home: undefined;
  LinkBank: undefined;
};

type WelcomeStackRouteProp = NativeStackScreenProps<
  WelcomeStackParamList,
  'OnBoarding'
>;

type WelcomeStackNavigationProp = NativeStackNavigationProp<
  WelcomeStackParamList,
  'OnBoarding'
>;

export type WelcomeStackProps = {
  navigation: WelcomeStackNavigationProp;
  route: WelcomeStackRouteProp;
};
