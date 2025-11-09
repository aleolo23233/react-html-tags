import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Colgroup } from '../Colgroup';

describe('Colgroup', () => {
  test('renders colgroup element', () => {
    const { container } = render(<table><Colgroup><col /></Colgroup></table>);
    const element = container.querySelector('colgroup');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Colgroup ref={ref}>Test</Colgroup>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('colgroup');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Colgroup className="test-class" id="test-id" data-testid="test">
        Content
      </Colgroup>
    );
    const element = container.querySelector('colgroup');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders colgroup with col elements', () => {
    const { container } = render(
      <Colgroup>
        <col span={1} />
        <col span={2} />
      </Colgroup>
    );
    const element = container.querySelector('colgroup');
    const cols = element?.querySelectorAll('col');
    expect(cols?.length).toBe(2);
  });
});
