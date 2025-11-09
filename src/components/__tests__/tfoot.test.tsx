import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Tfoot } from '../Tfoot';

describe('Tfoot', () => {
  test('renders tfoot element', () => {
    const { container } = render(<table><Tfoot><tr><td>Test content</td></tr></Tfoot></table>);
    const element = container.querySelector('tfoot');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Tfoot ref={ref}>Test</Tfoot>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('tfoot');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Tfoot className="test-class" id="test-id" data-testid="test">
        Content
      </Tfoot>
    );
    const element = container.querySelector('tfoot');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders tfoot with footer row', () => {
    const { container } = render(
      <Tfoot>
        <tr><td>Total</td><td>100</td></tr>
      </Tfoot>
    );
    const element = container.querySelector('tfoot');
    const cells = element?.querySelectorAll('td');
    expect(cells?.length).toBe(2);
  });
});
