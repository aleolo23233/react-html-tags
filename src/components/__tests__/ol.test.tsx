import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Ol } from '../Ol';

describe('Ol', () => {
  test('renders ol element', () => {
    const { container } = render(<Ol>Test content</Ol>);
    const element = container.querySelector('ol');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Ol ref={ref}>Test</Ol>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('ol');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Ol className="test-class" id="test-id" data-testid="test">
        Content
      </Ol>
    );
    const element = container.querySelector('ol');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders ol with list items', () => {
    const { container } = render(
      <Ol>
        <li>First step</li>
        <li>Second step</li>
      </Ol>
    );
    const element = container.querySelector('ol');
    const items = element?.querySelectorAll('li');
    expect(items?.length).toBe(2);
  });

  test('renders ol with start attribute', () => {
    const { container } = render(<Ol start={5}><li>Item</li></Ol>);
    const element = container.querySelector('ol') as HTMLOListElement;
    expect(element?.start).toBe(5);
  });

  test('renders ol with type attribute', () => {
    const { container } = render(<Ol type="A"><li>Item</li></Ol>);
    const element = container.querySelector('ol') as HTMLOListElement;
    expect(element?.type).toBe('A');
  });
});
