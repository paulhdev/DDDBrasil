import styled from 'styled-components/native';
import theme from '../../global/theme';

export const SafeArea = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  padding: 2% 5%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2% 0;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${theme.colors.primary};
  text-align: right;
`;

export const Card = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,

  elevation: 8,
})`
  border-radius: 15px;
  padding: 10px 20px;
  margin: 20px 0;
  background: #fff;
  height: 350px;
  width: 100%;
`;

export const ContentCard = styled.View`
  padding: 10px 0;
  align-items: center;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #666;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 60px;
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const ItemList = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin: 10px 0 5px 0;
  width: 100%;
  background: ${theme.colors.primary};
  padding: 15px 10px;
  border-radius: 5px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const AreaIcon = styled.View`
  flex-direction: row;
  align-items: center;

  border-width: 2px;
  border-color: ${theme.colors.primary};
  border-radius: 5px;
  padding: 2px 3px;
`;

export const TextIcon = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.primary};
`;
