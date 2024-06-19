import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Desk } from './pages/desk';

const root = createRoot(document.getElementById('root')!);
root.render(
  <Desk />
);
