import React, { useEffect } from 'react';

import styled from 'styled-components';
import { pixelToRem, setColor } from '../../../helper';
import { LayoutContainer } from '../../LayoutContainer';
import { LoginSignal } from '../../LoginSignal';

/* chat user */
const ChatUserBlock = styled.div`
  padding-left: 1rem;
  & + & {
    margin-top: 1rem;
  }
  .row {
    justify-content: flex-start;
  }
  .user__inner {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 1px 1px 7px 2px rgb(0 0 0 / 10%);
  }
  .circle__frame {
    width: ${pixelToRem(40)};
    height: ${pixelToRem(40)};
    border-radius: 50%;
    overflow: hidden;
    background: #0e1297;
    margin: 0 auto;
  }
  .userDesc {
    width: 100%;
    padding-left: 2rem;
  }
`;
function ChatUser() {
  return (
    <ChatUserBlock>
      <div className="row ai-c user__inner">
        <div className="userInfo col">
          <div className="circle__frame">
            <img src="" alt="" />
          </div>
        </div>
        <div className="userDesc">
          <h3>user Nickname</h3>
          <p>user email</p>
        </div>
      </div>
    </ChatUserBlock>
  );
}

function ChatUserWithLoginState() {
  return (
    <ChatUserBlock>
      <div className="row ai-c user__inner">
        <div className="userInfo col">
          <div className="circle__frame">
            <img src="" alt="" />
          </div>
          <LoginSignal />
        </div>
        <div className="userDesc">
          <h3>user Nickname</h3>
          <p>user email</p>
        </div>
      </div>
    </ChatUserBlock>
  );
}

export { ChatUser, ChatUserWithLoginState };
