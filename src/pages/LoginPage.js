import React from 'react';
import styled from 'styled-components';
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { LockIcon, EmailIcon } from '@chakra-ui/icons';

const LoginPageBlock = styled.div``;

export default function LoginPage() {
  return (
    <LoginPageBlock>
      <div className="home__header">
        <h3 className="main__title ftc-b">Login</h3>
      </div>
      <div className="home__body">
        <Stack marginTop={5} direction="column">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input type="tel" placeholder="Email" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<LockIcon color="gray.300" />}
            />
            <Input placeholder="Enter amount" />
          </InputGroup>
        </Stack>
      </div>
      <div className="home__footer"></div>
    </LoginPageBlock>
  );
}
