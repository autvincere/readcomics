import React, {useState, useContext} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ThemeContext} from '../../../contexts/ThemeProvider';
import {Container, Text, ImageComic} from './styles';
import {ApiUrl} from '../../../utils/data/index';
import useFetchUrl from '../../../hooks/useFetchUrl';

const Index = ({route}) => {
  let comicEdition = route.params;
  // console.log(ApiUrl(comicEdition));
  const windowHeight = Dimensions.get('window').height;
  // const windowWidth = Dimensions.get('window').width;
  // console.log(windowHeight);

  const {colors} = useContext(ThemeContext);

  const [numberEdition, setNumberEdition] = useState(1);
  const [numberPage, setNumberPage] = useState(1);
  const {isFetching, error, data} = useFetchUrl(
    ApiUrl(comicEdition, numberEdition, numberPage),
  );
  const handleNext = () => {
    setNumberPage(prevState => +prevState + 1);
  };
  const handlePrev = () => {
    if (numberPage === 0) {
      setNumberPage(1);
    }
    setNumberPage(prevState => +prevState - 1);
  };
  // console.log(ApiUrl(comicEdition, numberEdition, numberPage));
  //console.log(numberPage);
  return (
    <ScrollView>
      <Container style={{backgroundColor: colors.backgroundColor}}>
        {isFetching && (
          <>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Loading...</Text>
          </>
        )}
        {error && <Text>{error.message}</Text>}
        {data && (
          <>
            {/* Convertir a Template aca */}
            <ImageComic
              windowHeight={windowHeight}
              resizeMode="center"
              source={{
                uri: data,
              }}
            />
            {/* Botonera */}
            <View
              style={{
                alignSelf: 'center',
                width: '100%',
                height: 40,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 100,
                  backgroundColor: '#c5c5c5',
                }}
                onPress={handlePrev}>
                <Text
                  style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
                  Prev
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 100,
                  marginHorizontal: 20,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
                  {numberPage}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 100,
                  backgroundColor: '#c5c5c5',
                }}
                onPress={handleNext}>
                <Text
                  style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Container>
    </ScrollView>
  );
};

Index.displayName = 'Comic_Index_Template';
export default Index;
