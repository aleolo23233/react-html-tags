import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Menu } from '../Menu';

describe('Menu', () => {
  test('renders menu element', () => {
    const { container } = render(<Menu>Test content</Menu>);
    const element = container.querySelector('menu');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Menu ref={ref}>Test</Menu>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('menu');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Menu className="test-class" id="test-id" data-testid="test">
        Content
      </Menu>
    );
    const element = container.querySelector('menu');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders menu with items', () => {
    const { container } = render(
      <Menu>
        <li><button>File</button></li>
        <li><button>Edit</button></li>
      </Menu>
    );
    const element = container.querySelector('menu');
    const items = element?.querySelectorAll('li');
    expect(items?.length).toBe(2);
  });
});
