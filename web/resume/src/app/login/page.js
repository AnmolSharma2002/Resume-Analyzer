"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await login(email, password);
      console.log("Login response:", response); // Debug log
      // Show success toast before redirecting
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1000,
      });
      router.push("/dashboard");
      return response;
    } catch (error) {
      // Log error details for debugging
      // Throw error for AuthForm to display toast
      throw new Error(
        error.message || "Failed to login. Please check your credentials."
      );
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} isLogin={true} />;
}
