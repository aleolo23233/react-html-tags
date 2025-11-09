import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Datalist } from '../Datalist';

describe('Datalist', () => {
  test('renders datalist element', () => {
    const { container } = render(<Datalist>Test content</Datalist>);
    const element = container.querySelector('datalist');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Datalist ref={ref}>Test</Datalist>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('datalist');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Datalist className="test-class" id="test-id" data-testid="test">
        Content
      </Datalist>
    );
    const element = container.querySelector('datalist');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders datalist with options', () => {
    const { container} = render(
      <Datalist id="browsers">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Safari" />
      </Datalist>
    );
    const element = container.querySelector('datalist');
    const options = element?.querySelectorAll('option');
    expect(options?.length).toBe(3);
  });
});
