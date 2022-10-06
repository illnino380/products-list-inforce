import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import ProductEditForm from './Components/ProductEditForm';
import { ProductsList } from './Components/ProductsList';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h1>Page not found</h1>} />

        <Route path="/product/edit">
          <Route index element={<ProductEditForm />} />
          <Route path=":productId" element={<ProductEditForm />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
