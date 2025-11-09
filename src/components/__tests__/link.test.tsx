import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Link } from '../Link';

describe('Link', () => {
  test('renders link element', () => {
    const { container } = render(<Link rel="stylesheet" href="/style.css" />);
    const element = container.querySelector('link');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Link ref={ref} href="/test.css" />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('link');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Link href="/test.css" rel="stylesheet" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('link');
    expect(element?.rel).toBe('stylesheet');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });
});
