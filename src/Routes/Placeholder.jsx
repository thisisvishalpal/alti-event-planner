import { useState, useEffect } from "react";

import { useAuthenticated } from "Hooks";
import { Spinner } from "Components";

export const Placeholder = ({ children, fallBack }) => {
  const [showSpinner, setShowSpinner] = useState(true);
  const { isAuthenticated, loading } = useAuthenticated();

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowSpinner(false), 300); // Minimum spinner time
      return () => clearTimeout(timer);
    }
  }, [loading, fallBack]);

  if (showSpinner || loading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return fallBack;
  }

  return children;
};
