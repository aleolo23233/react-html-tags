import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Hgroup } from '../Hgroup';

describe('Hgroup', () => {
  test('renders hgroup element', () => {
    const { container } = render(<Hgroup>Test content</Hgroup>);
    const element = container.querySelector('hgroup');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Hgroup ref={ref}>Test</Hgroup>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('hgroup');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Hgroup className="test-class" id="test-id" data-testid="test">
        Content
      </Hgroup>
    );
    const element = container.querySelector('hgroup');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders hgroup with multiple headings', () => {
    const { container } = render(
      <Hgroup>
        <h1>Main Title</h1>
        <h2>Subtitle</h2>
      </Hgroup>
    );
    const element = container.querySelector('hgroup');
    const h1 = element?.querySelector('h1');
    const h2 = element?.querySelector('h2');
    expect(h1?.textContent).toBe('Main Title');
    expect(h2?.textContent).toBe('Subtitle');
  });
});
