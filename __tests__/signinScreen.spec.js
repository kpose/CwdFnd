import * as React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {Signin} from '../src/screens';

describe('Testing signin screen', () => {
  afterEach(cleanup);

  test('Must require a valid email', async () => {
    const component = <Signin />;
    const email = 'user@mail.com';
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {getByTestId} = render(component);

    const emailField = await getByTestId('emailInputField');

    fireEvent.changeText(emailField, email);

    await waitFor(() => {
      expect(emailField.props.value).toMatch(emailRegex);
    });
  });

  test('Password must contain upper, lower, number, special and at least 8 characters', async () => {
    const component = <Signin />;
    const password = 'Aaaaaa1@';
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const {getByTestId} = render(component);

    const passwordField = await getByTestId('passwordInputField');

    fireEvent.changeText(passwordField, password);

    await waitFor(() => {
      expect(passwordField.props.value).toMatch(passwordRegex);
    });
  });

  test('Display Email and Password error when nothing is entered', async () => {
    const component = <Signin />;
    const emailError = 'Enter a valid email';
    const passwordError = 'Please Enter your password';

    const {getByTestId, getByText} = render(component);
    const loginButton = await getByTestId('loginButton');

    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(getByText(emailError)).toBeTruthy();
      expect(getByText(passwordError)).toBeTruthy();
    });
  });
});
