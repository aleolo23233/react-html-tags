import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Sup } from '../Sup';

describe('Sup', () => {
  test('renders sup element', () => {
    const { container } = render(<Sup>Test content</Sup>);
    const element = container.querySelector('sup');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Sup ref={ref}>Test</Sup>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('sup');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Sup className="test-class" id="test-id" data-testid="test">
        Content
      </Sup>
    );
    const element = container.querySelector('sup');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders sup with superscript', () => {
    const { container } = render(<Sup>2</Sup>);
    const element = container.querySelector('sup');
    expect(element?.textContent).toBe('2');
  });
});
