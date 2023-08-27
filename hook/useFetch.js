import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env';
const RAPID_API_KEY = '1b8d5962dbmsh1382669435e9a4bp1c9cccjsnc6b9254d8847';

const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);


   const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: 'Python developer in Texas, USA',
        page: '1',
        num_pages: '1'
      },
      headers: {
        'X-RapidAPI-Key': '1b8d5962dbmsh1382669435e9a4bp1c9cccjsnc6b9254d8847',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
   const fetchData = async () => {
      setIsLoading(true);

      try {
         const response = await axios.request(options);
         console.log(response);
         setData(response.data.data);
      } catch (error) {
         setError(error);
         alert('There is an error');
      } finally {
         setIsLoading(false);
      }
   }
   useEffect(() => {
      fetchData();
   }, [])

   const refetch = () => {
      setIsLoading(true);
      fetchData();
   }
   return { data, isLoading, error, refetch };
}

export default useFetch;