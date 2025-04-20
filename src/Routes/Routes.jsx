import React, { Component } from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import Favorites from '../pages/Favorites/Favorites';
import PhoneDetails from '../pages/Root/PhoneDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path:'/',
        hydrateFallbackElement:<p>Loading, Please wait</p>,
        loader:()=>fetch('../phones.json'),
        Component:Home
      },
      {
        path:'/about',
        Component:About
      },
      {
        path:'/cart',
        Component:Cart
      },
      {
        path:'/favorites',
        loader:()=>fetch('../phones.json'),
        Component:Favorites
      },
      {
        path:'/phone-details/:id',
        hydrateFallbackElement:<p>Loading, Please wait</p>,
        loader:()=>fetch('../phones.json'),
        Component:PhoneDetails
      }
    ]
  }
]);
