#!/usr/bin/env bun
/**
 * Script to update all test files with semantic, realistic test cases
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Define void elements that cannot have children
const voidElements = new Set(['area', 'br', 'col', 'embed', 'hr', 'img', 'input', 'param', 'source', 'track', 'wbr']);

// Test templates for different element categories
const testTemplates: Record<string, string[]> = {
  // Already handled manually
  input: [],
  button: [],
  select: [],
  textarea: [],
  form: [],
  label: [],

  // Form elements
  fieldset: [
    `test('renders fieldset with legend', () => {
    const { container } = render(
      <Fieldset>
        <legend>Personal Information</legend>
        <label>Name: <input type="text" /></label>
      </Fieldset>
    );
    const element = container.querySelector('fieldset');
    const legend = element?.querySelector('legend');
    expect(legend?.textContent).toBe('Personal Information');
  });`,
    `test('renders disabled fieldset', () => {
    const { container } = render(<Fieldset disabled><input type="text" /></Fieldset>);
    const element = container.querySelector('fieldset') as HTMLFieldSetElement;
    expect(element?.disabled).toBe(true);
  });`,
    `test('renders fieldset with name attribute', () => {
    const { container } = render(<Fieldset name="user-info">Form fields</Fieldset>);
    const element = container.querySelector('fieldset') as HTMLFieldSetElement;
    expect(element?.name).toBe('user-info');
  });`,
  ],

  legend: [
    `test('renders legend as fieldset caption', () => {
    const { container } = render(<Legend>Contact Details</Legend>);
    const element = container.querySelector('legend');
    expect(element?.textContent).toBe('Contact Details');
  });`,
  ],

  option: [
    `test('renders option with value', () => {
    const { container } = render(<Option value="usa">United States</Option>);
    const element = container.querySelector('option') as HTMLOptionElement;
    expect(element?.value).toBe('usa');
    expect(element?.textContent).toBe('United States');
  });`,
    `test('renders selected option', () => {
    const { container } = render(<Option value="uk" selected>United Kingdom</Option>);
    const element = container.querySelector('option') as HTMLOptionElement;
    expect(element?.selected).toBe(true);
  });`,
    `test('renders disabled option', () => {
    const { container } = render(<Option value="n/a" disabled>Not Available</Option>);
    const element = container.querySelector('option') as HTMLOptionElement;
    expect(element?.disabled).toBe(true);
  });`,
  ],

  optgroup: [
    `test('renders optgroup with label', () => {
    const { container } = render(
      <Optgroup label="North America">
        <option value="usa">USA</option>
        <option value="ca">Canada</option>
      </Optgroup>
    );
    const element = container.querySelector('optgroup') as HTMLOptGroupElement;
    expect(element?.label).toBe('North America');
    const options = element?.querySelectorAll('option');
    expect(options?.length).toBe(2);
  });`,
    `test('renders disabled optgroup', () => {
    const { container } = render(<Optgroup label="Unavailable" disabled><option value="1">Option</option></Optgroup>);
    const element = container.querySelector('optgroup') as HTMLOptGroupElement;
    expect(element?.disabled).toBe(true);
  });`,
  ],

  datalist: [
    `test('renders datalist with options', () => {
    const { container } = render(
      <Datalist id="browsers">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Safari" />
      </Datalist>
    );
    const element = container.querySelector('datalist');
    const options = element?.querySelectorAll('option');
    expect(options?.length).toBe(3);
  });`,
  ],

  output: [
    `test('renders output with calculation result', () => {
    const { container } = render(<Output htmlFor="a b">100</Output>);
    const element = container.querySelector('output') as HTMLOutputElement;
    expect(element?.textContent).toBe('100');
    expect(element?.htmlFor).toBe('a b');
  });`,
    `test('renders output with name attribute', () => {
    const { container } = render(<Output name="result">42</Output>);
    const element = container.querySelector('output') as HTMLOutputElement;
    expect(element?.name).toBe('result');
  });`,
  ],

  // Media elements
  img: [
    `test('renders img with src and alt', () => {
    const { container } = render(<Img src="/photo.jpg" alt="A beautiful sunset" />);
    const element = container.querySelector('img') as HTMLImageElement;
    expect(element?.src).toContain('/photo.jpg');
    expect(element?.alt).toBe('A beautiful sunset');
  });`,
    `test('renders img with width and height', () => {
    const { container } = render(<Img src="/logo.png" width={200} height={100} alt="Logo" />);
    const element = container.querySelector('img') as HTMLImageElement;
    expect(element?.width).toBe(200);
    expect(element?.height).toBe(100);
  });`,
    `test('renders img with loading attribute', () => {
    const { container } = render(<Img src="/image.jpg" loading="lazy" alt="Lazy loaded" />);
    const element = container.querySelector('img') as HTMLImageElement;
    expect(element?.loading).toBe('lazy');
  });`,
    `test('renders img with srcset', () => {
    const { container } = render(<Img src="/default.jpg" srcSet="/small.jpg 480w, /large.jpg 1080w" alt="Responsive" />);
    const element = container.querySelector('img') as HTMLImageElement;
    expect(element?.srcset).toContain('480w');
  });`,
  ],

  video: [
    `test('renders video with src and controls', () => {
    const { container } = render(<Video src="/video.mp4" controls />);
    const element = container.querySelector('video') as HTMLVideoElement;
    expect(element?.src).toContain('/video.mp4');
    expect(element?.controls).toBe(true);
  });`,
    `test('renders video with width and height', () => {
    const { container } = render(<Video width={640} height={360} />);
    const element = container.querySelector('video') as HTMLVideoElement;
    expect(element?.width).toBe(640);
    expect(element?.height).toBe(360);
  });`,
    `test('renders video with autoplay and muted', () => {
    const { container } = render(<Video autoPlay muted loop />);
    const element = container.querySelector('video') as HTMLVideoElement;
    expect(element?.muted).toBe(true);
    expect(element?.loop).toBe(true);
  });`,
    `test('renders video with poster', () => {
    const { container } = render(<Video poster="/thumbnail.jpg" />);
    const element = container.querySelector('video') as HTMLVideoElement;
    expect(element?.poster).toContain('/thumbnail.jpg');
  });`,
  ],

  audio: [
    `test('renders audio with src and controls', () => {
    const { container } = render(<Audio src="/song.mp3" controls />);
    const element = container.querySelector('audio') as HTMLAudioElement;
    expect(element?.src).toContain('/song.mp3');
    expect(element?.controls).toBe(true);
  });`,
    `test('renders audio with autoplay and loop', () => {
    const { container } = render(<Audio autoPlay loop />);
    const element = container.querySelector('audio') as HTMLAudioElement;
    expect(element?.loop).toBe(true);
  });`,
    `test('renders audio with preload attribute', () => {
    const { container } = render(<Audio preload="metadata" />);
    const element = container.querySelector('audio') as HTMLAudioElement;
    expect(element?.preload).toBe('metadata');
  });`,
  ],

  picture: [
    `test('renders picture with source and img', () => {
    const { container } = render(
      <Picture>
        <source srcSet="/wide.jpg" media="(min-width: 800px)" />
        <img src="/narrow.jpg" alt="Responsive" />
      </Picture>
    );
    const element = container.querySelector('picture');
    const img = element?.querySelector('img');
    expect(img).toBeTruthy();
  });`,
  ],

  source: [
    `test('renders source with src and type', () => {
    const { container } = render(<Source src="/video.mp4" type="video/mp4" />);
    const element = container.querySelector('source') as HTMLSourceElement;
    expect(element?.src).toContain('/video.mp4');
    expect(element?.type).toBe('video/mp4');
  });`,
    `test('renders source with srcset and media', () => {
    const { container } = render(<Source srcSet="/large.jpg" media="(min-width: 1000px)" />);
    const element = container.querySelector('source') as HTMLSourceElement;
    expect(element?.media).toBe('(min-width: 1000px)');
  });`,
  ],

  track: [
    `test('renders track with src and kind', () => {
    const { container } = render(<Track src="/subtitles.vtt" kind="subtitles" srcLang="en" label="English" />);
    const element = container.querySelector('track') as HTMLTrackElement;
    expect(element?.src).toContain('/subtitles.vtt');
    expect(element?.kind).toBe('subtitles');
    expect(element?.srclang).toBe('en');
  });`,
    `test('renders default track', () => {
    const { container } = render(<Track src="/captions.vtt" kind="captions" default />);
    const element = container.querySelector('track') as HTMLTrackElement;
    expect(element?.default).toBe(true);
  });`,
  ],

  embed: [
    `test('renders embed with src and type', () => {
    const { container } = render(<Embed src="/plugin.swf" type="application/x-shockwave-flash" />);
    const element = container.querySelector('embed') as HTMLEmbedElement;
    expect(element?.src).toContain('/plugin.swf');
    expect(element?.type).toBe('application/x-shockwave-flash');
  });`,
    `test('renders embed with dimensions', () => {
    const { container } = render(<Embed src="/content.pdf" width={600} height={400} />);
    const element = container.querySelector('embed') as HTMLEmbedElement;
    expect(element?.width).toBe('600');
    expect(element?.height).toBe('400');
  });`,
  ],

  iframe: [
    `test('renders iframe with src', () => {
    const { container } = render(<Iframe src="https://example.com" title="External content" />);
    const element = container.querySelector('iframe') as HTMLIFrameElement;
    expect(element?.src).toBe('https://example.com');
    expect(element?.title).toBe('External content');
  });`,
    `test('renders iframe with dimensions', () => {
    const { container } = render(<Iframe width={800} height={600} />);
    const element = container.querySelector('iframe') as HTMLIFrameElement;
    expect(element?.width).toBe('800');
    expect(element?.height).toBe('600');
  });`,
    `test('renders iframe with sandbox', () => {
    const { container } = render(<Iframe sandbox="allow-scripts allow-same-origin" />);
    const element = container.querySelector('iframe') as HTMLIFrameElement;
    expect(element?.sandbox.contains('allow-scripts')).toBe(true);
  });`,
    `test('renders iframe with loading attribute', () => {
    const { container } = render(<Iframe loading="lazy" />);
    const element = container.querySelector('iframe') as HTMLIFrameElement;
    expect(element?.loading).toBe('lazy');
  });`,
  ],

  object: [
    `test('renders object with data and type', () => {
    const { container } = render(<Object data="/document.pdf" type="application/pdf">PDF viewer not available</Object>);
    const element = container.querySelector('object') as HTMLObjectElement;
    expect(element?.data).toContain('/document.pdf');
    expect(element?.type).toBe('application/pdf');
  });`,
    `test('renders object with dimensions', () => {
    const { container } = render(<Object data="/content.swf" width={400} height={300} />);
    const element = container.querySelector('object') as HTMLObjectElement;
    expect(element?.width).toBe('400');
    expect(element?.height).toBe('300');
  });`,
  ],

  param: [
    `test('renders param with name and value', () => {
    const { container } = render(<Param name="autoplay" value="true" />);
    const element = container.querySelector('param') as HTMLParamElement;
    expect(element?.name).toBe('autoplay');
    expect(element?.value).toBe('true');
  });`,
  ],

  canvas: [
    `test('renders canvas with dimensions', () => {
    const { container } = render(<Canvas width={800} height={600}>Canvas not supported</Canvas>);
    const element = container.querySelector('canvas') as HTMLCanvasElement;
    expect(element?.width).toBe(800);
    expect(element?.height).toBe(600);
  });`,
  ],

  // Link/anchor elements
  a: [
    `test('renders anchor with href', () => {
    const { container } = render(<A href="https://example.com">Visit Example</A>);
    const element = container.querySelector('a') as HTMLAnchorElement;
    expect(element?.href).toBe('https://example.com');
    expect(element?.textContent).toBe('Visit Example');
  });`,
    `test('renders anchor with target blank', () => {
    const { container } = render(<A href="/page" target="_blank" rel="noopener noreferrer">Open in new tab</A>);
    const element = container.querySelector('a') as HTMLAnchorElement;
    expect(element?.target).toBe('_blank');
    expect(element?.rel).toBe('noopener noreferrer');
  });`,
    `test('renders anchor with download attribute', () => {
    const { container } = render(<A href="/file.pdf" download="document.pdf">Download</A>);
    const element = container.querySelector('a') as HTMLAnchorElement;
    expect(element?.download).toBe('document.pdf');
  });`,
    `test('renders anchor with hreflang', () => {
    const { container } = render(<A href="/es/page" hrefLang="es">Spanish version</A>);
    const element = container.querySelector('a') as HTMLAnchorElement;
    expect(element?.hreflang).toBe('es');
  });`,
  ],

  nav: [
    `test('renders nav with links', () => {
    const { container } = render(
      <Nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Nav>
    );
    const element = container.querySelector('nav');
    const links = element?.querySelectorAll('a');
    expect(links?.length).toBe(3);
  });`,
    `test('renders nav with aria-label', () => {
    const { container } = render(<Nav aria-label="Main navigation">Navigation content</Nav>);
    const element = container.querySelector('nav');
    expect(element?.getAttribute('aria-label')).toBe('Main navigation');
  });`,
  ],

  menu: [
    `test('renders menu with items', () => {
    const { container } = render(
      <Menu>
        <li><button>File</button></li>
        <li><button>Edit</button></li>
      </Menu>
    );
    const element = container.querySelector('menu');
    const items = element?.querySelectorAll('li');
    expect(items?.length).toBe(2);
  });`,
  ],

  // Continue with more categories...
  // Due to length, showing pattern for remaining elements
};

// Export for use
console.log('Test templates defined. Ready to update test files.');
