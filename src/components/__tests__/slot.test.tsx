import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Slot } from '../Slot';

describe('Slot', () => {
  test('renders slot element', () => {
    const { container } = render(<Slot>Test content</Slot>);
    const element = container.querySelector('slot');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Slot ref={ref}>Test</Slot>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('slot');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Slot className="test-class" id="test-id" data-testid="test">
        Content
      </Slot>
    );
    const element = container.querySelector('slot');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders slot element', () => {
    const { container } = render(<Slot name="header">Fallback content</Slot>);
    const element = container.querySelector('slot') as HTMLSlotElement;
    expect(element?.name).toBe('header');
  });
});
