import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import loadingGif from './assets/HiStudy/original-8e7ce77dec0edaf0105e8287038f6e60.gif'
const Layout = lazy(() => import('./layout/Layout/Layout.jsx'));
const Home = lazy(() => import('./pages/home/Home.jsx'));
const Details = lazy(() => import('./pages/CourseDetails/Details.jsx'))
const CartPage = lazy(() => import('./pages/CartPage/CartPage.jsx'))
const Shop = lazy(() => import('./pages/Shop/Shop.jsx'))
const Register = lazy(() => import('./pages/Register/Register.jsx'))
const Login = lazy(() => import('./pages/Login/Login.jsx'))
const Profile = lazy(() => import('./pages/Profile/Profile.jsx'))

import LottieLoading from './components/LottieLoading/LottieLoading.jsx';
import CartLottie from './components/LottieLoading/CartLottie.jsx';
import { Toaster } from 'react-hot-toast';
import SingleProduct from './pages/SingleProduct/SingleProduct.jsx';
import ShopCourses from './pages/ShopCourses/ShopCourses.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';


// const Navigate = Navigate()


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className=' w-full h-[85vh] flex flex-col justify-center items-center'>
        <img src={loadingGif} alt="LOADING....." />
        <p className=' scale-105 text-blue-600 text-2xl'>Loading...</p>
      </div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div className=' w-full h-[85vh] flex flex-col justify-center items-center'>
            <img src={loadingGif} alt="LOADING....." />
            <p className=' scale-105 text-blue-600 text-2xl'>Loading...</p>
          </div>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: "/Details/:id",
        element: (
          <Suspense fallback={<div className=' w-full h-[85vh] flex flex-col justify-center items-center'>
            <img src={loadingGif} alt="LOADING....." />
            <p className=' scale-105 text-blue-600 text-2xl'>Loading-Page...</p>
          </div>}>
          <ProtectedRoute>
            <Details />

          </ProtectedRoute>
          </Suspense>
        )
      },
      {
        path: '/CartPage',
        element: (
          <Suspense fallback={<CartLottie />}  >
            <ProtectedRoute>
              <CartPage />

            </ProtectedRoute>
          </Suspense>
        )
      },
      {
        path: '/Shop',
        element: (
          <Suspense fallback={<CartLottie />} >
            <ProtectedRoute>

              <Shop />

            </ProtectedRoute>
          </Suspense>
        )
      },
      {
        path: '/ShopCourses',
        element: (
          <Suspense fallback={<CartLottie />} >
            <ProtectedRoute>

              <ShopCourses />

            </ProtectedRoute>
          </Suspense>
        )
      },
      {
        path: '/SingleProduct/:id',
        element: (
          <Suspense fallback={<CartLottie />} >
            <SingleProduct />
          </Suspense>
        )
      },
      {
        path: '/SingleProduct',
        element: <Navigate to={'/shop'} replace />
      },
      {
        path: '/Register',
        element: (
          <Suspense fallback={<CartLottie />} >
            <Register />
          </Suspense>
        )
      },
      {
        path: '/Login',
        element: (
          <Suspense fallback={<CartLottie />} >
            <Login />
          </Suspense>
        )
      },
      {
        path: '/profile',
        element: (
          <Suspense fallback={<CartLottie />} >
            <ProtectedRoute>

              <Profile />
            </ProtectedRoute>
          </Suspense>
        )
      },
    ],
    errorElement: <LottieLoading />
  }
]);

export default function App() {


  return <>
    <RouterProvider router={router} />;
    <Toaster />


  </>
}