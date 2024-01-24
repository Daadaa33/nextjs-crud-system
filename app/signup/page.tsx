'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const page = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    // const handleInputChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.id]: event.target.value
    //     });
    // };

const handleSubmit = (event : any) => {
    event.preventDefault();
    console.log(formData);
}

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
                  // onChange={handleInputChange}
                  id="username"
                  placeholder="Enter Your Username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  // onChange={handleInputChange}
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  // onChange={handleInputChange}
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
}

export default page