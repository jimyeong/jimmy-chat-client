import React, { useEffect } from 'react';

import styled from 'styled-components';
import { pixelToRem, setColor } from '../../helper';

const LoginSignalBlock = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  .login__state {
    width: ${pixelToRem(8)};
    height: ${pixelToRem(8)};
    border-radius: 50%;
    overflow: hidden;
    margin-right: 3px;
    &.green {
      background: green;
    }
    &.red {
      background: red;
    }
  }
`;

function LoginSignal() {
  return (
    <LoginSignalBlock>
      <div className="login__state red"></div>
      <div className="login">logout</div>
    </LoginSignalBlock>
  );
}

export { LoginSignal };
