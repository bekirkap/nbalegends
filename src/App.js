import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header"
import Legendscontainer from "./components/Legends/Legendscontainer";

function App() {
  return (
    <Container className="text-center my-5 ">
      <Header></Header>
      <Legendscontainer></Legendscontainer>
    </Container>
  );
}

export default App;
