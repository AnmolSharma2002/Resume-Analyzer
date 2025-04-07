"use client";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/authForm/authForm";
import { signup } from "@/services/authService";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = async (name, email, password) => {
    try {
      await signup(name, email, password);
      router.push("/login"); // Redirect to login after signup
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthForm type="signup" onSubmit={handleSignup} />;
}
