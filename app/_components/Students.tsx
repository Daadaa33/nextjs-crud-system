import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import Student from './Student';
import { Card } from '@/components/ui/card';

export interface StudentsProps {
    _id: string;
    name: string;
    age: number;
    grade: string;
}


const Students = async () => {
  const res = await fetch(`http://localhost:3000/api/students`, {
    cache: "no-cache",
  });
  const students: StudentsProps[] = await res.json();

  return <div className="flex flex-col gap-10">students</div>;
}
export default Students