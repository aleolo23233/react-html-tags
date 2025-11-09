import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  test('renders header element', () => {
    const { container } = render(<Header>Test content</Header>);
    const element = container.querySelector('header');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Header ref={ref}>Test</Header>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('header');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Header className="test-class" id="test-id" data-testid="test">
        Content
      </Header>
    );
    const element = container.querySelector('header');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders header with navigation', () => {
    const { container } = render(
      <Header>
        <h1>Site Title</h1>
        <nav>Navigation</nav>
      </Header>
    );
    const element = container.querySelector('header');
    const heading = element?.querySelector('h1');
    expect(heading?.textContent).toBe('Site Title');
  });
});
