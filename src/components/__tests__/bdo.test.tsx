import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Bdo } from '../Bdo';

describe('Bdo', () => {
  test('renders bdo element', () => {
    const { container } = render(<Bdo>Test content</Bdo>);
    const element = container.querySelector('bdo');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Bdo ref={ref}>Test</Bdo>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('bdo');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Bdo className="test-class" id="test-id" data-testid="test">
        Content
      </Bdo>
    );
    const element = container.querySelector('bdo');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders bdo with text direction', () => {
    const { container } = render(<Bdo dir="rtl">Right to left text</Bdo>);
    const element = container.querySelector('bdo') as HTMLElement;
    expect(element?.dir).toBe('rtl');
  });
});
