const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container mt-4 p-5 bg-light border rounded">
      <h1 className="text-primary text-center">{mensaje}</h1>
    </div>
  );
};
export default ItemListContainer;