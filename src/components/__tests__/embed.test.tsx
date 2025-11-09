import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Embed } from '../Embed';

describe('Embed', () => {
  test('renders embed element', () => {
    const { container } = render(<Embed />);
    const element = container.querySelector('embed');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Embed ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('embed');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Embed className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('embed');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders embed with src and type', () => {
    const { container } = render(<Embed src="/plugin.swf" type="application/x-shockwave-flash" />);
    const element = container.querySelector('embed') as HTMLEmbedElement;
    expect(element?.src).toContain('/plugin.swf');
    expect(element?.type).toBe('application/x-shockwave-flash');
  });

  test('renders embed with dimensions', () => {
    const { container } = render(<Embed src="/content.pdf" width={600} height={400} />);
    const element = container.querySelector('embed') as HTMLEmbedElement;
    expect(element?.width).toBe('600');
    expect(element?.height).toBe('400');
  });
});
