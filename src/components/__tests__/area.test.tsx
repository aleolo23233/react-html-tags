import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Area } from '../Area';

describe('Area', () => {
  test('renders area element', () => {
    const { container } = render(<Area />);
    const element = container.querySelector('area');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Area ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('area');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Area className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('area');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders area with shape and coords', () => {
    const { container } = render(<Area shape="rect" coords="0,0,100,100" href="/region" alt="Region" />);
    const element = container.querySelector('area') as HTMLAreaElement;
    expect(element?.shape).toBe('rect');
    expect(element?.coords).toBe('0,0,100,100');
    expect(element?.href).toContain('/region');
  });

  test('renders area with target attribute', () => {
    const { container } = render(<Area href="/link" target="_blank" alt="Link" />);
    const element = container.querySelector('area') as HTMLAreaElement;
    expect(element?.target).toBe('_blank');
  });
});
