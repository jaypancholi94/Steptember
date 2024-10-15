"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserRoundPen } from "lucide-react";

const EditUserDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="group flex gap-1 rounded-lg cursor-pointer p-0 h-fit"
          variant={"link"}
        >
          <UserRoundPen className="" strokeWidth={3} size={14} />
          <span className="font-semibold">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit User Name</DialogTitle>
          <DialogDescription>hello</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { EditUserDetails };
