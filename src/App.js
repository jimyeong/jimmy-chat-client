import React, { useContext, createContext, useEffect, useReducer } from 'react';
import HomePage from './pages/HomePage';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReigisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { reducer, initialState } from './reducer';
import ChatWindow from './components/ChatWindow';
import {
  SystemAlertMessage,
  MessageContainer,
} from './components/MessagePanel';
export const appContext = createContext(null);
const theme = extendTheme({
  fonts: {
    heading: 'Heading Font Name',
    body: 'Body Font Name',
  },
});
const AppBlock = styled.div`
  .ftc-l {
    color: #666;
  }
  .ftc-d {
    color: #333;
  }
  .ftw-l {
    font-weight: 300;
  }
  .main__title {
    text-transform: capitalize;
    font-size: 21px;
  }
  .main__txt {
    font-size: 18px;
  }
`;

function App() {
  const [state, dispatch] = useReducer(initialState, reducer);
  return (
    <Router>
      <ChakraProvider>
        <appContext.Provider value={{ state, dispatch }}>
          <AppBlock className="App">
            <MessageContainer>
              <SystemAlertMessage
                status="error"
                message="Your Chakra experience may be degraded "
              />
              <SystemAlertMessage
                status="success"
                message="Your Chakra experience may be degraded "
              />
            </MessageContainer>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/register">
              <ReigisterPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route
              path="/room/:id"
              render={(props) => <ChatWindow {...props} />}
            />
          </AppBlock>
        </appContext.Provider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
