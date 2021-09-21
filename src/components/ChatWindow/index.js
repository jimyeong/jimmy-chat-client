import React, { useEffect } from 'react';

import styled from 'styled-components';
import { pixelToRem, setColor } from '../../helper';
import { LayoutContainer } from '../LayoutContainer';
const ChatWindowBlock = styled.div``;

function ChatWindow({ match }) {
  const {
    params: { id },
  } = match;
  useEffect(() => {
    console.log('Chat Window 마운트');
    return () => {
      console.log('Chat Window 언마운트');
    };
  }, []);
  return (
    <ChatWindowBlock>
      <LayoutContainer>
        <div className="row">
          <div className="col-7">chating display</div>
          <div className="col-3">current User List</div>
        </div>
      </LayoutContainer>
    </ChatWindowBlock>
  );
}

export default ChatWindow;
