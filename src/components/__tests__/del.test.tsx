import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Del } from '../Del';

describe('Del', () => {
  test('renders del element', () => {
    const { container } = render(<Del>Test content</Del>);
    const element = container.querySelector('del');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Del ref={ref}>Test</Del>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('del');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Del className="test-class" id="test-id" data-testid="test">
        Content
      </Del>
    );
    const element = container.querySelector('del');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders del with deleted text', () => {
    const { container } = render(<Del cite="/changes" dateTime="2024-01-01">deleted content</Del>);
    const element = container.querySelector('del') as HTMLModElement;
    expect(element?.textContent).toBe('deleted content');
    expect(element?.cite).toBe('/changes');
    expect(element?.dateTime).toBe('2024-01-01');
  });
});
