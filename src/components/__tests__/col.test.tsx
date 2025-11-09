import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Col } from '../Col';

describe('Col', () => {
  test('renders col element', () => {
    const { container } = render(<Col />);
    const element = container.querySelector('col');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Col ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('col');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Col className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('col');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders col with span attribute', () => {
    const { container } = render(<Col span={2} />);
    const element = container.querySelector('col') as HTMLTableColElement;
    expect(element?.getAttribute('span')).toBe('2');
  });
});
