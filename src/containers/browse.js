import React from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';

export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);

  return <SelectProfileContainer />;
}
