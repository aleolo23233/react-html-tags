import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { H3 } from '../H3';

describe('H3', () => {
  test('renders h3 element', () => {
    const { container } = render(<H3>Test content</H3>);
    const element = container.querySelector('h3');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<H3 ref={ref}>Test</H3>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('h3');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <H3 className="test-class" id="test-id" data-testid="test">
        Content
      </H3>
    );
    const element = container.querySelector('h3');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders h3 as subsection heading', () => {
    const { container } = render(<H3>Subsection Title</H3>);
    const element = container.querySelector('h3');
    expect(element?.textContent).toBe('Subsection Title');
  });
});
