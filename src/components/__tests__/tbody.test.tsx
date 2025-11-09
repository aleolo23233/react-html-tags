import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Tbody } from '../Tbody';

describe('Tbody', () => {
  test('renders tbody element', () => {
    const { container } = render(<table><Tbody><tr><td>Test content</td></tr></Tbody></table>);
    const element = container.querySelector('tbody');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Tbody ref={ref}>Test</Tbody>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('tbody');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Tbody className="test-class" id="test-id" data-testid="test">
        Content
      </Tbody>
    );
    const element = container.querySelector('tbody');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders tbody with data rows', () => {
    const { container } = render(
      <Tbody>
        <tr><td>Data 1</td><td>Data 2</td></tr>
        <tr><td>Data 3</td><td>Data 4</td></tr>
      </Tbody>
    );
    const element = container.querySelector('tbody');
    const rows = element?.querySelectorAll('tr');
    expect(rows?.length).toBe(2);
  });
});
