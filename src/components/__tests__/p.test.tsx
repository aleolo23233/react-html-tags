import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { P } from '../P';

describe('P', () => {
  test('renders p element', () => {
    const { container } = render(<P>Test content</P>);
    const element = container.querySelector('p');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<P ref={ref}>Test</P>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('p');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <P className="test-class" id="test-id" data-testid="test">
        Content
      </P>
    );
    const element = container.querySelector('p');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders paragraph with text', () => {
    const { container } = render(<P>This is a paragraph with some text content.</P>);
    const element = container.querySelector('p');
    expect(element?.textContent).toBe('This is a paragraph with some text content.');
  });
});
