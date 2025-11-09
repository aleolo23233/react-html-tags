import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Param } from '../Param';

describe('Param', () => {
  test('renders param element', () => {
    const { container } = render(<Param />);
    const element = container.querySelector('param');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Param ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('param');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Param className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('param');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders param with name and value', () => {
    const { container } = render(<Param name="autoplay" value="true" />);
    const element = container.querySelector('param') as HTMLParamElement;
    expect(element?.getAttribute('name')).toBe('autoplay');
    expect(element?.getAttribute('value')).toBe('true');
  });
});
