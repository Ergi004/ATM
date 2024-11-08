"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "../../api/Auth";

const DashboardPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const authStatus = await Auth.checkAuth();
      if (!authStatus) {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuthStatus();
  }, []);

  if (!isAuthenticated) return null; // Render nothing while checking authentication

  return (
    <div>
      <h1>You are authenticated</h1>
    </div>
  );
};

export default DashboardPage;
