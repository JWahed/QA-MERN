/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';

function HideText({ text, end }) {
  const [hidden, setHidden] = useState(true);

  if (text.length <= end) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {hidden ? `${text.substring(0, end).trim()}...` : text}

      {hidden ? (
        <button
          type="button"
          onClick={() => setHidden(false)}
        >
          Read More
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setHidden(true)}
        >
          Read Less
        </button>
      )}
    </span>
  );
}

export default HideText;
