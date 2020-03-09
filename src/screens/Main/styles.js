import styled from 'styled-components/native';
import theme from '../../global/theme';

export const SafeArea = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 60px 5% 0 5%;
`;

export const TextApp = styled.Text`
  color: ${theme.colors.primary};
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const MessageError = styled.Text`
  color: ${theme.colors.error};
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  align-self: flex-start;
`;
