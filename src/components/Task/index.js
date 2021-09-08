import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Task({ tarefa, handleEdit, handleDel }) {
  return (
    <ul>
      {tarefa.map((tarefas, indece) => (
        <li key={tarefas}>
          {tarefas}
          <span>
            <p><FaEdit onClick={(e) => handleEdit(e, indece)} /></p>

            <p>
              <FaWindowClose onClick={(e) => handleDel(e, indece)} />
            </p>
          </span>
        </li>
      ))}
    </ul>
  );
}

Task.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDel: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tarefa: PropTypes.array.isRequired,
};
