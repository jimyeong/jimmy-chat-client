import styled from 'styled-components';

const LayoutContainerBlock = styled.div`
  width: 900px;
  padding: 1rem;
  box-shadow: 1px 1px 15px 15px rgb(0 0 0 / 20%);
  margin: 2rem;
  margin: 0 auto;
`;

export function LayoutContainer({ children }) {
  return <LayoutContainerBlock>{children}</LayoutContainerBlock>;
}
