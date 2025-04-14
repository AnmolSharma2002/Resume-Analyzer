"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AuthForm from "@/components/authForm/authForm";
import { login } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [hasRefreshed, setHasRefreshed] = useState(false);

  useEffect(() => {
    const refreshed = searchParams.get("refreshed");

    // Wait until component has mounted
    if (!refreshed && !hasRefreshed) {
      setHasRefreshed(true);
      // Let the page fully render, then refresh
      setTimeout(() => {
        router.replace("/login?refreshed=true");
      }, 0); // 0ms lets the UI load before redirect
    }
  }, [router, searchParams, hasRefreshed]);

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} isLogin={true} />;
}
