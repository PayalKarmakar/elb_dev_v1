import { useEffect, useState } from "react";

function useAddressinfo(code) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!code || code.length !== 6) return;

    setLoading(true);
    setError(null);

    fetch(`https://api.postalpincode.in/pincode/${code}`)
      .then((res) => res.json())
      .then((res) => {
        if (res[0]?.PostOffice) {
          setData(res[0].PostOffice);
        } else {
          setError("Invalid PIN code or no data available");
          setData(null); // Clear data on error
        }
      })
      .catch((error) => {
        setError("Error fetching data: " + error.message);
        setData(null); // Clear data on error
      })
      .finally(() => {
        setLoading(false);
      });
  }, [code]);

  return { data, loading, error };
}

export default useAddressinfo;
