import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Desk } from './pages/desk';

const rootDiv = document.getElementById('root')
if (rootDiv) {
  const root = createRoot(rootDiv);
  root.render(
    <Desk />
  );
}
