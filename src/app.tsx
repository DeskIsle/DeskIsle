import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Desk } from './pages/desk';
import { ModalStackContainer } from 'rc-modal-sheet';
import { motion } from 'framer-motion';

const root = createRoot(document.getElementById('root')!);
root.render(
  <ModalStackContainer m={motion}>
    <Desk />
  </ModalStackContainer>
);
