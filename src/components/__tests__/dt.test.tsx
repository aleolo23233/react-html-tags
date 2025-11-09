import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Dt } from '../Dt';

describe('Dt', () => {
  test('renders dt element', () => {
    const { container } = render(<Dt>Test content</Dt>);
    const element = container.querySelector('dt');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Dt ref={ref}>Test</Dt>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('dt');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Dt className="test-class" id="test-id" data-testid="test">
        Content
      </Dt>
    );
    const element = container.querySelector('dt');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders dt as definition term', () => {
    const { container } = render(<Dt>HTML</Dt>);
    const element = container.querySelector('dt');
    expect(element?.textContent).toBe('HTML');
  });
});
