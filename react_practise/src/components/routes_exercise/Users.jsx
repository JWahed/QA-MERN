import { useParams } from 'react-router-dom';

function Users() {
  const { id } = useParams();

  return (
    <>
      <h1>User</h1>
      <h2>
        {`Your user id is: ${id}`}
      </h2>
    </>
  );
}

export default Users;
