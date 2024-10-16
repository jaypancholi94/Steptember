import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import { memo, useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { USER_ERROR_INIT_VALUE } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetail } from '@/store/reducers/user-slice';
import { RootState } from '@/store/store';

type UserDialogBoxProps = {
  triggerButton?: React.ReactNode;
  type: 'edit' | 'add';
};

const UserDialogBox: React.FC<UserDialogBoxProps> = memo(
  ({ triggerButton, type = 'add' }) => {
    const dispatch = useDispatch();
    const { userName, userWeight } = useSelector((state: RootState) => ({
      userName: state.user.name,
      userWeight: state.user.weight,
    }));

    const [isOpen, setIsOpen] = useState<boolean>(type === 'add');
    const [error, setError] = useState<{ name: boolean; weight: boolean }>(
      USER_ERROR_INIT_VALUE
    );
    const [name, setName] = useState<string>(userName);
    const [weight, setWeight] = useState<string>(userWeight);

    const handleSubmit = useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(USER_ERROR_INIT_VALUE);

        const isValidName = name === '';
        const isValidWeight =
          weight === '' || parseInt(weight) <= 0 || parseInt(weight) > 200;
        if (name === '') {
          setError((oldValue) => ({ ...oldValue, name: true }));
        }
        if (isValidWeight) {
          setError((oldValue) => ({ ...oldValue, weight: true }));
        }

        if (isValidName || isValidWeight) return;
        dispatch(setUserDetail({ name, weight: parseInt(weight) }));
        setIsOpen(false);
      },
      [name, weight, dispatch]
    );

    return (
      <Dialog
        open={isOpen}
        onOpenChange={type === 'edit' ? setIsOpen : undefined}
      >
        {triggerButton}
        <DialogContent className="sm:max-w-[425px]" hideClose>
          <DialogHeader>
            <DialogTitle>
              {type === 'add'
                ? `Let&apos;s Get Personal! 🏃‍♂️"`
                : `Time for a Makeover? ✨`}
            </DialogTitle>
            <DialogDescription>
              {type === 'add'
                ? 'What should we call the step-counting legend in the making?'
                : 'Go ahead, update your info! Your step game is still strong!'}
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
                    'border p-2 rounded-lg h-[40px]',
                    error.name && 'border-red-400'
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
                    'border p-2 rounded-lg h-[40px]',
                    error.weight && 'border-red-400'
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
  }
);
UserDialogBox.displayName = 'UserDialogBox';
export { UserDialogBox };
