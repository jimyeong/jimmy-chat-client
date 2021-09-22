import styled, { css } from 'styled-components';
import {
  AiOutlinePlayCircle,
  AiOutlineCloseCircle,
  AiOutlinePlus,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';

import { BiTrash, BiEdit } from 'react-icons/bi';
import { FaFacebook, FaSignOutAlt } from 'react-icons/fa';

import cn from 'classnames';
import { FiAlertOctagon } from 'react-icons/fi';
import { GoCheck } from 'react-icons/go';
import { pixelToRem, setColor } from '../../helper';
/* 가로선 */

export const VideoPlayIcon = styled(AiOutlinePlayCircle)`
  width: ${(props) => pixelToRem(props.width)};
  height: ${(props) => pixelToRem(props.width)};
  fill: ${(props) => props.fill};
  transition: all 0.1s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    fill: ${(props) => setColor(props.fill, -50)};
  }
  &:active {
    fill: #fff;
  }
`;

export const CircleImageFrame = styled.div`
  display: inline-block;
  width: ${(props) => pixelToRem(props.width)};
  height: ${(props) => pixelToRem(props.height)};
  line-height: ${(props) => pixelToRem(props.height)};
  border-radius: 50%;
  background-color: #ff5252;
  color: #ececec;
  text-align: center;
  color: white;
  overflow: hidden;
  ${(props) =>
    props.userImage &&
    css`
      background: url(${props.userImage}) 50% 50% / cover no-repeat;
    `}
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${pixelToRem(props.fontSize)};
    `}
`;

const LoginState = styled.span`
  width: ${(props) => (props.size ? props.size : '1rem')};
  height: ${(props) => (props.size ? props.size : '1rem')};
  border-radius: 50%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#c8c7c8'};
  display: inline-block;
  &.green {
    background-color: #86bb71;
  }
  &.red {
    background-color: #e38968;
  }
`;
export function LoginStateIcon({ className, size, height, color }) {
  return (
    <LoginState size="8px" className={cn([color, 'status__icon'])}>
      {null}
    </LoginState>
  );
}

export const CloseRounded = styled(AiOutlineCloseCircle)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
  &:hover {
    fill: ${(props) => setColor(props.fill, 20)};
  }
  &:active {
    fill: ${(props) => setColor(props.fill, -20)};
  }
`;

export const ErrorMessageIconAlert = styled(FiAlertOctagon)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
`;
export const SuccessMessageIconAlert = styled(GoCheck)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
`;

export const PlugIcon = styled(AiOutlinePlus)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
`;

export const BSWriteIcon = styled(BsPencilSquare)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
`;
export const TrashCanIcon = styled(BiTrash)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
  &:active {
    fill: ${(props) => setColor(props.fill, -40)};
  }
  &:hover {
    fill: ${(props) => setColor(props.fill, 20)};
  }
`;

export const BiEditIcon = styled(BiEdit)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
  &:active {
    fill: ${(props) => setColor(props.fill, -40)};
  }
  &:hover {
    fill: ${(props) => setColor(props.fill, 20)};
  }
`;

export const AIInstaIcon = styled(AiOutlineInstagram)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
  &:active {
    fill: ${(props) => setColor(props.fill, -40)};
  }
  &:hover {
    fill: ${(props) => setColor(props.fill, 20)};
  }
`;

export const AiOutlineTwitterIcon = styled(AiOutlineTwitter)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
  &:active {
    fill: ${(props) => setColor(props.fill, -40)};
  }
  &:hover {
    fill: ${(props) => setColor(props.fill, 20)};
  }
`;

export const FaFacebookIcon = styled(FaFacebook)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
  &:active {
    fill: ${(props) => setColor(props.fill, -40)};
  }
  &:hover {
    fill: ${(props) => setColor(props.fill, 20)};
  }
`;

export const FaLeaveIcon = styled(FaSignOutAlt)`
  width: ${(props) => pixelToRem(props.size)};
  height: ${(props) => pixelToRem(props.size)};
  fill: ${(props) => props.fill};
  &:active {
    fill: ${(props) => setColor(props.fill, -40)};
  }
  &:hover {
    fill: ${(props) => setColor(props.fill, 20)};
  }
`;
