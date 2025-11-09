import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Fieldset } from '../Fieldset';

describe('Fieldset', () => {
  test('renders fieldset element', () => {
    const { container } = render(<Fieldset>Test content</Fieldset>);
    const element = container.querySelector('fieldset');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Fieldset ref={ref}>Test</Fieldset>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('fieldset');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Fieldset className="test-class" id="test-id" data-testid="test">
        Content
      </Fieldset>
    );
    const element = container.querySelector('fieldset');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders fieldset with legend', () => {
    const { container } = render(
      <Fieldset>
        <legend>Personal Information</legend>
        <label>Name: <input type="text" /></label>
      </Fieldset>
    );
    const element = container.querySelector('fieldset');
    const legend = element?.querySelector('legend');
    expect(legend?.textContent).toBe('Personal Information');
  });

  test('renders disabled fieldset', () => {
    const { container } = render(<Fieldset disabled><input type="text" /></Fieldset>);
    const element = container.querySelector('fieldset') as HTMLFieldSetElement;
    expect(element?.disabled).toBe(true);
  });

  test('renders fieldset with name attribute', () => {
    const { container } = render(<Fieldset name="user-info">Form fields</Fieldset>);
    const element = container.querySelector('fieldset') as HTMLFieldSetElement;
    expect(element?.name).toBe('user-info');
  });

  test('renders fieldset with form attribute', () => {
    const { container } = render(<Fieldset form="my-form">Fields</Fieldset>);
    const element = container.querySelector('fieldset') as HTMLFieldSetElement;
    expect(element?.getAttribute('form')).toBe('my-form');
  });
});
