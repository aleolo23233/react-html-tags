import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Video } from '../Video';

describe('Video', () => {
  test('renders video element', () => {
    const { container } = render(<Video>Test content</Video>);
    const element = container.querySelector('video');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Video ref={ref}>Test</Video>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('video');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Video className="test-class" id="test-id" data-testid="test">
        Content
      </Video>
    );
    const element = container.querySelector('video');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders video with src and controls', () => {
    const { container } = render(<Video src="/video.mp4" controls />);
    const element = container.querySelector('video') as HTMLVideoElement;
    expect(element?.src).toContain('/video.mp4');
    expect(element?.controls).toBe(true);
  });

  test('renders video with width and height', () => {
    const { container } = render(<Video width={640} height={360} />);
    const element = container.querySelector('video') as HTMLVideoElement;
    expect(element?.getAttribute('width')).toBe('640');
    expect(element?.getAttribute('height')).toBe('360');
  });

  test('renders video with autoplay and muted', () => {
    const { container } = render(<Video autoPlay muted loop />);
    const element = container.querySelector('video') as HTMLVideoElement;
    expect(element?.muted).toBe(true);
    expect(element?.loop).toBe(true);
  });

  test('renders video with poster', () => {
    const { container } = render(<Video poster="/thumbnail.jpg">Fallback content</Video>);
    const element = container.querySelector('video') as HTMLVideoElement;
    expect(element?.getAttribute('poster')).toBe('/thumbnail.jpg');
  });
});
