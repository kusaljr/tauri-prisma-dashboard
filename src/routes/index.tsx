import Calendar from '../containers/Calendar';
import Dashboard from '../containers/Dashboard';
import Invoice from '../containers/Invoice';
import Login from '../containers/login';
import Mail from '../containers/Mail';

export const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/calendar',
    element: <Calendar />,
  },
  {
    path: '/mail',
    element: <Mail />,
  },
  {
    path: '/invoice',
    element: <Invoice />,
  },
  {
    path: '/auth',
    element: <Login />,
  },
];
