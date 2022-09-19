import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TestRouter from './test/testRouter';
import BasicLayout from './common/layout/BasicLayout';

export default function MainRouter() {
  return (
    <Routes>
      <Route element={<BasicLayout />} />
      <Route path="/" />
      <Route path="/test/*" element={<TestRouter />} />
    </Routes>
  );
}
