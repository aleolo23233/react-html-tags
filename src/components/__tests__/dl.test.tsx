import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Dl } from '../Dl';

describe('Dl', () => {
  test('renders dl element', () => {
    const { container } = render(<Dl>Test content</Dl>);
    const element = container.querySelector('dl');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Dl ref={ref}>Test</Dl>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('dl');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Dl className="test-class" id="test-id" data-testid="test">
        Content
      </Dl>
    );
    const element = container.querySelector('dl');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders dl with terms and descriptions', () => {
    const { container } = render(
      <Dl>
        <dt>Term 1</dt>
        <dd>Description 1</dd>
        <dt>Term 2</dt>
        <dd>Description 2</dd>
      </Dl>
    );
    const element = container.querySelector('dl');
    const terms = element?.querySelectorAll('dt');
    const descriptions = element?.querySelectorAll('dd');
    expect(terms?.length).toBe(2);
    expect(descriptions?.length).toBe(2);
  });
});
