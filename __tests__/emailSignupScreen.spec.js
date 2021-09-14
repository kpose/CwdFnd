import * as React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';
import {EnterEmail} from '../src/screens';

describe('Testing Email Signup Screen', () => {
  afterEach(cleanup);

  test('Must require a valid email', async () => {
    const component = <EnterEmail />;
    const email = 'user@mail.com';
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {getByPlaceholderText, getByText, getByTestId} = render(component);

    const emailField = await getByPlaceholderText('Email address');
    const confirmButton = await getByTestId('confirmButton');

    fireEvent.changeText(emailField, email);
    fireEvent.press(confirmButton);

    await waitFor(() => {
      expect(emailField.props.value).toMatch(emailRegex);
    });
  });

  /* test('Shows error message when wrong email is inserted', async () => {
    const component = <EnterEmail />;
    const email = 'user.mail.com';
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {getByPlaceholderText, getByText, getByTestId, findByText} =
      render(component);

    const emailField = await getByPlaceholderText('Email address');
    const confirmButton = await getByTestId('confirmButton');
    const errorMessage = await getByText('errorText');

    fireEvent.changeText(emailField, email);
    fireEvent.press(confirmButton);

    await waitFor(() => {
      expect(errorMessage).toBeTruthy();
    });
  }); */
});
