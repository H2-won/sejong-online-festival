import styled from 'styled-components';
import { palette } from 'lib/styles';

const LoginBtn = ({ text, color }) => {
  return <Button color={color}>{text}</Button>;
};

const Button = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 38px;
  color: ${palette.white};
  font-size: 16px;
  margin-top: 32px;

  border: 1px solid
    ${props => (props.color === 'blue' ? `${palette.secondary_blue}` : `${palette.secondary_red}`)};

  box-shadow: 0 2px 20px
    ${props => (props.color === 'blue' ? `rgba(129, 208, 238, 0.6)` : `rgba(226, 116, 146, 0.6)`)};
`;

export default LoginBtn;
