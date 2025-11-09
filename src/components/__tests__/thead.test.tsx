import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Thead } from '../Thead';

describe('Thead', () => {
  test('renders thead element', () => {
    const { container } = render(<table><Thead><tr><td>Test content</td></tr></Thead></table>);
    const element = container.querySelector('thead');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Thead ref={ref}>Test</Thead>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('thead');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Thead className="test-class" id="test-id" data-testid="test">
        Content
      </Thead>
    );
    const element = container.querySelector('thead');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders thead with header row', () => {
    const { container } = render(
      <Thead>
        <tr><th>Column 1</th><th>Column 2</th></tr>
      </Thead>
    );
    const element = container.querySelector('thead');
    const headers = element?.querySelectorAll('th');
    expect(headers?.length).toBe(2);
  });
});
