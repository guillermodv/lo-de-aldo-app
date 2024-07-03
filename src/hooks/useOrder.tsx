import { useEffect, useState } from "react";

export function useOrder() {
  const [order, setOrder] = useState({});

  useEffect(() => {
    console.log("order use effect", order);
  }, [order]);

  return { order, setOrder };
}
