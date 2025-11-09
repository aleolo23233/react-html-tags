import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Br } from '../Br';

describe('Br', () => {
  test('renders br element', () => {
    const { container } = render(<Br />);
    const element = container.querySelector('br');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Br ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('br');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Br className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('br');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders br as line break', () => {
    const { container } = render(<Br />);
    const element = container.querySelector('br');
    expect(element).toBeTruthy();
  });
});
