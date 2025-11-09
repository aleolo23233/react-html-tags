import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Dfn } from '../Dfn';

describe('Dfn', () => {
  test('renders dfn element', () => {
    const { container } = render(<Dfn>Test content</Dfn>);
    const element = container.querySelector('dfn');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Dfn ref={ref}>Test</Dfn>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('dfn');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Dfn className="test-class" id="test-id" data-testid="test">
        Content
      </Dfn>
    );
    const element = container.querySelector('dfn');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders dfn with definition term', () => {
    const { container } = render(<Dfn title="HyperText Markup Language">HTML</Dfn>);
    const element = container.querySelector('dfn') as HTMLElement;
    expect(element?.textContent).toBe('HTML');
    expect(element?.title).toBe('HyperText Markup Language');
  });
});
