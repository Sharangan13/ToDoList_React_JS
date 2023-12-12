import React from 'react';

const Body = ({ item, HandleCheck, HandleDelete }) => {
  return (
    <div>
      <ul>
        {item.map((n) => (
          <li key={n.id}>
            <input type='checkbox' checked={n.check} onChange={() => HandleCheck(n.id)} />
            <label>{n.lable}</label>
            <button onClick={() => HandleDelete(n.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <label>
        {item.length > 0 ? `${item.length} Lists are here` : "List is empty"}
      </label>
    </div>
  );
};

export default Body;
