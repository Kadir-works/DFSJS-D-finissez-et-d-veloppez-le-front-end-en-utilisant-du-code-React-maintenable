// Anti-pattern 6 — Logique métier complexe directement dans le composant — déplacer dans un utilitaire pour la réutilisabilité et la testabilité.

import type { Country } from "../models/Country";

export const calculateTotalMedals = (country: Country) => {
  return country.participations.reduce(
    (sum, p) => sum + p.medalsCount,
    0,
  );
};