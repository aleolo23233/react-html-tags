import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Meter } from '../Meter';

describe('Meter', () => {
  test('renders meter element', () => {
    const { container } = render(<Meter>Test content</Meter>);
    const element = container.querySelector('meter');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Meter ref={ref}>Test</Meter>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('meter');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Meter className="test-class" id="test-id" data-testid="test">
        Content
      </Meter>
    );
    const element = container.querySelector('meter');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders meter with value and range', () => {
    const { container } = render(<Meter value={0.6} min={0} max={1}>60%</Meter>);
    const element = container.querySelector('meter') as HTMLMeterElement;
    expect(element?.value).toBe(0.6);
    expect(element?.min).toBe(0);
    expect(element?.max).toBe(1);
  });

  test('renders meter with optimum value', () => {
    const { container } = render(<Meter value={0.8} min={0} max={1} optimum={0.5} low={0.3} high={0.7}>80%</Meter>);
    const element = container.querySelector('meter') as HTMLMeterElement;
    expect(element?.optimum).toBe(0.5);
    expect(element?.low).toBe(0.3);
    expect(element?.high).toBe(0.7);
  });
});
