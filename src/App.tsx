import { type FC } from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from "./pages/Home";
import Country from "./pages/Country";
import { Link } from "react-router-dom";

export const App: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
        <Route
  path="*"
  element={
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">
        Page introuvable
      </h1>

      <p>
        La page demandée n'existe pas.
      </p>

      <Link
        to="/"
        className="inline-block mt-4 text-blue-400 hover:text-blue-300"
      >
        Retour à l'accueil
      </Link>
    </div>
  }
/>
      </Routes>
    </BrowserRouter>
  )
}
