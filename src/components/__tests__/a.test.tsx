import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { A } from '../A';

describe('A', () => {
  test('renders a element', () => {
    const { container } = render(<A>Test content</A>);
    const element = container.querySelector('a');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<A ref={ref}>Test</A>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('a');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <A className="test-class" id="test-id" data-testid="test">
        Content
      </A>
    );
    const element = container.querySelector('a');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders anchor with href', () => {
    const { container } = render(<A href="https://example.com">Visit Example</A>);
    const element = container.querySelector('a') as HTMLAnchorElement;
    expect(element?.getAttribute('href')).toBe('https://example.com');
    expect(element?.textContent).toBe('Visit Example');
  });

  test('renders anchor with target blank', () => {
    const { container } = render(<A href="/page" target="_blank" rel="noopener noreferrer">Open in new tab</A>);
    const element = container.querySelector('a') as HTMLAnchorElement;
    expect(element?.target).toBe('_blank');
    expect(element?.rel).toBe('noopener noreferrer');
  });

  test('renders anchor with download attribute', () => {
    const { container } = render(<A href="/file.pdf" download="document.pdf">Download</A>);
    const element = container.querySelector('a') as HTMLAnchorElement;
    expect(element?.download).toBe('document.pdf');
  });

  test('renders anchor with hreflang', () => {
    const { container } = render(<A href="/es/page" hrefLang="es">Spanish version</A>);
    const element = container.querySelector('a') as HTMLAnchorElement;
    expect(element?.hreflang).toBe('es');
  });
});
