import styled from "styled-components";

export const Li = styled.li`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px 20px 10px 20px;

  &.priority,
  &.priority title,
  &.priority textarea {
    background: #eb8f7a;
    color: #fff;
  }
  &.priority Span:hover,
  &.priority div:hover {
    color: #fff;
  }
`;
export const NoteInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Strong = styled.title`
  display: block;
  font-size: 16px;
  color: #333;
  &:hover {
    cursor: default;
  }
`;
export const DeletedIcon = styled.div`
  color: #fabbad;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    color: #eb8f7a;
    transition: 0.2s;
  }
`;
export const TextArea = styled.textarea`
  padding: 7px;
  margin-top: 7px;
  margin-bottom: 5px;
  width: 100%;
  height: 100px;
  font-size: 14px;
  color: #665;
  border: 0;
  background: #fff;
  resize: none;
  overflow: hidden;
  &:hover {
    cursor: default;
  }
`;
export const Span = styled.span`
  color: #c4c4c4;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    color: #eb8f7a;
    transition: 0.2s;
  }

`;
