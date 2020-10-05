import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({
  user,
  loggedInPath,
  children,
  ...restProps
}) {}
