import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Th } from '../Th';

describe('Th', () => {
  test('renders th element', () => {
    const { container } = render(<table><thead><tr><Th>Test content</Th></tr></thead></table>);
    const element = container.querySelector('th');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Th ref={ref}>Test</Th>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('th');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Th className="test-class" id="test-id" data-testid="test">
        Content
      </Th>
    );
    const element = container.querySelector('th');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders th as table header', () => {
    const { container } = render(<Th scope="col">Header Column</Th>);
    const element = container.querySelector('th') as HTMLTableCellElement;
    expect(element?.textContent).toBe('Header Column');
    expect(element?.scope).toBe('col');
  });

  test('renders th with colspan and rowspan', () => {
    const { container } = render(<Th colSpan={2} rowSpan={1}>Merged Header</Th>);
    const element = container.querySelector('th') as HTMLTableCellElement;
    expect(element?.colSpan).toBe(2);
    expect(element?.rowSpan).toBe(1);
  });
});
