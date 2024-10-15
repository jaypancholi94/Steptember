import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { removeSteps } from "@/store/reducers/step-slice";
import { useDispatch } from "react-redux";

type StepRemoveDialogProps = { stepIndex: number };

const StepRemoveDialog: React.FC<StepRemoveDialogProps> = ({ stepIndex }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="p-0 opacity-60 hover:opacity-100">
          <Trash2 size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Goodbye, Steps! 👋</DialogTitle>
          <DialogDescription>
            <p className="opacity-60">
              Once they&apos;re gone, they&apos;re not coming back. Are you sure
              you want to erase this chapter?
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"destructive"}
            className="flex gap-2"
            onClick={() => {
              dispatch(removeSteps(stepIndex));
              setIsOpen(false);
            }}
          >
            <Trash2 size={16} />
            <span>Discard</span>
          </Button>
          <Button variant={"outline"} onClick={() => setIsOpen(false)}>
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { StepRemoveDialog };
