import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Data } from '../Data';

describe('Data', () => {
  test('renders data element', () => {
    const { container } = render(<Data>Test content</Data>);
    const element = container.querySelector('data');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Data ref={ref}>Test</Data>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('data');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Data className="test-class" id="test-id" data-testid="test">
        Content
      </Data>
    );
    const element = container.querySelector('data');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders data with value', () => {
    const { container } = render(<Data value="12345">Product Name</Data>);
    const element = container.querySelector('data') as HTMLDataElement;
    expect(element?.value).toBe('12345');
    expect(element?.textContent).toBe('Product Name');
  });
});
