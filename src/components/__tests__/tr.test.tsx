import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Tr } from '../Tr';

describe('Tr', () => {
  test('renders tr element', () => {
    const { container } = render(<table><tbody><Tr><td>Test content</td></Tr></tbody></table>);
    const element = container.querySelector('tr');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Tr ref={ref}>Test</Tr>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('tr');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Tr className="test-class" id="test-id" data-testid="test">
        Content
      </Tr>
    );
    const element = container.querySelector('tr');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders tr with cells', () => {
    const { container } = render(
      <Tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
      </Tr>
    );
    const element = container.querySelector('tr');
    const cells = element?.querySelectorAll('td');
    expect(cells?.length).toBe(3);
  });
});
