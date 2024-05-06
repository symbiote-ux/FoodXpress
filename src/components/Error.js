import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>Something Went wrong</p>
      <h3>{err.status}</h3>
    </div>
  );
};
