import {api} from '../lib/axios';
import {useState} from 'react';

export function useSWAPI() {
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async (currentPage: number) => {
    setLoading(true);
    try {
      const response = await api.get(`people/?page=${currentPage}`);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      throw error;
    }
  };

  const fetchHomeWorld = async (homeworldURL: string) => {
    setLoading(true);
    try {
      const response = await api.get(homeworldURL);
      setLoading(false);
      return response.data.name || 'Not Found';
    } catch (error) {
      console.error('Error fetching home world:', error);
      setLoading(false);
      throw error;
    }
  };

  const fetchSpecies = async (speciesURL: string) => {
    setLoading(true);
    try {
      const response = await api.get(speciesURL);
      setLoading(false);
      return response.data.name || 'Not Found';
    } catch (error) {
      console.error('Error fetching species:', error);
      setLoading(false);
      throw error;
    }
  };

  return {
    loading,
    fetchCharacters,
    fetchHomeWorld,
    fetchSpecies,
  };
}
