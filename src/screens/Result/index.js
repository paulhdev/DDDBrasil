import React, {useState} from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../../global/theme';

import Button from '../../components/Button';

import {
  Container,
  SafeArea,
  Header,
  Title,
  Card,
  ContentCard,
  SubTitle,
  Description,
  ItemList,
  HeaderCard,
  AreaIcon,
  TextIcon,
} from './styles';

console.disableYellowBox = true;

export default function Result({navigation}) {
  const data = navigation.state.params.data;
  const ddd = navigation.state.params.ddd;

  const [isFlipped, setIsFlipped] = useState(false);

  function navigationMain() {
    navigation.navigate('Main');
  }

  function cardFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <SafeArea>
      <Container>
        <Header>
          <TouchableOpacity onPress={navigationMain}>
            <IconMC name="arrow-left" size={50} color={theme.colors.primary} />
          </TouchableOpacity>
          <Title>Resultados da{'\n'}sua busca</Title>
        </Header>
        <FlipCard
          flipVertical={false}
          flipHorizontal={true}
          perspective={900}
          flip={isFlipped}
          clickable={false}>
          {/* Face Side */}
          <Card>
            <ContentCard>
              <SubTitle>cidades que usam o DDD {ddd}</SubTitle>
              <Description>{data.count}</Description>
            </ContentCard>
            <ContentCard>
              <SubTitle>Esse DDD é do estado</SubTitle>
              <Description>{data.payload[0].estado}</Description>
            </ContentCard>
            <Button onPress={cardFlip}>
              Cidades com esse DDD{' '}
              <Icon name="touch-app" size={20} color="#fff" />
            </Button>
          </Card>
          {/* Back Side */}
          <Card>
            <HeaderCard>
              <SubTitle>Cidades com o DDD {ddd}</SubTitle>
              <TouchableOpacity onPress={cardFlip}>
                <AreaIcon>
                  <TextIcon>Virar</TextIcon>
                  <Icon
                    name="touch-app"
                    size={24}
                    color={theme.colors.primary}
                  />
                </AreaIcon>
              </TouchableOpacity>
            </HeaderCard>
            <FlatList
              data={data.payload}
              renderItem={({item, index}) => (
                <ItemList key={index}>
                  {item.cidade} - {item.estado}
                </ItemList>
              )}
            />
          </Card>
        </FlipCard>
        <Button onPress={navigationMain}>Busque um novo DDD</Button>
      </Container>
    </SafeArea>
  );
}
