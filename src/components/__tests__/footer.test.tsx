import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  test('renders footer element', () => {
    const { container } = render(<Footer>Test content</Footer>);
    const element = container.querySelector('footer');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Footer ref={ref}>Test</Footer>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('footer');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Footer className="test-class" id="test-id" data-testid="test">
        Content
      </Footer>
    );
    const element = container.querySelector('footer');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders footer with copyright', () => {
    const { container } = render(
      <Footer>
        <p>&copy; 2024 Company Name</p>
      </Footer>
    );
    const element = container.querySelector('footer');
    const paragraph = element?.querySelector('p');
    expect(paragraph).toBeTruthy();
  });
});
