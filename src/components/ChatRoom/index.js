import styled from 'styled-components';

const ChatRoomBlock = styled.li`
  padding: 2rem;
  background: white;
  border-radius: 6px;
  padding-bottom: 1rem;
  box-shadow: 1px 1px 21px 3px rgb(0 0 0 / 20%);

  & + & {
    margin-top: 1rem;
  }
`;

const ChatRoom = ({item}) => {
  return (
    <ChatRoomBlock className="">
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

export default ChatRoom;
