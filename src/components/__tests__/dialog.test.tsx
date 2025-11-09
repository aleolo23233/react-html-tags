import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Dialog } from '../Dialog';

describe('Dialog', () => {
  test('renders dialog element', () => {
    const { container } = render(<Dialog>Test content</Dialog>);
    const element = container.querySelector('dialog');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Dialog ref={ref}>Test</Dialog>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('dialog');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Dialog className="test-class" id="test-id" data-testid="test">
        Content
      </Dialog>
    );
    const element = container.querySelector('dialog');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders dialog element', () => {
    const { container } = render(<Dialog>Dialog content</Dialog>);
    const element = container.querySelector('dialog');
    expect(element?.textContent).toBe('Dialog content');
  });

  test('renders dialog with open attribute', () => {
    const { container } = render(<Dialog open>Visible dialog</Dialog>);
    const element = container.querySelector('dialog') as HTMLDialogElement;
    expect(element?.open).toBe(true);
  });
});
