import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";

import HomePage from "./page/HomePage";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Introduce from "./page/Introduce";
import News from "./page/News";
import Cart from "./page/Cart";
import DetailProduct from "./page/DetailProduct";
import ScrollToTopButton from "./component/Scroll";
import Pay from "./page/Pay";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <div className="w-full flex justify-center">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gioithieu" element={<Introduce />} />
              <Route path="/lienhe" element={<Contact />} />
              <Route path="/blogthoitrang" element={<Blog />} />
              <Route path="/tintuc" element={<News />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pay" element={<Pay />} />
              <Route
                path="/product/detailProduct/:id"
                element={<DetailProduct />}
              />
            </Routes>
          </Router>
          <ScrollToTopButton />
        </div>
      </ToastProvider>
    </Provider>
  );
}

export default App;
