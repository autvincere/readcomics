import React, {useContext} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import {ThemeContext} from '../../../contexts/ThemeProvider';
import {Container} from './styles';
import ThumbComic from '../../atoms/ThumbComic';
import {
  batmanEdition,
  xmenEdition,
  darkAges,
  avengers,
  superman,
  flash,
} from '../../../utils/data/index';

const Index = () => {
  const {colors} = useContext(ThemeContext);
  const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView>
      <Container
        windowHeight={windowHeight}
        style={{backgroundColor: colors.backgroundColor}}>
        <ThumbComic
          stackScreen="Comic"
          nameEdition={batmanEdition}
          url={require('../../../assets/img/batman_cover.jpg')}
          colorText={colors.textColor}>
          Batman
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={xmenEdition}
          url={require('../../../assets/img/xmen_cover.jpg')}
          colorText={colors.textColor}>
          Xmen
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={darkAges}
          url={require('../../../assets/img/dark_ages_cover.jpg')}
          colorText={colors.textColor}>
          Dark Ages
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={avengers}
          url={require('../../../assets/img/avengers_cover.jpg')}
          colorText={colors.textColor}>
          The Avengers
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={superman}
          url={require('../../../assets/img/superman_cover.jpg')}
          colorText={colors.textColor}>
          Superman
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={flash}
          url={require('../../../assets/img/the_flash_cover.jpg')}
          colorText={colors.textColor}>
          The Flash
        </ThumbComic>
      </Container>
    </ScrollView>
  );
};
Index.displayName = 'Home_container';
export default Index;
