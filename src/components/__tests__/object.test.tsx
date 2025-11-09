import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Object } from '../Object';

describe('Object', () => {
  test('renders object element', () => {
    const { container } = render(<Object>Test content</Object>);
    const element = container.querySelector('object');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Object ref={ref}>Test</Object>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('object');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Object className="test-class" id="test-id" data-testid="test">
        Content
      </Object>
    );
    const element = container.querySelector('object');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders object with data and type', () => {
    const { container } = render(<Object data="/document.pdf" type="application/pdf">PDF viewer not available</Object>);
    const element = container.querySelector('object') as HTMLObjectElement;
    expect(element?.data).toContain('/document.pdf');
    expect(element?.type).toBe('application/pdf');
  });

  test('renders object with dimensions', () => {
    const { container } = render(<Object data="/content.swf" width={400} height={300}>Fallback content</Object>);
    const element = container.querySelector('object') as HTMLObjectElement;
    expect(element?.width).toBe('400');
    expect(element?.height).toBe('300');
  });
});
