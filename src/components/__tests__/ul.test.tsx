import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Ul } from '../Ul';

describe('Ul', () => {
  test('renders ul element', () => {
    const { container } = render(<Ul>Test content</Ul>);
    const element = container.querySelector('ul');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Ul ref={ref}>Test</Ul>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('ul');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Ul className="test-class" id="test-id" data-testid="test">
        Content
      </Ul>
    );
    const element = container.querySelector('ul');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders ul with list items', () => {
    const { container } = render(
      <Ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </Ul>
    );
    const element = container.querySelector('ul');
    const items = element?.querySelectorAll('li');
    expect(items?.length).toBe(3);
  });
});
