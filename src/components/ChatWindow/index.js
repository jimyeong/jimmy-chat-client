import React, { useEffect } from 'react';

import styled from 'styled-components';
import { pixelToRem, setColor } from '../../helper';
import { LayoutContainer } from '../LayoutContainer';
const ChatWindowBlock = styled.div`
  .textarea {
    resize: none;
    padding: 0.5rem;
  }
`;

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
        <div className="row ai-s">
          <div className="col-7">
            <div className="wrapper col">
              <ChatDisplay />
              <textarea className="textarea"></textarea>
            </div>
          </div>
          <div className="col-3">
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
          </div>
        </div>
      </LayoutContainer>
    </ChatWindowBlock>
  );
}

export default ChatWindow;

const ChatDisplayBlock = styled.div`
  height: 700px;
  background: #b1c5e3;
`;
const ChatDisplay = () => {
  return <ChatDisplayBlock>messages</ChatDisplayBlock>;
};

/* chat user */
const ChatUserBlock = styled.div`
  .row {
    justify-content: flex-start;
  }
`;
const ChatUser = () => {
  return (
    <ChatUserBlock>
      <div className="row ai-c">
        <div className="userInfo col">
          <img src="" alt="userImage" />
          <div className="login">logout</div>
        </div>
        <div className="userDesc">
          <h3>user Nickname</h3>
          <p>user email</p>
        </div>
      </div>
    </ChatUserBlock>
  );
};
