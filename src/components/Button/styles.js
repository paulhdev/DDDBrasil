import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.TouchableOpacity`
  height: 65px;
  width: 100%;
  background: ${theme.colors.primary};
  border-radius: 30px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
