import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Article } from '../Article';

describe('Article', () => {
  test('renders article element', () => {
    const { container } = render(<Article>Test content</Article>);
    const element = container.querySelector('article');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Article ref={ref}>Test</Article>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('article');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Article className="test-class" id="test-id" data-testid="test">
        Content
      </Article>
    );
    const element = container.querySelector('article');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders article with content', () => {
    const { container } = render(
      <Article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
      </Article>
    );
    const element = container.querySelector('article');
    const heading = element?.querySelector('h2');
    expect(heading?.textContent).toBe('Article Title');
  });
});
