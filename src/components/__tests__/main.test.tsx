import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Main } from '../Main';

describe('Main', () => {
  test('renders main element', () => {
    const { container } = render(<Main>Test content</Main>);
    const element = container.querySelector('main');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Main ref={ref}>Test</Main>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('main');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Main className="test-class" id="test-id" data-testid="test">
        Content
      </Main>
    );
    const element = container.querySelector('main');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders main with primary content', () => {
    const { container } = render(
      <Main>
        <h1>Main Heading</h1>
        <p>Main content</p>
      </Main>
    );
    const element = container.querySelector('main');
    const heading = element?.querySelector('h1');
    expect(heading?.textContent).toBe('Main Heading');
  });
});
