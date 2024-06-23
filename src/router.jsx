import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  AboutPage,
  ContactsPage,
  ErrorPage,
  HomePage,
  SurveyPage,
  ChildrenClubsPage,
  FamilyConsultantPage,
  GuardianshipPage,
  LawyerPage,
  LogopedistPage,
  MediatorPage,
  ParentClubsPage,
  PsychologistPage,
  TeenClubsPage,
} from './pages';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/services',
      element: <HomePage />, // ДОБАВИТЬ ЛОГИКУ ЯКОРНОЙ ССЫЛКИ
    },
    {
      path: '/services/children-clubs',
      element: <ChildrenClubsPage />,
    },
    {
      path: '/services/family-consultant',
      element: <FamilyConsultantPage />,
    },
    {
      path: '/services/guardianship',
      element: <GuardianshipPage />,
    },
    {
      path: '/services/lawyer',
      element: <LawyerPage />,
    },
    {
      path: '/services/logopedist',
      element: <LogopedistPage />,
    },
    {
      path: '/services/mediator',
      element: <MediatorPage />,
    },
    {
      path: '/services/parent-clubs',
      element: <ParentClubsPage />,
    },
    {
      path: '/services/psychologist',
      element: <PsychologistPage />,
    },
    {
      path: '/services/teen-clubs',
      element: <TeenClubsPage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/contacts',
      element: <ContactsPage />,
    },
    {
      path: '/survey',
      element: <SurveyPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default function Router() {
  return <RouterProvider router={router} />;
}
