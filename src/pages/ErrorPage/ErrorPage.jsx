import { useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

import './ErrorPage.css';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    if (error.status === 404) {
      navigate('/', { replace: true });
    }
  }, [error, navigate]);

  return (
    <div>
      <h1>Упс! Что-то пошло не так.</h1>
      <p>Перенаправление на главную страницу...</p>
    </div>
  );
}
