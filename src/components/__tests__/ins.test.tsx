import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Ins } from '../Ins';

describe('Ins', () => {
  test('renders ins element', () => {
    const { container } = render(<Ins>Test content</Ins>);
    const element = container.querySelector('ins');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Ins ref={ref}>Test</Ins>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('ins');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Ins className="test-class" id="test-id" data-testid="test">
        Content
      </Ins>
    );
    const element = container.querySelector('ins');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders ins with inserted text', () => {
    const { container } = render(<Ins cite="/changes" dateTime="2024-01-01">inserted content</Ins>);
    const element = container.querySelector('ins') as HTMLModElement;
    expect(element?.textContent).toBe('inserted content');
    expect(element?.cite).toBe('/changes');
    expect(element?.dateTime).toBe('2024-01-01');
  });
});
