import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components/';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();

  return <p>SIGN UP</p>;
}
