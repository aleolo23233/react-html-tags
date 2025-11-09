import { Window } from 'happy-dom';
import * as ReactNamespace from 'react';

// Setup happy-dom as the global DOM implementation
const window = new Window();
const document = window.document;

global.window = window as any;
global.document = document as any;
global.HTMLElement = window.HTMLElement as any;
global.Element = window.Element as any;
global.Node = window.Node as any;

// Setup global React for components
(global as any).React = ReactNamespace;
