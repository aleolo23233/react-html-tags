import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Audio } from '../Audio';

describe('Audio', () => {
  test('renders audio element', () => {
    const { container } = render(<Audio>Test content</Audio>);
    const element = container.querySelector('audio');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Audio ref={ref}>Test</Audio>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('audio');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Audio className="test-class" id="test-id" data-testid="test">
        Content
      </Audio>
    );
    const element = container.querySelector('audio');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders audio with src and controls', () => {
    const { container } = render(<Audio src="/song.mp3" controls />);
    const element = container.querySelector('audio') as HTMLAudioElement;
    expect(element?.src).toContain('/song.mp3');
    expect(element?.controls).toBe(true);
  });

  test('renders audio with autoplay and loop', () => {
    const { container } = render(<Audio autoPlay loop>Fallback content</Audio>);
    const element = container.querySelector('audio') as HTMLAudioElement;
    expect(element?.loop).toBe(true);
  });

  test('renders audio with preload attribute', () => {
    const { container } = render(<Audio preload="metadata">Fallback content</Audio>);
    const element = container.querySelector('audio') as HTMLAudioElement;
    expect(element?.preload).toBe('metadata');
  });
});
