import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import LoginForm from '../Login';

describe('<LoginForm />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('clicking the send button', () => {
    let sendHandler;
    beforeEach(() => {
        sendHandler = jest.fn();
        ({ getByTestId } = render(<LoginForm onSend={sendHandler} />));

      fireEvent.change(
        getByTestId('nameText'),
        {
          target: {
            value: 'New message',
          },
        },
      );

      fireEvent.click(getByTestId('sendButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('nameText').value).toEqual('');
    });

    it('calls the send handler', () => {
        expect(sendHandler).toHaveBeenCalledWith('New message');
    });
  });
});
