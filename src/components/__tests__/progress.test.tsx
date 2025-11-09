import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Progress } from '../Progress';

describe('Progress', () => {
  test('renders progress element', () => {
    const { container } = render(<Progress>Test content</Progress>);
    const element = container.querySelector('progress');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Progress ref={ref}>Test</Progress>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('progress');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Progress className="test-class" id="test-id" data-testid="test">
        Content
      </Progress>
    );
    const element = container.querySelector('progress');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders progress with value and max', () => {
    const { container } = render(<Progress value={70} max={100}>70%</Progress>);
    const element = container.querySelector('progress') as HTMLProgressElement;
    expect(element?.value).toBe(70);
    expect(element?.max).toBe(100);
  });
});
