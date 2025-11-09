import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Abbr } from '../Abbr';

describe('Abbr', () => {
  test('renders abbr element', () => {
    const { container } = render(<Abbr>Test content</Abbr>);
    const element = container.querySelector('abbr');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Abbr ref={ref}>Test</Abbr>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('abbr');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Abbr className="test-class" id="test-id" data-testid="test">
        Content
      </Abbr>
    );
    const element = container.querySelector('abbr');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders abbr with title', () => {
    const { container } = render(<Abbr title="HyperText Markup Language">HTML</Abbr>);
    const element = container.querySelector('abbr') as HTMLElement;
    expect(element?.title).toBe('HyperText Markup Language');
    expect(element?.textContent).toBe('HTML');
  });
});
