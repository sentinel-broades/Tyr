import { Route, Routes } from 'react-router-dom';
import {
  DashboardView,
  DisciplineListView,
  CreateDisciplineView,
} from '../views';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardView />} />
      <Route path='/discipline/list' element={<DisciplineListView />} />
      <Route path='/discipline/create' element={<CreateDisciplineView />} />
      <Route path={'*'} element={<span>Not Found</span>} />
    </Routes>
  );
};

export { AppRoutes };
