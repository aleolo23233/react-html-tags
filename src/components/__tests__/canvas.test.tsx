import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Canvas } from '../Canvas';

describe('Canvas', () => {
  test('renders canvas element', () => {
    const { container } = render(<Canvas>Test content</Canvas>);
    const element = container.querySelector('canvas');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Canvas ref={ref}>Test</Canvas>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('canvas');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Canvas className="test-class" id="test-id" data-testid="test">
        Content
      </Canvas>
    );
    const element = container.querySelector('canvas');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders canvas with dimensions', () => {
    const { container } = render(<Canvas width={800} height={600}>Canvas not supported</Canvas>);
    const element = container.querySelector('canvas') as HTMLCanvasElement;
    expect(element?.width).toBe(800);
    expect(element?.height).toBe(600);
  });
});
