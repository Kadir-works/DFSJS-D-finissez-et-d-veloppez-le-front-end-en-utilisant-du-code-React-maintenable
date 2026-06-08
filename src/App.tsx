import { type FC } from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from "./pages/Home";
import Country from "./pages/Country";
// Anti-pattern 1 — Données hardcodées dans le composant — idéalement : hook ou module séparé.


// Anti-pattern 2 — Composant incohérent avec le nom du fichier (ex. Home dans App.tsx).


// Anti-pattern 9 — Plusieurs composants dans le même fichier — un fichier par composant recommandé.
// Composant non utilisé pour le moment, mais conservé pour la suite du projet.
// eslint-disable-next-line @typescript-eslint/no-unused-vars


// Anti-pattern 11 — Routing dans App.tsx — idéalement : module dédié.
export const App: FC = () => {
  // Anti-pattern 5 — console.log à retirer.
  console.log('App rendered')

  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/country/:id" element={<Country />} />
</Routes>
    </BrowserRouter>
  )
}
