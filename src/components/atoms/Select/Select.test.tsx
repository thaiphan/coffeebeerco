import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Select } from './Select';

describe('component', () => {
  test('renders options', () => {
    const mockHandleChange = jest.fn();

    render(
      <Select
        value="Dog"
        onChange={mockHandleChange}
        options={[
          {
            value: 'Dog',
            label: 'Dog',
          },
          {
            value: 'Human',
            label: 'John Smith',
          },
          {
            value: 'Cat',
            label: 'Cat',
          },
        ]}
      />
    );

    userEvent.click(
      screen.getByRole('button', {
        name: /dog/i,
      })
    );

    userEvent.click(
      screen.getByRole('option', {
        name: /john smith/i,
      })
    );

    expect(mockHandleChange).toHaveBeenCalledWith('Human');
  });
});
