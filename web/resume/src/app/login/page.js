"use client";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/authForm/authForm";
import { login } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      router.push("/dashboard"); // Redirect after login
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} isLogin={true} />;
}
