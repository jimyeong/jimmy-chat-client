import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Stack } from '@chakra-ui/react';
import { LockIcon, AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { ChatRoom, ChatRoomContainer } from '../components/Chat/ChatRoom';
import { LayoutContainer } from '../components/LayoutContainer';
import { Route, useHistory } from 'react-router-dom';
import ChatWindow from '../components/Chat/ChatWindow';

const HomePageBlock = styled.div``;

export default function HomePage() {
  const history = useHistory();
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log('컴포넌트 마운트');
    const newNumber = number + 1;
    setNumber(newNumber);
    console.log('[useEffect]: ', number);
    return () => {
      console.log('컴포넌트 언마운트');
    };
  }, []);

  const onClickChatRoom = (idx) => {
    history.push(`/room/${idx}`);
  };

  return (
    <HomePageBlock>
      <LayoutContainer>
        <div className="home__header">
          <Greetings />
        </div>
        <div className="home__body">
          <LoginPanel />
          <ChatRoomContainer className="mt-2">
            <ChatRoom onClick={onClickChatRoom} />
            <ChatRoom onClick={onClickChatRoom} />
            <ChatRoom onClick={onClickChatRoom} />
            <ChatRoom onClick={onClickChatRoom} />
          </ChatRoomContainer>
        </div>
        <div className="home__footer"></div>
      </LayoutContainer>
    </HomePageBlock>
  );
}

const Greetings = () => {
  return (
    <React.Fragment>
      <h3 className="main__title ftc-b">welcome to jimmy-chat</h3>
      <p className="main__txt ftc-l ftw-l">
        to get into the chat room, you should sign in
      </p>
    </React.Fragment>
  );
};

const LoginPanel = () => {
  return (
    <div>
      <Stack direction="row" marginTop={3} spacing={12}>
        <Link to="/register">
          <Button leftIcon={<AddIcon />} colorScheme="pink" variant="solid">
            Sign in
          </Button>
        </Link>
        <Link to="/login">
          <Button rightIcon={<LockIcon />} colorScheme="blue" variant="outline">
            Login
          </Button>
        </Link>
      </Stack>
    </div>
  );
};
