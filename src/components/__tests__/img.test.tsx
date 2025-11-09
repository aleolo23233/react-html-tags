import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Img } from '../Img';

describe('Img', () => {
  test('renders img element', () => {
    const { container } = render(<Img />);
    const element = container.querySelector('img');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Img ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('img');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Img className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('img');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders img with src and alt', () => {
    const { container } = render(<Img src="/photo.jpg" alt="A beautiful sunset" />);
    const element = container.querySelector('img') as HTMLImageElement;
    expect(element?.src).toContain('/photo.jpg');
    expect(element?.alt).toBe('A beautiful sunset');
  });

  test('renders img with width and height', () => {
    const { container } = render(<Img src="/logo.png" width={200} height={100} alt="Logo" />);
    const element = container.querySelector('img') as HTMLImageElement;
    expect(element?.width).toBe(200);
    expect(element?.height).toBe(100);
  });

  test('renders img with loading attribute', () => {
    const { container } = render(<Img src="/image.jpg" loading="lazy" alt="Lazy loaded" />);
    const element = container.querySelector('img') as HTMLImageElement;
    expect(element?.loading).toBe('lazy');
  });

  test('renders img with srcset', () => {
    const { container } = render(<Img src="/default.jpg" srcSet="/small.jpg 480w, /large.jpg 1080w" alt="Responsive" />);
    const element = container.querySelector('img') as HTMLImageElement;
    expect(element?.srcset).toContain('480w');
  });
});
