"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();


  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
        const res = await fetch(`http://localhost:3000/api/signup`, {
            method: "POST",
            body: JSON.stringify(data),
          });

      const user = await res.json();

      if(res.ok){
        router.replace("/");
        console.log(user)
      }
      router.refresh();
      form.reset();
    } catch (error : any) {
      console.error("error", error);
      throw new Error("Error creating user: " + error.message )
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Register With Your Info</CardTitle>
          <CardDescription>Register With Your Info</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(event: any) => handleSubmit(event)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  id="username"
                  name="name"
                  required
                  placeholder="Enter Your Username"
                  />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your Email"
                  />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                {/* <Button>{loading ? "Registering..." : "register"}</Button> */}
                <Button>register</Button>
                <Link className="text-sm mt-3 text-right" href={"/login"}>
                  Already have an account?{" "}
                  <span className="underline">Login</span>
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;
