import React, { useState, useEffect } from "react";

function usePlayerState() {
  const [missiles, setMissiles] = useState([]);
  const [ships, setShips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const response = await fetch(
          `http://localhost:8080/player-state/1`,
          {
            signal: abortController.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Error");
        }

        const data = await response.json();
        
        setMissiles(data.missiles);
        setShips(data.ships);
      } catch (err: any) {
        if (err.name === "AbortError") return;
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
    return { status: "loading" };
  }
  else if (error) {
    return { status: "error", error: "An error occured" };
  } else {
    return {
      status: "success",
      missiles: missiles,
      ships: ships,
    };
  }
}

export default usePlayerState;
