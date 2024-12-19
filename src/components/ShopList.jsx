import PropTypes from "prop-types";

function ShopList({ items, toggleBought, deleteItem }) {
  //  isBought === false인 아이템들
  console.log("살 물건들:", items);
  return (
    <div>
      <h2>살 물건들</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => toggleBought(item.id)}>구매</button>
            <button onClick={() => deleteItem(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ShopList.propTypes = {
  items: PropTypes.array,
  toggleBought: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default ShopList;
