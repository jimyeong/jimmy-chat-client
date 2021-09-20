import React from 'react';
import styled from 'styled-components';
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Container,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import {
  ArrowBackIcon,
  EmailIcon,
  LockIcon,
  CheckCircleIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const ReigisterPageBlock = styled.div``;

export default function ReigisterPage() {
  return (
    <ReigisterPageBlock>
      <Container
        boxShadow="1px -5px 17px -2px rgba(0,0,0,0.2)"
        padding={6}
        borderRadius={5}
        backgroundColor="#f9f8f9"
        centerContent
      >
        <div className="home__header">
          <h3 className="main__title ftc-b">
            <b>register</b>
          </h3>
        </div>
        <div className="home__body">
          <Stack marginTop={5} direction="column">
            <Link to="/">
              <b>Go back</b>
              <ArrowBackIcon w={10} h={10} color="blue.600" />
            </Link>
          </Stack>
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
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children={<LockIcon color="gray.300" />}
              />
              <Input type="text" placeholder="name" />
            </InputGroup>
            <ButtonGroup>
              <Button
                rightIcon={<CheckCircleIcon />}
                colorScheme="green"
                variant="outline"
              >
                Submit
              </Button>
              <Button
                rightIcon={<CloseIcon />}
                colorScheme="red"
                variant="outline"
              >
                Cancel
              </Button>
            </ButtonGroup>
          </Stack>
        </div>
        <div className="home__footer"></div>
      </Container>
    </ReigisterPageBlock>
  );
}
