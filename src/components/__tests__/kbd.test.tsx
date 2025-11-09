import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Kbd } from '../Kbd';

describe('Kbd', () => {
  test('renders kbd element', () => {
    const { container } = render(<Kbd>Test content</Kbd>);
    const element = container.querySelector('kbd');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Kbd ref={ref}>Test</Kbd>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('kbd');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Kbd className="test-class" id="test-id" data-testid="test">
        Content
      </Kbd>
    );
    const element = container.querySelector('kbd');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders kbd with keyboard input', () => {
    const { container } = render(<Kbd>Ctrl + C</Kbd>);
    const element = container.querySelector('kbd');
    expect(element?.textContent).toBe('Ctrl + C');
  });
});
