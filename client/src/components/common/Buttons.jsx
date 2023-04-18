import styled from "styled-components";

const ButtonCompo = styled.button`
  height: 38px;
  background-color: #0a95ff;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  padding: 10px;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
`;
const AskQuestionBtn = () => {
  return (
    <ButtonCompo>
      <span>Ask Question</span>
    </ButtonCompo>
  );
};

const PostAnswerBtn = () => {
  return (
    <ButtonCompo>
      <span>Post Your Answer</span>
    </ButtonCompo>
  );
};

const ButtonLogin = styled.button`
  height: 38px;
  background-color: #0a95ff;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  padding: 10px;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
`;

const LoginBtn = ({children,...rest}) => {
  return (
    <LoginBtn {...rest}>{children}</LoginBtn>
  );
};

export { AskQuestionBtn, PostAnswerBtn };
