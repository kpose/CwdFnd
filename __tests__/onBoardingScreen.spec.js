import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, fireEvent} from '@testing-library/react-native';

import WelcomeStack from '../src/navigation/WelcomeStack';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/LogBox/LogBox');

describe('Interaction test of onboarding page', () => {
  test('page contains login and signup buttons', async () => {
    const component = (
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    );
    const {findByText} = render(component);
    const login = await findByText('Log in');
    const signup = await findByText('Sign up');

    expect(login).toBeTruthy();
    expect(signup).toBeTruthy();
  });

  test('open login and signup screens on button press', async () => {
    const component = (
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    );

    const {findByText} = render(component);

    const loginButton = await findByText('Log in');
    fireEvent(loginButton, 'press');
    const loignScreen = await findByText('Welcome Back,');

    expect(loignScreen).toBeTruthy();
  });
});
