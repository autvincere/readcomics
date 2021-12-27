import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Container, Text} from './styles';
import {ApiUrl} from '../../../utils/data/index';
import useFetchUrl from '../../../hooks/useFetchUrl';

const Index = ({navigation, route}) => {
  let comicEdition = route.params;
  // console.log(ApiUrl(comicEdition));
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  // console.log(windowHeight);

  const [numberEdition, setNumberEdition] = useState(1);
  const [numberPage, setNumberPage] = useState(1);
  const {isFetching, error, data} = useFetchUrl(
    ApiUrl(comicEdition, numberEdition, numberPage),
  );
  const handleNext = () => {
    if (numberPage === 0) {
      return 1;
    }
    setNumberPage(prevState => +prevState + 1);
    console.log('next');
  };
  const handlePrev = () => {
    if (numberPage === 0) {
      return 1;
    }
    setNumberPage(prevState => +prevState - 1);
  };
  console.log(ApiUrl(comicEdition, numberEdition, numberPage));
  //console.log(numberPage);

  useEffect(() => {
    if (numberPage === 0) {
      setNumberPage(1);
      console.log('setNumberPage(1)');
    }
  }, [numberPage]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          {isFetching && (
            <>
              <ActivityIndicator size="large" color="#00ff00" />
              <Text>Loading...</Text>
            </>
          )}
          {error && <Text>{error.message}</Text>}
          {data && (
            <>
              <Image
                style={{
                  width: '100%',
                  height: windowHeight - 200,
                  minHeight: 200,
                  resizeMode: 'contain',
                  flex: 1,
                }}
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
                  backgroundColor: 'red',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: 100,
                    backgroundColor: 'pink',
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
                    backgroundColor: 'cyan',
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
    </SafeAreaView>
  );

  // if (isFetching) {
  //   return (
  //     <SafeAreaView>
  //       <ScrollView>
  //         <Container>
  //           <ActivityIndicator size="large" color="#00ff00" />
  //           <Text>Loading...</Text>
  //         </Container>
  //       </ScrollView>
  //     </SafeAreaView>
  //   );
  // } else if (error) {
  //   return (
  //     <>
  //       <Text>{error.message}</Text>
  //     </>
  //   );
  // } else {
  //   return (
  //     <ScrollView>
  //       <Container>
  //         <Image
  //           style={{
  //             width: '100%',
  //             height: windowHeight - 200,
  //             minHeight: 200,
  //             resizeMode: 'contain',
  //             flex: 1,
  //           }}
  //           source={{
  //             uri: data,
  //           }}
  //         />

  //         {/* Botonera */}
  //         <View
  //           style={{
  //             alignSelf: 'center',
  //             width: '100%',
  //             height: 40,
  //             backgroundColor: 'red',
  //             flexDirection: 'row',
  //             flexWrap: 'wrap',
  //             justifyContent: 'center',
  //           }}>
  //           <TouchableOpacity
  //             style={{
  //               width: 100,
  //               backgroundColor: 'pink',
  //             }}
  //             onPress={handlePrev}>
  //             <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
  //               Prev
  //             </Text>
  //           </TouchableOpacity>

  //           <View
  //             style={{
  //               width: 100,
  //               marginHorizontal: 20,
  //               backgroundColor: 'white',
  //             }}>
  //             <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
  //               {numberPage}
  //             </Text>
  //           </View>
  //           <TouchableOpacity
  //             style={{
  //               width: 100,
  //               backgroundColor: 'cyan',
  //             }}
  //             onPress={handleNext}>
  //             <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
  //               Next
  //             </Text>
  //           </TouchableOpacity>
  //         </View>
  //       </Container>
  //     </ScrollView>
  //   );
  // }
};

Index.displayName = 'Comic_Index_Template';
export default Index;
