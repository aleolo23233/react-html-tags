import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Section } from '../Section';

describe('Section', () => {
  test('renders section element', () => {
    const { container } = render(<Section>Test content</Section>);
    const element = container.querySelector('section');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Section ref={ref}>Test</Section>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('section');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Section className="test-class" id="test-id" data-testid="test">
        Content
      </Section>
    );
    const element = container.querySelector('section');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders section with heading', () => {
    const { container } = render(
      <Section>
        <h2>Section Title</h2>
        <p>Section content</p>
      </Section>
    );
    const element = container.querySelector('section');
    const heading = element?.querySelector('h2');
    expect(heading?.textContent).toBe('Section Title');
  });

  test('renders section with aria-labelledby', () => {
    const { container } = render(<Section aria-labelledby="section-title">Content</Section>);
    const element = container.querySelector('section');
    expect(element?.getAttribute('aria-labelledby')).toBe('section-title');
  });
});
