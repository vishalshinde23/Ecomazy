import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy loading components
const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100">
      {/* Navbar */}
      <div className="bg-slate-900 sticky top-0 z-10 w-full">
        <Suspense fallback={<div></div>}>
          <Navbar />
        </Suspense>
      </div>

      {/* Main Content */}
      <div className="flex-grow w-screen">
        <Suspense fallback={<div class="relative flex justify-center items-center">
    <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
    <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  class="rounded-full h-28 w-28"/>
</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </div>

      {/* Footer (optional) */}
      <div>
        <Suspense fallback={<div></div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
