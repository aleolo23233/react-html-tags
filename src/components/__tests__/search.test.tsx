import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Search } from '../Search';

describe('Search', () => {
  test('renders search element', () => {
    const { container } = render(<Search>Test content</Search>);
    const element = container.querySelector('search');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Search ref={ref}>Test</Search>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('search');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Search className="test-class" id="test-id" data-testid="test">
        Content
      </Search>
    );
    const element = container.querySelector('search');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders search element', () => {
    const { container } = render(
      <Search>
        <input type="search" placeholder="Search..." />
        <button>Search</button>
      </Search>
    );
    const element = container.querySelector('search');
    const input = element?.querySelector('input');
    expect(input?.type).toBe('search');
  });
});
