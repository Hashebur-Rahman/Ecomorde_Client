import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home pages
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/Shop"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductDescription = lazy(() =>
  import("./wrappers/product/ProductDescription")
);

// categoryProduct
const ShowCategortyProduct = lazy(() =>
  import("./components/CategoryProduct/ShowCategortyProduct")
);
const Thanks = lazy(() => import("./pages/Thanks/Thanks"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const Register = lazy(() => import("./pages/other/Register"));
const Login = lazy(() => import("./pages/other/Login"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));
const FAQ = lazy(() => import("./components/Faq/Faq.js"));

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="Shohojdokan-preloader-wrapper">
              <div className="Shohojdokan-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route
              path={process.env.PUBLIC_URL + "/"}
              element={<HomeFashion />}
            />

            {/* Homepages */}

            {/* Shop pages */}
            <Route
              path={process.env.PUBLIC_URL + "/products"}
              element={<ShopGridStandard />}
            />

            {/* Shop product pages */}
            <Route
              path={process.env.PUBLIC_URL + "/product/:id"}
              element={<Product />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/products/:id/:name"}
              element={<ProductDescription />}
            />

            {/* category product  */}

            <Route
              path={process.env.PUBLIC_URL + "/category/:id"}
              element={<ShowCategortyProduct />}
            />

            {/* Other pages */}
            <Route
              path={process.env.PUBLIC_URL + "/about"}
              element={<About />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              element={<Contact />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/faq"}
              element={<FAQ />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/my-account"}
              element={<MyAccount />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/register"}
              element={<Register />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/login"}
              element={<Login />}
            />

            <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              element={<Wishlist />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/thanks/:id"}
              element={<Thanks />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/compare"}
              element={<Compare />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              element={<Checkout />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
