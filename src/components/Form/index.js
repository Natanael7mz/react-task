import React from 'react';
import { FaCaretSquareDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Form({ novaTarefa, setNovaTarefa, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
      <button type="submit">
        <FaCaretSquareDown size={26} />
      </button>
    </form>
  );
}
Form.propTypes = {
  novaTarefa: PropTypes.string.isRequired,
  setNovaTarefa: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,

};
