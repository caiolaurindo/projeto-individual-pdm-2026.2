import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getProfile } from '../services/api';

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const reload = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      setProfile(await getProfile());
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível carregar o perfil.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <ProfileContext.Provider value={{ profile, loading, error, reload }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile precisa ser usado dentro de ProfileProvider.');
  }
  return context;
}
