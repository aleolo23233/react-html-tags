import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  test('renders input element', () => {
    const { container } = render(<Input />);
    const element = container.querySelector('input');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Input ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('input');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Input className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('input');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders text input with value', () => {
    const { container } = render(<Input type="text" value="John Doe" readOnly />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.type).toBe('text');
    expect(element?.value).toBe('John Doe');
  });

  test('renders email input with required attribute', () => {
    const { container } = render(<Input type="email" placeholder="email@example.com" required />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.type).toBe('email');
    expect(element?.placeholder).toBe('email@example.com');
    expect(element?.required).toBe(true);
  });

  test('renders password input with minLength', () => {
    const { container } = render(<Input type="password" minLength={8} />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.type).toBe('password');
    expect(element?.minLength).toBe(8);
  });

  test('renders number input with min and max', () => {
    const { container } = render(<Input type="number" min={0} max={100} step={5} />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.type).toBe('number');
    expect(element?.min).toBe('0');
    expect(element?.max).toBe('100');
    expect(element?.step).toBe('5');
  });

  test('renders checkbox input with checked state', () => {
    const { container } = render(<Input type="checkbox" checked readOnly />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.type).toBe('checkbox');
    expect(element?.checked).toBe(true);
  });

  test('renders radio input with name', () => {
    const { container } = render(<Input type="radio" name="gender" value="male" />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.type).toBe('radio');
    expect(element?.name).toBe('gender');
    expect(element?.value).toBe('male');
  });

  test('handles onChange event', () => {
    let changeValue = '';
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      changeValue = e.target.value;
    };
    const { container } = render(<Input type="text" onChange={handleChange} />);
    const element = container.querySelector('input') as HTMLInputElement;
    fireEvent.change(element, { target: { value: 'test input' } });
    expect(changeValue).toBe('test input');
  });

  test('renders disabled input', () => {
    const { container } = render(<Input type="text" disabled />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.disabled).toBe(true);
  });

  test('renders date input', () => {
    const { container } = render(<Input type="date" value="2024-01-15" readOnly />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.type).toBe('date');
    expect(element?.value).toBe('2024-01-15');
  });

  test('renders file input with accept attribute', () => {
    const { container } = render(<Input type="file" accept="image/*" />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.type).toBe('file');
    expect(element?.accept).toBe('image/*');
  });

  test('renders input with pattern and title', () => {
    const { container } = render(<Input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Phone format: 123-456-7890" />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.pattern).toBe('[0-9]{3}-[0-9]{3}-[0-9]{4}');
    expect(element?.title).toBe('Phone format: 123-456-7890');
  });

  test('renders input with autocomplete', () => {
    const { container } = render(<Input type="email" autoComplete="email" />);
    const element = container.querySelector('input') as HTMLInputElement;
    expect(element?.autocomplete).toBe('email');
  });
});
