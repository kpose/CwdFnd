import * as React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';
import {SetPassword} from '../src/screens';
import {NavigationContainer} from '@react-navigation/native';

//jest.useFakeTimers();

describe('Testing password screen', () => {
  afterEach(cleanup);

  test('Password must contain upper, lower, number, special and at least 8 characters', async () => {
    const component = (
      <NavigationContainer>
        <SetPassword />
      </NavigationContainer>
    );
    const password = 'Aaaaaa1@';
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const {getByPlaceholderText, findByPlaceholderText, getByText} =
      render(component);

    const passwordField = await getByPlaceholderText('Password');
    const confirmButton = await getByText('Confirm');

    //password is in correct format
    fireEvent.changeText(passwordField, password);
    expect(passwordField.props.value).toMatch(passwordRegex);

    //navigates to fullname screen
    fireEvent.press(confirmButton);
    await waitFor(() => {
      expect(findByPlaceholderText('Fullname')).toBeTruthy();
    });
  });
});
