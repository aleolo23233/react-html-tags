import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Table } from '../Table';

describe('Table', () => {
  test('renders table element', () => {
    const { container } = render(<Table><tbody><tr><td>Test content</td></tr></tbody></Table>);
    const element = container.querySelector('table');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Table ref={ref}>Test</Table>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('table');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Table className="test-class" id="test-id" data-testid="test">
        Content
      </Table>
    );
    const element = container.querySelector('table');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders table with rows', () => {
    const { container } = render(
      <Table>
        <thead><tr><th>Name</th><th>Age</th></tr></thead>
        <tbody><tr><td>John</td><td>30</td></tr></tbody>
      </Table>
    );
    const element = container.querySelector('table');
    const rows = element?.querySelectorAll('tr');
    expect(rows?.length).toBe(2);
  });
});
