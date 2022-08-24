import { useEffect } from 'react';

function Howdy({ name }) {
  const message = `Hello, ${name}!`;

  useEffect(
    () => {
      document.title = `Greetings to ${name}`;
    },
    [name],
  );

  return (
    <div>
      {message}
    </div>
  );
}

export default Howdy;
