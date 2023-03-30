import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Article from './pages/Article';
import About from './pages/About';
import PostsPage from './pages/PostsPage';

function App() {
  const message = 'Hello there!';
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/article" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/postspage" element={<PostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
