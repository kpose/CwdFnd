import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  MaterialBottomTabNavigationProp,
  MaterialBottomTabScreenProps,
} from '@react-navigation/material-bottom-tabs';

/* Param lists */
export type WelcomeStackParamList = {
  OnBoarding: undefined;
  Signin: undefined;
  Signup: undefined;
  BottomTabs: undefined;
  EnterNumber: undefined;
  EnterEmail: undefined;
  EnterOTP: undefined;
  SetPassword: undefined;
  SetOptions: undefined;
  SetName: undefined;
  SetCategories: undefined;
};
export type HomeBottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  Project: undefined;
  Notifications: undefined;
  Profile: undefined;
};

/* Navigation params */
type WelcomeStackRouteProp = NativeStackScreenProps<
  WelcomeStackParamList,
  'OnBoarding'
>;
type HomeBottomTabRouteProp = MaterialBottomTabScreenProps<
  HomeBottomTabParamList,
  'Home'
>;

/* Route params */
type WelcomeStackNavigationProp = NativeStackNavigationProp<
  WelcomeStackParamList,
  'OnBoarding'
>;
type HomeBottomTabNavigationProp = MaterialBottomTabNavigationProp<
  HomeBottomTabParamList,
  'Home'
>;

/* Props */
export type WelcomeStackProps = {
  navigation: WelcomeStackNavigationProp;
  route: WelcomeStackRouteProp;
};

export type HomeBottomTabProps = {
  navigation: HomeBottomTabNavigationProp;
  route: HomeBottomTabRouteProp;
};
