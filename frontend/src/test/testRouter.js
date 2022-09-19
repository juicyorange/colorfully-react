import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from '../common/layout/BasicLayout';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import { changeColor } from '../util/colorChange';
import { CRgroupState } from '../recoil/atom';

export default function TestRouter() {
  // 페이지별로 변경하고 싶다면 그룹을 ../../backend/group_adjective.json 에 추가하고,
  // 그룹이 변경되는 페이지에 아래 넣어주기
  // 전체를 하나의 그룹으로 보고싶다면 그냥 group 하나만 지정해주고 하면 됨.
  /* ************************************* */
  const groupId = 'GROUP_1';
  const [group, setGroup] = useRecoilState(CRgroupState);
  useEffect(() => {
    changeColor(groupId, setGroup);
  }, []);
  /* ************************************* */
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}
