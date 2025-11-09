import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Svg } from '../Svg';

describe('Svg', () => {
  test('renders svg element', () => {
    const { container } = render(<Svg>Test content</Svg>);
    const element = container.querySelector('svg');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Svg ref={ref}>Test</Svg>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('svg');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Svg className="test-class" id="test-id" data-testid="test">
        Content
      </Svg>
    );
    const element = container.querySelector('svg');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders svg element', () => {
    const { container } = render(
      <Svg width={100} height={100}>
        <circle cx={50} cy={50} r={40} />
      </Svg>
    );
    const element = container.querySelector('svg') as SVGElement;
    expect(element?.getAttribute('width')).toBe('100');
    expect(element?.getAttribute('height')).toBe('100');
  });
});
