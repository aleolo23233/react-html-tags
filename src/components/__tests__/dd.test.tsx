import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Dd } from '../Dd';

describe('Dd', () => {
  test('renders dd element', () => {
    const { container } = render(<Dd>Test content</Dd>);
    const element = container.querySelector('dd');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Dd ref={ref}>Test</Dd>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('dd');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Dd className="test-class" id="test-id" data-testid="test">
        Content
      </Dd>
    );
    const element = container.querySelector('dd');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders dd as definition description', () => {
    const { container } = render(<Dd>HyperText Markup Language</Dd>);
    const element = container.querySelector('dd');
    expect(element?.textContent).toBe('HyperText Markup Language');
  });
});
