import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Textarea } from '../Textarea';

describe('Textarea', () => {
  test('renders textarea element', () => {
    const { container } = render(<Textarea>Test content</Textarea>);
    const element = container.querySelector('textarea');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Textarea ref={ref}>Test</Textarea>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('textarea');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Textarea className="test-class" id="test-id" data-testid="test">
        Content
      </Textarea>
    );
    const element = container.querySelector('textarea');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders textarea with value', () => {
    const { container } = render(<Textarea value="This is a comment" readOnly />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.value).toBe('This is a comment');
  });

  test('renders textarea with placeholder', () => {
    const { container } = render(<Textarea placeholder="Enter your comments here..." />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.placeholder).toBe('Enter your comments here...');
  });

  test('renders textarea with rows and cols', () => {
    const { container } = render(<Textarea rows={5} cols={40} />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.getAttribute('rows')).toBe('5');
    expect(element?.getAttribute('cols')).toBe('40');
  });

  test('handles onChange event', () => {
    let textValue = '';
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      textValue = e.target.value;
    };
    const { container } = render(<Textarea onChange={handleChange} />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    fireEvent.change(element, { target: { value: 'New comment text' } });
    expect(textValue).toBe('New comment text');
  });

  test('renders required textarea', () => {
    const { container } = render(<Textarea required />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.required).toBe(true);
  });

  test('renders disabled textarea', () => {
    const { container } = render(<Textarea disabled />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.disabled).toBe(true);
  });

  test('renders readonly textarea', () => {
    const { container } = render(<Textarea readOnly value="Cannot edit this" />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.readOnly).toBe(true);
  });

  test('renders textarea with maxLength', () => {
    const { container } = render(<Textarea maxLength={500} />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.maxLength).toBe(500);
  });

  test('renders textarea with minLength', () => {
    const { container } = render(<Textarea minLength={10} />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.minLength).toBe(10);
  });

  test('renders textarea with name attribute', () => {
    const { container } = render(<Textarea name="description" />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.name).toBe('description');
  });

  test('renders textarea with wrap attribute', () => {
    const { container } = render(<Textarea wrap="hard" />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.getAttribute('wrap')).toBe('hard');
  });

  test('renders textarea with aria-label', () => {
    const { container } = render(<Textarea aria-label="Product review" />);
    const element = container.querySelector('textarea') as HTMLTextAreaElement;
    expect(element?.getAttribute('aria-label')).toBe('Product review');
  });
});
