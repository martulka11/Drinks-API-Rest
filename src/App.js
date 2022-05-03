import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Main from './pages/Main';
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Layout from './components/UI/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner/>
        </div>
      }></Suspense>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/cocktails' element={<Home/>}/>
          <Route path='/cocktails/:id' element={<SingleCocktail/>}/> 
          <Route path='/*' element={<Error/>}/> 
        </Routes>
    </Layout>
        
  );
}

export default App;
