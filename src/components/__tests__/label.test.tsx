import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Label } from '../Label';

describe('Label', () => {
  test('renders label element', () => {
    const { container } = render(<Label>Test content</Label>);
    const element = container.querySelector('label');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Label ref={ref}>Test</Label>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('label');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Label className="test-class" id="test-id" data-testid="test">
        Content
      </Label>
    );
    const element = container.querySelector('label');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders label with htmlFor attribute', () => {
    const { container } = render(<Label htmlFor="email-input">Email Address</Label>);
    const element = container.querySelector('label') as HTMLLabelElement;
    expect(element?.htmlFor).toBe('email-input');
    expect(element?.textContent).toBe('Email Address');
  });

  test('renders label wrapping an input', () => {
    const { container } = render(
      <Label>
        Username
        <input type="text" name="username" />
      </Label>
    );
    const label = container.querySelector('label');
    const input = label?.querySelector('input');
    expect(label).toBeTruthy();
    expect(input).toBeTruthy();
    expect(input?.name).toBe('username');
  });

  test('renders label with form attribute', () => {
    const { container } = render(<Label htmlFor="external-input" form="my-form">External Label</Label>);
    const element = container.querySelector('label') as HTMLLabelElement;
    expect(element?.getAttribute('form')).toBe('my-form');
  });
});
