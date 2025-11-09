import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Option } from '../Option';

describe('Option', () => {
  test('renders option element', () => {
    const { container } = render(<Option>Test content</Option>);
    const element = container.querySelector('option');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Option ref={ref}>Test</Option>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('option');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Option className="test-class" id="test-id" data-testid="test">
        Content
      </Option>
    );
    const element = container.querySelector('option');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders option with value', () => {
    const { container } = render(<Option value="usa">United States</Option>);
    const element = container.querySelector('option') as HTMLOptionElement;
    expect(element?.value).toBe('usa');
    expect(element?.textContent).toBe('United States');
  });

  test('renders selected option', () => {
    const { container } = render(<Option value="uk" selected>United Kingdom</Option>);
    const element = container.querySelector('option') as HTMLOptionElement;
    expect(element?.selected).toBe(true);
  });

  test('renders disabled option', () => {
    const { container } = render(<Option value="n/a" disabled>Not Available</Option>);
    const element = container.querySelector('option') as HTMLOptionElement;
    expect(element?.disabled).toBe(true);
  });
});
