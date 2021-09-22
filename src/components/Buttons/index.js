import styled from 'styled-components';
import { AppColorTheme } from '../../config';

import { setColor } from '../../helper';

const ButtonContainerBlock = styled.button`
  background: ${AppColorTheme.whiteSmoke};
  padding: 1rem;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background: ${setColor(AppColorTheme.whiteSmoke, 30)};
  }
  &:active {
    background: ${setColor(AppColorTheme.whiteSmoke, -30)};
  }
`;

function ButtonContainer({ children, className, onClick }) {
  return (
    <ButtonContainerBlock onClick={onClick} className={className}>
      {children}
    </ButtonContainerBlock>
  );
}

export { ButtonContainer };
