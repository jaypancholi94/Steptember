import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddStopIsland = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="group fixed bottom-8 right-8 flex gap-2 rounded-lg cursor-pointer">
          <Plus strokeWidth={3} className="group-hover:animate-spin" />{" "}
          <span className="font-semibold">Add Step</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>Add Your Steps</DialogHeader>
        <form>
          <DialogDescription>
            <p className="font-semibold">
              Track your daily activity effortlessly! Enter the number of steps
            </p>
            <p className="opacity-60">
              you&apos;ve taken today to keep an accurate record of your fitness
              journey. Monitoring your steps helps you stay motivated and reach
              your health goals. Let&apos;s make every step count!
            </p>
            <div className="flex w-full my-4 gap-2">
              <input
                type="date"
                className="w-1/2 border p-2 rounded-lg"
                // value={dateValue}
                // onChange={handleDateChange}
                // className={error.date && "error-border"}
              />
              <input
                type="number"
                placeholder="steps"
                className="w-1/2 border p-2 rounded-lg"
                // value={quantityValue}
                // onChange={handleQuantityChange}
                // className={error.quantity && "error-border"}
              />
            </div>
          </DialogDescription>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { AddStopIsland };
