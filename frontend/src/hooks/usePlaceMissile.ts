import { useState } from "react";

function usePlaceMissile() {
  const [status, setStatus] = useState<"ready" | "loading" | "error">("ready");
  const [error, setError] = useState<string | null>(null);

  const placeMissile = async (coord: string) => {
    try {
      setStatus("loading");
      setError(null);

      const response = await fetch("http://localhost:8080/placeMissile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: coord,
      });

      if (!response.ok) {
        throw new Error("Error");
      }

      setStatus("ready");
    } catch (err: any) {
      setStatus("error");
      setError(err.message);
    }
  };

  return { placeMissile, status, error };
}

export default usePlaceMissile;