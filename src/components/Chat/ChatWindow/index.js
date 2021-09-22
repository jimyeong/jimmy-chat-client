import React, { useEffect } from 'react';

import styled from 'styled-components';
import { pixelToRem, setColor } from '../../../helper';
import { LayoutContainer } from '../../LayoutContainer';
import { ChatUserWithLoginState } from '../ChatUser';
import { FaLeaveIcon } from '../../Icons';
import { AppColorTheme } from '../../../config/colors';
import { uiConfig } from '../../../config';
import { ButtonContainer } from '../../Buttons';
import { useHistory } from 'react-router-dom';

const ChatWindowBlock = styled.div`
  .textarea {
    resize: none;
    padding: 0.5rem;
  }
  .controll__panel {
    position: relative;
    height: ${uiConfig.Chat.ChatWindowHeight};
  }
  .btns__container {
    position: absolute;
    top: 100%;
    background: #fff;
    box-shadow: ${uiConfig.shadow};
    left: 1rem;
    border-radius: ${uiConfig.borderRadius};
  }
  .btn-small {
    width: ${pixelToRem(40)};
  }
`;

function ChatWindow({ match }) {
  const onClickLeave = () => {
    history.push('/');
  };
  const history = useHistory();
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
          <div className="col-3 col controll__panel">
            <div className="users">
              <ChatUserWithLoginState />
              <ChatUserWithLoginState />
              <ChatUserWithLoginState />
              <ChatUserWithLoginState />
              <ChatUserWithLoginState />
            </div>
            <div className="btns__container">
              <ButtonContainer onClick={onClickLeave}>
                <FaLeaveIcon size={30} fill={AppColorTheme.red} />
              </ButtonContainer>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </ChatWindowBlock>
  );
}

export default ChatWindow;

const ChatDisplayBlock = styled.div`
  height: ${uiConfig.Chat.ChatWindowHeight};
  overflow-y: scroll;
  background: #b1c5e3;
`;
const ChatDisplay = () => {
  return <ChatDisplayBlock></ChatDisplayBlock>;
};
