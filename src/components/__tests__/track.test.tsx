import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Track } from '../Track';

describe('Track', () => {
  test('renders track element', () => {
    const { container } = render(<Track />);
    const element = container.querySelector('track');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Track ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('track');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Track className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('track');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders track with src and kind', () => {
    const { container } = render(<Track src="/subtitles.vtt" kind="subtitles" srcLang="en" label="English" />);
    const element = container.querySelector('track') as HTMLTrackElement;
    expect(element?.src).toContain('/subtitles.vtt');
    expect(element?.kind).toBe('subtitles');
    expect(element?.srclang).toBe('en');
  });

  test('renders default track', () => {
    const { container } = render(<Track src="/captions.vtt" kind="captions" default />);
    const element = container.querySelector('track') as HTMLTrackElement;
    expect(element?.default).toBe(true);
  });
});
