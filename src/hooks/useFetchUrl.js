import {useState, useEffect} from 'react';

const useFetchUrl = url => {
  // console.log(url);

  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        // console.log('empezamos');
        const res = await fetch(url);
        // console.log(res.status);
        if (res.status === 200) {
          // console.log({res});
          setData(res.url);
        } else {
          setData(
            String(
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3daMAcGQVeUuoIzXXxNDYRb1qSMymmLijOayhr0N7AS4VNuKRaGjJWENs7GZPq_N_OM&usqp=CAU',
            ),
          );
        }
        console.log('la data pasa');
      } catch (e) {
        setError(e);
        console.log('catch ' + e);
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();

    // console.log('effect');
  }, [url]);

  return {data, isFetching, error};
};
export default useFetchUrl;
