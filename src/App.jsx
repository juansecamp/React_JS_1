import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
        <ItemListContainer mensaje={<>Próximamente los mejores productos <br /> en Tecnología y Gaming</>} />
    </>
  );
}
export default App;