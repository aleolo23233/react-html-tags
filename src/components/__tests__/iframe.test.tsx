import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Iframe } from '../Iframe';

describe('Iframe', () => {
  test('renders iframe element', () => {
    const { container } = render(<Iframe>Test content</Iframe>);
    const element = container.querySelector('iframe');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Iframe ref={ref}>Test</Iframe>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('iframe');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Iframe className="test-class" id="test-id" data-testid="test">
        Content
      </Iframe>
    );
    const element = container.querySelector('iframe');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders iframe with src', () => {
    const { container } = render(<Iframe src="https://example.com" title="External content" />);
    const element = container.querySelector('iframe') as HTMLIFrameElement;
    expect(element?.getAttribute('src')).toBe('https://example.com');
    expect(element?.title).toBe('External content');
  });

  test('renders iframe with dimensions', () => {
    const { container } = render(<Iframe width={800} height={600}>Fallback content</Iframe>);
    const element = container.querySelector('iframe') as HTMLIFrameElement;
    expect(element?.width).toBe('800');
    expect(element?.height).toBe('600');
  });

  test('renders iframe with sandbox', () => {
    const { container } = render(<Iframe sandbox="allow-scripts allow-same-origin">Fallback content</Iframe>);
    const element = container.querySelector('iframe') as HTMLIFrameElement;
    expect(element?.sandbox.contains('allow-scripts')).toBe(true);
  });

  test('renders iframe with loading attribute', () => {
    const { container } = render(<Iframe loading="lazy">Fallback content</Iframe>);
    const element = container.querySelector('iframe') as HTMLIFrameElement;
    expect(element?.getAttribute('loading')).toBe('lazy');
  });
});
