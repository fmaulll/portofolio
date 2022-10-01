import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./containers/Home";
import Container from "./Layout";
import store from "./store";
import About from "./containers/About";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
