import { Routes, Route, Outlet } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import RecipeDetails from './pages/RecipeDetails';
import RecipeGenerator from './pages/RecipeGenerator';
import RecipeTutorial from './pages/RecipeTutorial';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Footer from './components/Footer';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetails />} />
          <Route path='generate-recipe' element={<RecipeGenerator />} />
          <Route path='recipe-tutorial' element={<RecipeTutorial />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

