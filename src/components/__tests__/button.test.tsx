import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  test('renders button element', () => {
    const { container } = render(<Button>Test content</Button>);
    const element = container.querySelector('button');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Button ref={ref}>Test</Button>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('button');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Button className="test-class" id="test-id" data-testid="test">
        Content
      </Button>
    );
    const element = container.querySelector('button');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders submit button with default type', () => {
    const { container } = render(<Button type="submit">Submit Form</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.type).toBe('submit');
    expect(element?.textContent).toBe('Submit Form');
  });

  test('renders button type', () => {
    const { container } = render(<Button type="button">Click Me</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.type).toBe('button');
  });

  test('renders reset button', () => {
    const { container } = render(<Button type="reset">Reset Form</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.type).toBe('reset');
  });

  test('handles onClick event', () => {
    let clicked = false;
    const handleClick = () => { clicked = true; };
    const { container } = render(<Button onClick={handleClick}>Click Me</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    fireEvent.click(element);
    expect(clicked).toBe(true);
  });

  test('renders disabled button', () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.disabled).toBe(true);
  });

  test('renders button with form attribute', () => {
    const { container } = render(<Button form="my-form">External Submit</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.getAttribute('form')).toBe('my-form');
  });

  test('renders button with formaction', () => {
    const { container } = render(<Button type="submit" formAction="/alternative-submit">Submit to Alternative</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.getAttribute('formaction')).toBe('/alternative-submit');
  });

  test('renders button with formmethod', () => {
    const { container } = render(<Button type="submit" formMethod="post">Post Data</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.formMethod).toBe('post');
  });

  test('renders button with name and value', () => {
    const { container } = render(<Button name="action" value="delete">Delete</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.name).toBe('action');
    expect(element?.value).toBe('delete');
  });

  test('renders button with aria-label', () => {
    const { container } = render(<Button aria-label="Close dialog">×</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.getAttribute('aria-label')).toBe('Close dialog');
  });

  test('renders button with aria-expanded', () => {
    const { container } = render(<Button aria-expanded={true}>Menu</Button>);
    const element = container.querySelector('button') as HTMLButtonElement;
    expect(element?.getAttribute('aria-expanded')).toBe('true');
  });
});
