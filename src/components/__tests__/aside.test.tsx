import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Aside } from '../Aside';

describe('Aside', () => {
  test('renders aside element', () => {
    const { container } = render(<Aside>Test content</Aside>);
    const element = container.querySelector('aside');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Aside ref={ref}>Test</Aside>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('aside');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Aside className="test-class" id="test-id" data-testid="test">
        Content
      </Aside>
    );
    const element = container.querySelector('aside');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders aside with supplementary content', () => {
    const { container } = render(
      <Aside>
        <h3>Related Links</h3>
        <ul><li>Link 1</li></ul>
      </Aside>
    );
    const element = container.querySelector('aside');
    const heading = element?.querySelector('h3');
    expect(heading?.textContent).toBe('Related Links');
  });
});
