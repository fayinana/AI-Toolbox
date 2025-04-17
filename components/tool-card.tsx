"use client";

import type React from "react";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
    size?: number;
    strokeWidth?: number;
  }>;
}
export default function ToolCard({
  id,
  title,
  description,
  icon: Icon,
}: ToolCardProps) {
  return (
    <div className="transition-transform duration-300 hover:-translate-y-1 h-full flex">
      <Card className="h-full flex flex-col">
        <CardHeader>
          <div className="mb-2 text-primary">
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/toolbox/${id}`} className="w-full">
            <Button className="w-full">Use Tool</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
