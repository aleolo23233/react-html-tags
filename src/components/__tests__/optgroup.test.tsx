import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Optgroup } from '../Optgroup';

describe('Optgroup', () => {
  test('renders optgroup element', () => {
    const { container } = render(<Optgroup>Test content</Optgroup>);
    const element = container.querySelector('optgroup');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Optgroup ref={ref}>Test</Optgroup>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('optgroup');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Optgroup className="test-class" id="test-id" data-testid="test">
        Content
      </Optgroup>
    );
    const element = container.querySelector('optgroup');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders optgroup with label', () => {
    const { container } = render(
      <Optgroup label="North America">
        <option value="usa">USA</option>
        <option value="ca">Canada</option>
      </Optgroup>
    );
    const element = container.querySelector('optgroup') as HTMLOptGroupElement;
    expect(element?.label).toBe('North America');
    const options = element?.querySelectorAll('option');
    expect(options?.length).toBe(2);
  });

  test('renders disabled optgroup', () => {
    const { container } = render(<Optgroup label="Unavailable" disabled><option value="1">Option</option></Optgroup>);
    const element = container.querySelector('optgroup') as HTMLOptGroupElement;
    expect(element?.disabled).toBe(true);
  });
});
