import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

const Index = ({source, placeholderColor, style}) => {
  const [loadedImage, setLoadedImage] = useState(false);

  const onLoad = () => {
    setTimeout(() => {
      setLoadedImage(true);
    }, 100);
  };
  useEffect(() => {
    source ? setLoadedImage(true) : setLoadedImage(false);
    console.log('actualizado source');
    console.log({source});
    // return () => {
    //   cleanup
    // }
  }, [source]);

  // console.log({source});
  return (
    <View style={style}>
      {/* <Image
        source={source}
        resizeMode={'contain'}
        style={[
          style,
          {
            position: 'absolute',
            resizeMode: 'contain',
          },
        ]}
        onLoad={onLoad}
      /> */}
      {!loadedImage && (
        <View
          style={[
            style,
            {
              backgroundColor: placeholderColor,
              position: 'absolute',
            },
          ]}
        />
      )}
    </View>
  );
};
Index.displayName = 'AsyncImage';
export default Index;
