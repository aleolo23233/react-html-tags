import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Li } from '../Li';

describe('Li', () => {
  test('renders li element', () => {
    const { container } = render(<Li>Test content</Li>);
    const element = container.querySelector('li');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Li ref={ref}>Test</Li>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('li');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Li className="test-class" id="test-id" data-testid="test">
        Content
      </Li>
    );
    const element = container.querySelector('li');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders li as list item', () => {
    const { container } = render(<Li>List item content</Li>);
    const element = container.querySelector('li');
    expect(element?.textContent).toBe('List item content');
  });

  test('renders li with value attribute in ordered list', () => {
    const { container } = render(<Li value={10}>Item</Li>);
    const element = container.querySelector('li') as HTMLLIElement;
    expect(element?.value).toBe(10);
  });
});
