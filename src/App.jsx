import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"; 
import Category from "./pages/Category";
import Search from "./pages/Search";
import ArticleDetails from "./pages/ArticleDetails";
import CharacterDetails from "./pages/CharacterDetails";
import Events from "./pages/Events";
import Trailers from "./pages/Trailers";
import Merchandise from "./pages/Merchandise";
import Releases from "./pages/Releases";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import Calendar from "./pages/Calendar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} /><Route
  path="/category/:categoryId"
  element={<Category />}
/>

<Route path="/search" element={<Search />} />
       <Route
  path="/article/:id"
  element={<ArticleDetails />}
/>
  <Route
  path="/character/:id"
  element={<CharacterDetails />}
/>
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/trailers" element={<Trailers />} />
       <Route path="/merchandise" element={<Merchandise />} />
       <Route path="/releases" element={<Releases />} />
         <Route path="/bookmarks" element={<Bookmarks />} />
  <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;