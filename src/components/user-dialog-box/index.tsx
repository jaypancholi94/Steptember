import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { USER_ERROR_INIT_VALUE } from "@/constants";
import { useDispatch } from "react-redux";
import { setUserDetail } from "@/store/reducers/user-slice";

const UserDialogBox: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [error, setError] = useState<{ name: boolean; weight: boolean }>(
    USER_ERROR_INIT_VALUE,
  );
  const [name, setName] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(USER_ERROR_INIT_VALUE);

    const isValidName = name === "";
    const isValidWeight =
      weight === "" || parseInt(weight) < 0 || parseInt(weight) > 200;
    if (name === "") {
      setError((oldValue) => ({ ...oldValue, name: true }));
    }
    if (isValidWeight) {
      setError((oldValue) => ({ ...oldValue, weight: true }));
    }

    if (isValidName || isValidWeight) return;
    dispatch(setUserDetail({ name, weight: parseInt(weight) }));
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]" hideClose>
        <DialogHeader>
          <DialogTitle>Let’s Get Personal! 🏃‍♂️</DialogTitle>
          <DialogDescription>
            What should we call the step-counting legend in the making?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                placeholder="Jay Pancholi"
                id="name"
                className={cn(
                  "border p-2 rounded-lg h-[40px]",
                  error.name && "border-red-400",
                )}
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setName(e.target.value);
                }}
              />
              {error.name && (
                <div className="flex gap-1 items-center mt-1">
                  <Info size={16} className="text-red-400" />

                  <span className="text-red-400 font-semibold">
                    Enter valid name
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1" htmlFor="weight">
                Weight (kg)
              </label>
              <input
                type="number"
                placeholder="55"
                id="weight"
                className={cn(
                  "border p-2 rounded-lg h-[40px]",
                  error.weight && "border-red-400",
                )}
                value={weight}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setWeight(e.target.value);
                }}
              />
              {error.weight && (
                <div className="flex gap-1 items-center mt-1">
                  <Info size={16} className="text-red-400" />
                  <span className="text-red-400 font-semibold">
                    Enter valid weight
                  </span>
                </div>
              )}
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export { UserDialogBox };
