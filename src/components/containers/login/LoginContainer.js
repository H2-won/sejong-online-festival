import styled from 'styled-components';
import Logo from 'components/layouts/Logo';
// presenters
import Period from 'components/presenters/login/Period';
import Inputs from 'components/presenters/login/Inputs';
import SubText from 'components/presenters/login/SubText';
import LoginBtn from 'components/presenters/login/LoginBtn';

const Background = styled.div`
  position: relative;
  background: #0a0511;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function LoginContainer() {
  return (
    <Background>
      <Container>
        <Period />
        <Logo />
        <Inputs id="학번" pw="비밀번호" />
        <SubText />
        <LoginBtn text="로그인" color="red" />
      </Container>
    </Background>
  );
}

export default LoginContainer;
