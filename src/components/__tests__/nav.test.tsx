import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Nav } from '../Nav';

describe('Nav', () => {
  test('renders nav element', () => {
    const { container } = render(<Nav>Test content</Nav>);
    const element = container.querySelector('nav');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Nav ref={ref}>Test</Nav>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('nav');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Nav className="test-class" id="test-id" data-testid="test">
        Content
      </Nav>
    );
    const element = container.querySelector('nav');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders nav with links', () => {
    const { container } = render(
      <Nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Nav>
    );
    const element = container.querySelector('nav');
    const links = element?.querySelectorAll('a');
    expect(links?.length).toBe(3);
  });

  test('renders nav with aria-label', () => {
    const { container } = render(<Nav aria-label="Main navigation">Navigation content</Nav>);
    const element = container.querySelector('nav');
    expect(element?.getAttribute('aria-label')).toBe('Main navigation');
  });
});
