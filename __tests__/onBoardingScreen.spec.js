import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

import WelcomeStack from '../src/navigation/WelcomeStack';

describe('Interaction test of onboarding page', () => {
  afterEach(cleanup);
  test('page contains login and signup buttons', async () => {
    const component = (
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    );
    const {getByText} = render(component);
    const login = await getByText('Log in');
    const signup = await getByText('Sign up');

    expect(login).toBeTruthy();
    expect(signup).toBeTruthy();
  });

  test('open signup screen on button press', async () => {
    const component = (
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    );

    const {getByText, getByTestId} = render(component);
    const signupButton = await getByText('Sign up');

    fireEvent.press(signupButton);
    const signupScreenTitle = await getByText('Sign up to get started');
    const mobileNumber = await getByTestId('mobileNumber');
    const email = await getByTestId('email');

    expect(signupScreenTitle).toBeTruthy();
    expect(mobileNumber).toBeTruthy();
    expect(email).toBeTruthy();
  });

  test('open signin screen on button press', async () => {
    const component = (
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    );

    const {getByText} = render(component);
    const signinButton = await getByText('Log in');

    fireEvent.press(signinButton);
    const signinScreenTitle = await getByText('Welcome Back,');

    expect(signinScreenTitle).toBeTruthy();
  });
});
