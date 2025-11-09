import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Details } from '../Details';

describe('Details', () => {
  test('renders details element', () => {
    const { container } = render(<Details>Test content</Details>);
    const element = container.querySelector('details');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Details ref={ref}>Test</Details>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('details');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Details className="test-class" id="test-id" data-testid="test">
        Content
      </Details>
    );
    const element = container.querySelector('details');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders details with summary', () => {
    const { container } = render(
      <Details>
        <summary>Click to expand</summary>
        <p>Hidden content</p>
      </Details>
    );
    const element = container.querySelector('details');
    const summary = element?.querySelector('summary');
    expect(summary?.textContent).toBe('Click to expand');
  });

  test('renders details with open attribute', () => {
    const { container } = render(<Details open><summary>Expanded</summary></Details>);
    const element = container.querySelector('details') as HTMLDetailsElement;
    expect(element?.open).toBe(true);
  });
});
