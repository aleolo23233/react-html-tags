import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select } from '../Select';

describe('Select', () => {
  test('renders select element', () => {
    const { container } = render(
      <Select>
        <option value="1">Option 1</option>
      </Select>
    );
    const element = container.querySelector('select');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Select ref={ref}><option value="1">Test</option></Select>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('select');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Select className="test-class" id="test-id" data-testid="test">
        <option value="1">Content</option>
      </Select>
    );
    const element = container.querySelector('select');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders select with multiple options', () => {
    const { container } = render(
      <Select>
        <option value="usa">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </Select>
    );
    const element = container.querySelector('select') as HTMLSelectElement;
    const options = element.querySelectorAll('option');
    expect(options.length).toBe(3);
    expect(options[0].value).toBe('usa');
    expect(options[1].textContent).toBe('United Kingdom');
  });

  test('renders select with selected value', () => {
    const { container } = render(
      <Select value="uk" readOnly>
        <option value="usa">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </Select>
    );
    const element = container.querySelector('select') as HTMLSelectElement;
    expect(element?.value).toBe('uk');
  });

  test('handles onChange event', () => {
    let selectedValue = '';
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      selectedValue = e.target.value;
    };
    const { container } = render(
      <Select onChange={handleChange}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );
    const element = container.querySelector('select') as HTMLSelectElement;
    fireEvent.change(element, { target: { value: '2' } });
    expect(selectedValue).toBe('2');
  });

  test('renders required select', () => {
    const { container } = render(
      <Select required>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
      </Select>
    );
    const element = container.querySelector('select') as HTMLSelectElement;
    expect(element?.required).toBe(true);
  });

  test('renders disabled select', () => {
    const { container } = render(
      <Select disabled>
        <option value="1">Option 1</option>
      </Select>
    );
    const element = container.querySelector('select') as HTMLSelectElement;
    expect(element?.disabled).toBe(true);
  });

  test('renders multiple select', () => {
    const { container } = render(
      <Select multiple>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    );
    const element = container.querySelector('select') as HTMLSelectElement;
    expect(element?.multiple).toBe(true);
  });

  test('renders select with size attribute', () => {
    const { container } = render(
      <Select size={3}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    );
    const element = container.querySelector('select') as HTMLSelectElement;
    expect(element?.size).toBe(3);
  });

  test('renders select with name attribute', () => {
    const { container } = render(
      <Select name="country">
        <option value="usa">United States</option>
      </Select>
    );
    const element = container.querySelector('select') as HTMLSelectElement;
    expect(element?.name).toBe('country');
  });

  test('renders select with aria-label', () => {
    const { container } = render(
      <Select aria-label="Choose your country">
        <option value="usa">United States</option>
      </Select>
    );
    const element = container.querySelector('select') as HTMLSelectElement;
    expect(element?.getAttribute('aria-label')).toBe('Choose your country');
  });
});
