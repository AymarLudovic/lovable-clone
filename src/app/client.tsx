"use client";

import { useEffect, useState } from "react";

export const Client = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulation d'une récupération de données
    const fetchData = async () => {
      try {
        // Exemple: fetch depuis une API ou calcul local
        // const res = await fetch("/api/some-endpoint");
        // const json = await res.json();
        // setData(JSON.stringify(json));

        // Ici juste un mock
        setData("Résultat du client TSX simple");
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{data}</div>;
};
  
