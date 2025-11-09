import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Small } from '../Small';

describe('Small', () => {
  test('renders small element', () => {
    const { container } = render(<Small>Test content</Small>);
    const element = container.querySelector('small');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Small ref={ref}>Test</Small>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('small');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Small className="test-class" id="test-id" data-testid="test">
        Content
      </Small>
    );
    const element = container.querySelector('small');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders small with fine print', () => {
    const { container } = render(<Small>Terms and conditions apply</Small>);
    const element = container.querySelector('small');
    expect(element?.textContent).toBe('Terms and conditions apply');
  });
});
