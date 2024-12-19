import PropTypes from "prop-types";

function BoughtList({ items, toggleBought }) {
  return (
    <div>
      <h2>산 물건들</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => toggleBought(item.id)}>취소</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

BoughtList.propTypes = {
  items: PropTypes.array,
  toggleBought: PropTypes.func,
};

export default BoughtList;
