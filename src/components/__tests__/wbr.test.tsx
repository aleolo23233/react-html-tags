import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Wbr } from '../Wbr';

describe('Wbr', () => {
  test('renders wbr element', () => {
    const { container } = render(<Wbr />);
    const element = container.querySelector('wbr');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Wbr ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('wbr');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Wbr className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('wbr');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders wbr as word break opportunity', () => {
    const { container } = render(<Wbr />);
    const element = container.querySelector('wbr');
    expect(element).toBeTruthy();
  });
});
