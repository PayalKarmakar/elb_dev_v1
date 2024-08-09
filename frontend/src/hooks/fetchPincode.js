import { useEffect, useState } from "react";

function useAddressinfo(code) {
 
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!code) return;

    setLoading(true);
    setError(null);

    fetch(`https://api.postalpincode.in/pincode/${code}`)
      .then((res) => res.json())
      .then((res) => {
        if (res[0]?.PostOffice) {
          setData(res[0].PostOffice);
        } else {
          setError("Invalid response structure");
        }
      })
      .catch((error) => {
        setError("Error fetching data: " + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [code]);

  return { data, loading, error };
}

export default useAddressinfo;
