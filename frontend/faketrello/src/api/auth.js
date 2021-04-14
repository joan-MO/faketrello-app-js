import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

export const login = credentials => {
    return client.post('/apiv1/users/login', credentials).then(({ token }) => {
    configureClient({ token });
      storage.set('auth', token);
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('auth');
  });
};
