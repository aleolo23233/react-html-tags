import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Td } from '../Td';

describe('Td', () => {
  test('renders td element', () => {
    const { container } = render(<table><tbody><tr><Td>Test content</Td></tr></tbody></table>);
    const element = container.querySelector('td');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Td ref={ref}>Test</Td>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('td');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Td className="test-class" id="test-id" data-testid="test">
        Content
      </Td>
    );
    const element = container.querySelector('td');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders td as table data cell', () => {
    const { container } = render(<Td>Cell Data</Td>);
    const element = container.querySelector('td');
    expect(element?.textContent).toBe('Cell Data');
  });

  test('renders td with colspan and rowspan', () => {
    const { container } = render(<Td colSpan={2} rowSpan={3}>Merged Cell</Td>);
    const element = container.querySelector('td') as HTMLTableCellElement;
    expect(element?.colSpan).toBe(2);
    expect(element?.rowSpan).toBe(3);
  });
});
