import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import styled from 'styled-components';
const SystemPanelBlock = styled.div`
  position: fixed;
  width: 600px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  height: 0;
  overflow: hidden;

  .active_message & {
    top: 30px;
    height: auto;
  }
`;

export function MessageContainer({ children }) {
  return <SystemPanelBlock>{children}</SystemPanelBlock>;
}

export function SystemAlertMessage({ status, message }) {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
