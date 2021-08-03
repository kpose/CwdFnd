import 'react-native';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Signup} from '../src/screens';

describe('<SignupScreen/>', () => {
  it('Expect to show password required', async () => {
    const email = 'user@mail.com';

    const {getByTestId} = render(<Signup />);

    const emailInput = getByTestId('emailInputField');
    const button = getByTestId('signupButton');

    await waitFor(() => {
      fireEvent.changeText(emailInput, email);
      expect(emailInput.props.value).toBe(email);
      fireEvent.press(button);

      expect(getByTestId('passwordErrorId')).toBeDefined();
    });
  });

  it('Expect to call handle submit with name, email and password', async () => {
    const name = 'new user';
    const email = 'user@mail.com';
    const password = 'A123456789e@@';

    //expected output
    const expectedOutput = {
      name,
      email,
      password,
    };
    let output = {};

    //mock onsubmit
    const onSubmit = jest.fn(data => (output = data));

    const {getByTestId} = render(<Signup onSubmit={onSubmit} />);

    const emailInput = getByTestId('emailInputField');
    const passwordInput = getByTestId('passwordInputField');
    const nameInput = getByTestId('firstnameInputField');
    const button = getByTestId('signupButton');

    await waitFor(() => {
      fireEvent.changeText(emailInput, email);
      expect(emailInput.props.value).toBe(email);

      fireEvent.changeText(nameInput, name);
      expect(nameInput.props.value).toBe(name);

      fireEvent.changeText(passwordInput, password);
      expect(passwordInput.props.value).toBe(password);

      fireEvent.press(button);
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(output).toEqual(expectedOutput);

      expect(getByTestId('passwordErrorId')).toBeDefined();
    });
  });
});
