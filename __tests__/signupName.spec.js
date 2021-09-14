import * as React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import {SetName} from '../src/screens';

describe('Testing set name screen', () => {
  afterEach(cleanup);

  test('it accepts at least two names', async () => {
    const component = <SetName />;
    const name = 'jane doe';

    /* regex don't match yet, fix match */

    const nameRegex = /[a-zA-Z]+\s+[a-zA-Z](?=.{1,})+/g;
    const regex =
      /^$|^[a-zA-ZčČćĆđĐšŠžŽ-]+ [a-zA-ZčČćĆđĐšŠžŽ-]+( [a-zA-ZčČćĆđĐšŠžŽ-]+)?$/;

    /* query and match */
    const {findByPlaceholderText} = render(component);
    const nameField = await findByPlaceholderText('Fullname');

    fireEvent.changeText(nameField, name);
    expect(nameField.props.value).toMatch(regex);
  });
});
