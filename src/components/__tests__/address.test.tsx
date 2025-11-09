import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Address } from '../Address';

describe('Address', () => {
  test('renders address element', () => {
    const { container } = render(<Address>Test content</Address>);
    const element = container.querySelector('address');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Address ref={ref}>Test</Address>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('address');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Address className="test-class" id="test-id" data-testid="test">
        Content
      </Address>
    );
    const element = container.querySelector('address');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders address with contact information', () => {
    const { container } = render(
      <Address>
        123 Main St<br />
        City, State 12345<br />
        <a href="mailto:info@example.com">info@example.com</a>
      </Address>
    );
    const element = container.querySelector('address');
    const link = element?.querySelector('a');
    expect(link?.href).toBe('mailto:info@example.com');
  });
});
