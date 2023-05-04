import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoute from './routers/AppRoute';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.scss'
import '../node_modules/aos/dist/aos.css'
import 'animate.css'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addBlog } from './actions/blogAction';
const img1 = require('./assets/img/meat-on-table.jpg');
const img2 = require('./assets/img/andre-furtado-photographer.jpg');
const img3 = require('./assets/img/businesswoman.jpg');
const img4 = require('./assets/img/girlreadingbook.jpg');
const img5 = require('./assets/img/girlwriting.jpg');


const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());

})
store.dispatch(addBlog({ img: img1, category: "Cooking", title: "Top 10 Books: How to Cook for Beginners", desc: "Suspendisse sed nisi lacus sed viverra tellus in hac. Laoreet suspendisse interdum consectetur libero…" }))
store.dispatch(addBlog({ img: img2, category: "Blogging", title: "Photography Tips and Tricks for Beginners", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut. Tellus mauris a diam maecenas sed enim. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Tincidunt dui ut ornare lectus sit amet est placerat. Sapien faucibus et molestie ac feugiat sed. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nibh praesent tristique magna sit amet purus gravida. Volutpat diam ut venenatis tellus in metus." }))
store.dispatch(addBlog({ img: img3, category: "Blogging", title: "How to monetize from your blog?", desc: "Suspendisse sed nisi lacus sed viverra tellus in hac. Laoreet suspendisse interdum consectetur libero…" }))
store.dispatch(addBlog({ img: img4, category: "Biography", title: "The Quickest Way to Get Rich With Reading Books", desc: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions." }))
store.dispatch(addBlog({ img: img5, category: "Cooking", title: "10 Amazing books for learning cooking", desc: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions." }))



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <AppRoute />
    </Provider>

  </React.StrictMode>
);
