/* import * as React from 'react';
import {
  cleanup,
  render,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {SetOptions} from '../src/screens';
import {NavigationContainer} from '@react-navigation/native';

describe('Testing set options screen and navigation', () => {
  afterEach(cleanup);

  test('Continue button navigates to next page', async () => {
    const component = (
      <NavigationContainer>
        <SetOptions />
      </NavigationContainer>
    );
    const onPress = jest.fn();
    const nextPageHeader = 'Welcome to Floatmeeeee';

    const {getByText, findByText, getByTestId, getByDisplayValue} =
      render(component);

    const continueButton = await getByText('Continue');

    fireEvent.press(continueButton);
    await waitFor(() => {
      expect(nextPageHeader).toBeTruthy();
    });
  });
});
 */
