import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Stack } from '@chakra-ui/react';
import { LockIcon, AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import ChatRoom from '../components/ChatRoom';

const HomePageBlock = styled.div`
  width: 900px;
  padding: 1rem;
  box-shadow: 1px 1px 15px 15px rgb(0 0 0 / 20%);
  margin: 2rem;
  margin: 0 auto;
`;

export default function HomePage() {
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
  console.log('[inner function]: ', number);
  return (
    <HomePageBlock>
      <div className="home__header">
        <Greetings />
      </div>
      <div className="home__body">
        <LoginPanel />
        <ChatRoomContainer>
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
          <ChatRoom />
        </ChatRoomContainer>
      </div>
      <div className="home__footer"></div>
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

const ChatRoomContainer = ({ children }) => {
  return <ul>{children}</ul>;
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
