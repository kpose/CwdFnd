import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {
  MaterialBottomTabNavigationProp,
  MaterialBottomTabScreenProps,
} from '@react-navigation/material-bottom-tabs';

/* Param lists */
export type WelcomeStackParamList = {
  OnBoarding: undefined;
  Signin: undefined;
  Signup: undefined;
  HomeStack: undefined;
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

export type HomeStackParamList = {
  BottomTabs: undefined;
  ProjectDetails: {item: {}};
};

/* Navigation params */
type WelcomeStackRouteProp = RouteProp<WelcomeStackParamList, 'OnBoarding'>;

type HomeBottomTabRouteProp = MaterialBottomTabScreenProps<
  HomeBottomTabParamList,
  'Home'
>;
type HomeStackRouteProp = RouteProp<HomeStackParamList, 'BottomTabs'>;

/* Route params */
type WelcomeStackNavigationProp = NativeStackNavigationProp<
  WelcomeStackParamList,
  'OnBoarding'
>;
type HomeBottomTabNavigationProp = MaterialBottomTabNavigationProp<
  HomeBottomTabParamList,
  'Home'
>;
type HomeStackNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'BottomTabs'
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

export type HomeStackProps = {
  navigation: HomeStackNavigationProp;
  route: HomeStackRouteProp;
};
