import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Source } from '../Source';

describe('Source', () => {
  test('renders source element', () => {
    const { container } = render(<Source />);
    const element = container.querySelector('source');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Source ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('source');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Source className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('source');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders source with src and type', () => {
    const { container } = render(<Source src="/video.mp4" type="video/mp4" />);
    const element = container.querySelector('source') as HTMLSourceElement;
    expect(element?.src).toContain('/video.mp4');
    expect(element?.type).toBe('video/mp4');
  });

  test('renders source with srcset and media', () => {
    const { container } = render(<Source srcSet="/large.jpg" media="(min-width: 1000px)" />);
    const element = container.querySelector('source') as HTMLSourceElement;
    expect(element?.media).toBe('(min-width: 1000px)');
  });
});
