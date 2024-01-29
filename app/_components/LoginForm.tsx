"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import chalk from "chalk";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
// import { useQuery } from "react-query";

interface Data {
    // Define your data structure here
    id : string;
    name : string;
    email : string;
    password : string;
  }

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await fetch(`http://localhost:3000/api/login`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    
      const user =await res.json();
      if (res.ok) {
        router.replace("dashboard");
        toast.success("welcome " + user.UserExist.name);
        
        
    }
      router.refresh();
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-10 w-full mx-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 my-4 mx-10"
        >
          <Label htmlFor="login" className="">
            Login
          </Label>
          <Input
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            type="email"
          />
          <Input
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            type="password"
          />
          <Button>{"login"}</Button>
          <Link className="text-sm mt-3 text-right" href={"/signup"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
