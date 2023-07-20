import { Route, Routes } from 'react-router-dom';
import {
  DashboardView,
  DisciplineListView,
  CreateDisciplineView,
  RoleListView,
  CreateRoleView,
  NotFoundView,
  CreateSquadView,
  SquadListView,
  SquadDetailView,
  CreateHeadView,
  PersonListView,
  CreatePersonView,
} from '../views';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardView />} />
      <Route path='/discipline/list' element={<DisciplineListView />} />
      <Route path='/discipline/create' element={<CreateDisciplineView />} />
      <Route path='/role/list' element={<RoleListView />} />
      <Route path={'/role/create'} element={<CreateRoleView />} />
      <Route path={'/squad/list'} element={<SquadListView />} />
      <Route path={'/squad/create'} element={<CreateSquadView />} />
      <Route path={'/squad/detail/:id'} element={<SquadDetailView />} />
      <Route path={'/head/create/:squadId'} element={<CreateHeadView />} />
      <Route path={'/person/list'} element={<PersonListView />} />
      <Route path={'/person/create'} element={<CreatePersonView />} />
      <Route path={'*'} element={<NotFoundView />} />
    </Routes>
  );
};

export { AppRoutes };
