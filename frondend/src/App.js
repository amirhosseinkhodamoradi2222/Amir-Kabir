import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Aboute from "./page/Aboute/Aboute";
import Blog from "./page/Blog/Blog";
import Login from "./page/Login/Login";
import Store from "./page/Store/Store";
import Blog_detale from "./page/Blog_detale/Blog_detale";
import Store_detale from "./page/Store_detale/Store_detale";
import Contuct from "./page/Contuct/Contuct";
import Cardshop from "./page/Cardshop/Cardshop";
import Register from "./page/Register/Register";
import Notfound from "./Notfound";
import '../node_modules/react-dropzone-uploader/dist/styles.css'

//Dashboard 
import Settings_dashbord from './dashboard/page/settings_dashbord'
import Commint_dashbord from './dashboard/page/commint_dashbord'
import Blog_dashbord from './dashboard/page/Blog_dashbord'
import ListProduct_dashbord from './dashboard/page/ListProduct_dashbord'
import Product_dashbord from './dashboard/page/Product_dashbord'

import AddBlog_dashbord from './dashboard/add/AddBlog_dashbord'
import AddProduct_dashbord from './dashboard/add/addProduct_dashbord'
import EditeBlog_dashbord from './dashboard/edite/EditeBlog_dashbord'
import EditeProduct_dashbord from './dashboard/edite/EditeProduct_dashbord'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/blog/:id" element={<Blog_detale />} />
          <Route path="/store/:id" element={<Store_detale />} />
          <Route path="/aboute" element={<Aboute />} />
          <Route path="/contuct" element={<Contuct />} />
          <Route path="/cardshop" element={<Cardshop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings_dashbord" element={<Settings_dashbord/>} />
          <Route path="/commint_dashbord" element={<Commint_dashbord/>} />
          <Route path="/blog_dashbord" element={<Blog_dashbord/>} />
          <Route path="/listproduct_dashbord" element={<ListProduct_dashbord/>} />
          <Route path="/product_dashbord" element={<Product_dashbord/>} />
          <Route path="/addblog_dashbord" element={<AddBlog_dashbord/>} />
          <Route path="/addproduct_dashbord" element={<AddProduct_dashbord/>} />
          <Route path="/editeblog_dashbord/:id" element={<EditeBlog_dashbord/>} />
          <Route path="/editeproduct_dashbord/:id" element={<EditeProduct_dashbord/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
