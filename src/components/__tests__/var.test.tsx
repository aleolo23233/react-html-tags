import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Var } from '../Var';

describe('Var', () => {
  test('renders var element', () => {
    const { container } = render(<Var>Test content</Var>);
    const element = container.querySelector('var');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Var ref={ref}>Test</Var>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('var');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Var className="test-class" id="test-id" data-testid="test">
        Content
      </Var>
    );
    const element = container.querySelector('var');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders var with variable name', () => {
    const { container } = render(<Var>x</Var>);
    const element = container.querySelector('var');
    expect(element?.textContent).toBe('x');
  });
});
