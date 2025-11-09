import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Div } from '../Div';

describe('Div', () => {
  test('renders div element', () => {
    const { container } = render(<Div>Test content</Div>);
    const element = container.querySelector('div');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Div ref={ref}>Test</Div>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('div');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Div className="test-class" id="test-id" data-testid="test">
        Content
      </Div>
    );
    const element = container.querySelector('div');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders div as container', () => {
    const { container } = render(<Div><p>Nested content</p></Div>);
    const element = container.querySelector('div');
    const paragraph = element?.querySelector('p');
    expect(paragraph).toBeTruthy();
  });

  test('renders div with role attribute', () => {
    const { container } = render(<Div role="main">Main content</Div>);
    const element = container.querySelector('div');
    expect(element?.getAttribute('role')).toBe('main');
  });
});
