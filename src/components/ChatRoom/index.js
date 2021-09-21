import styled from 'styled-components';
import { pixelToRem, setColor } from '../../helper';
const ChatRoomBlock = styled.li`
  cursor: pointer;
  padding: 2rem;
  background: #f5f5ff;
  border-radius: 6px;
  padding-bottom: 1rem;
  box-shadow: 1px 1px 21px 3px rgb(0 0 0 / 20%);
  transition: all 0.3 cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background: ${setColor('#f5f5ff', 30)};
  }
  &:active {
    background: ${setColor('#f5f5ff', -30)};
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const ChatRoom = ({ item, onClick }) => {
  return (
    <ChatRoomBlock className="" onClick={() => onClick(2)}>
      <h3 className="tit-ft3 fw-m">영어공부 같이 하실 분 구합니다.</h3>
      <p>
        영어공부 하시다가 자꾸 중도포기 하시게 되는 분들, 영어원서 같이 읽으면서
        공부하는 모임입니다.
      </p>
      <p>#영어공부 #원서 #영포자</p>
      <p>정원 20명</p>
    </ChatRoomBlock>
  );
};

const ChatRoomContainerBlock = styled.ul``;
export const ChatRoomContainer = ({ children, className }) => {
  return (
    <ChatRoomContainerBlock className={className}>
      {children}
    </ChatRoomContainerBlock>
  );
};
