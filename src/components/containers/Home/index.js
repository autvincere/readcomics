import React from 'react';
import {Container} from './styles';
import {ScrollView} from 'react-native';
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
  return (
    <ScrollView>
      <Container
      // style={{ backgroundColor: '#000000' }}
      >
        <ThumbComic
          stackScreen="Comic"
          nameEdition={batmanEdition}
          url={require('../../../assets/img/batman_cover.jpg')}>
          Batman
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={xmenEdition}
          url={require('../../../assets/img/xmen_cover.jpg')}>
          Xmen
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={darkAges}
          url={require('../../../assets/img/dark_ages_cover.jpg')}>
          Dark Ages
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={avengers}
          url={require('../../../assets/img/avengers_cover.jpg')}>
          The Avengers
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={superman}
          url={require('../../../assets/img/superman_cover.jpg')}>
          Superman
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={flash}
          url={require('../../../assets/img/the_flash_cover.jpg')}>
          The Flash
        </ThumbComic>
      </Container>
    </ScrollView>
  );
};
Index.displayName = 'Home_container';
export default Index;
