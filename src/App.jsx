import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route
            path="/category/:categoryId"
            element={<div>Category</div>}
          />
          <Route path="/search" element={<div>Search</div>} />
          <Route path="/article/:id" element={<div>Article Details</div>} />
          <Route
            path="/character/:id"
            element={<div>Character Details</div>}
          />
          <Route path="/events" element={<div>Events</div>} />
          <Route path="/trailers" element={<div>Trailers</div>} />
          <Route path="/merchandise" element={<div>Merchandise</div>} />
          <Route path="/bookmarks" element={<div>Bookmarks</div>} />
          <Route path="/about" element={<div>About MaxView</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;