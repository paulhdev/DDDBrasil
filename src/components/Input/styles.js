import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
  padding: 0 15px;
  height: 65px;
  background: transparent;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${theme.colors.primary};
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.primary,
})`
  flex: 1;
  font-size: 20px;
  margin-left: 10px;
  color: #2c2c2c;
`;
