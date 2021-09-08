import * as React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
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
    const loginButton = await getByTestId('loginButton');

    fireEvent.changeText(emailField, email);
    fireEvent.press(loginButton);

    expect(emailField.props.value).toMatch(emailRegex);
  });

  test('Password must contain upper, lower, number, special and at least 8 characters', async () => {
    const component = <Signin />;
    const password = 'Aaaaaa1@';
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const {getByTestId} = render(component);

    const passwordField = await getByTestId('passwordInputField');
    const loginButton = await getByTestId('loginButton');

    fireEvent.changeText(passwordField, password);
    fireEvent.press(loginButton);

    expect(passwordField.props.value).toMatch(passwordRegex);
  });
});
