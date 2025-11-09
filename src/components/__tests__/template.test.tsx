import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Template } from '../Template';

describe('Template', () => {
  test('renders template element', () => {
    const { container } = render(<Template>Test content</Template>);
    const element = container.querySelector('template');
    expect(element).toBeTruthy();
    // Template content is in a document fragment, not directly accessible
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Template ref={ref}>Test</Template>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('template');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Template id="test-id" data-testid="test">
        Content
      </Template>
    );
    const element = container.querySelector('template');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });
});
