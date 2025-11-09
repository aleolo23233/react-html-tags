import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Map } from '../Map';

describe('Map', () => {
  test('renders map element', () => {
    const { container } = render(<Map>Test content</Map>);
    const element = container.querySelector('map');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Map ref={ref}>Test</Map>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('map');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Map className="test-class" id="test-id" data-testid="test">
        Content
      </Map>
    );
    const element = container.querySelector('map');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders map with name and areas', () => {
    const { container } = render(
      <Map name="image-map">
        <area shape="rect" coords="0,0,50,50" href="/region1" alt="Region 1" />
      </Map>
    );
    const element = container.querySelector('map') as HTMLMapElement;
    expect(element?.name).toBe('image-map');
    const areas = element?.querySelectorAll('area');
    expect(areas?.length).toBe(1);
  });
});
