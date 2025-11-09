import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Form } from '../Form';

describe('Form', () => {
  test('renders form element', () => {
    const { container } = render(<Form>Test content</Form>);
    const element = container.querySelector('form');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Form ref={ref}>Test</Form>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('form');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Form className="test-class" id="test-id" data-testid="test">
        Content
      </Form>
    );
    const element = container.querySelector('form');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders form with action and method', () => {
    const { container } = render(<Form action="/submit" method="post">Form content</Form>);
    const element = container.querySelector('form') as HTMLFormElement;
    expect(element?.getAttribute('action')).toBe('/submit');
    expect(element?.method).toBe('post');
  });

  test('handles onSubmit event', () => {
    let submitted = false;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      submitted = true;
    };
    const { container } = render(<Form onSubmit={handleSubmit}>Form content</Form>);
    const element = container.querySelector('form') as HTMLFormElement;
    fireEvent.submit(element);
    expect(submitted).toBe(true);
  });

  test('renders form with enctype for file uploads', () => {
    const { container } = render(<Form encType="multipart/form-data">Form content</Form>);
    const element = container.querySelector('form') as HTMLFormElement;
    expect(element?.enctype).toBe('multipart/form-data');
  });

  test('renders form with autocomplete disabled', () => {
    const { container } = render(<Form autoComplete="off">Form content</Form>);
    const element = container.querySelector('form') as HTMLFormElement;
    expect(element?.autocomplete).toBe('off');
  });

  test('renders form with noValidate attribute', () => {
    const { container } = render(<Form noValidate>Form content</Form>);
    const element = container.querySelector('form') as HTMLFormElement;
    expect(element?.noValidate).toBe(true);
  });

  test('renders form with target attribute', () => {
    const { container } = render(<Form target="_blank">Form content</Form>);
    const element = container.querySelector('form') as HTMLFormElement;
    expect(element?.target).toBe('_blank');
  });

  test('renders form with name attribute', () => {
    const { container } = render(<Form name="contact-form">Form content</Form>);
    const element = container.querySelector('form') as HTMLFormElement;
    expect(element?.name).toBe('contact-form');
  });

  test('renders form with accept-charset', () => {
    const { container } = render(<Form acceptCharset="UTF-8">Form content</Form>);
    const element = container.querySelector('form') as HTMLFormElement;
    expect(element?.getAttribute('accept-charset')).toBe('UTF-8');
  });
});
