import PropTypes from 'prop-types';
import { useState } from 'react';

function Table({ list }) {
  const [nameFilter, setNameFilter] = useState('');

  const filteredList = list.filter((obj) => obj.name.includes(nameFilter));

  return (
    <>
      <input
        data-testid="name-filter"
        placeholder="name"
        value={ nameFilter }
        onChange={ ({ target }) => setNameFilter(target.value) }
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((obj) => (
            <tr key={ obj.name }>
              <td>{obj.name}</td>
              <td>{obj.rotation_period}</td>
              <td>{obj.orbital_period}</td>
              <td>{obj.diameter}</td>
              <td>{obj.climate}</td>
              <td>{obj.gravity}</td>
              <td>{obj.terrain}</td>
              <td>{obj.surface_water}</td>
              <td>{obj.population}</td>
              <td>{obj.films}</td>
              <td>{obj.created}</td>
              <td>{obj.edited}</td>
              <td>{obj.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Table;