import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type ConfirmDialogProps = {
  title: string;
  onConfirm: () => void;
};

const ConfirmDialog = ({ title, onConfirm }: ConfirmDialogProps) => {
  return (
    <AlertDialogContent className="max-w-100 border-none shadow-2xl overflow-hidden p-0">
      <div className="p-6">
        <AlertDialogHeader className="">
          <AlertDialogTitle className="text-xl font-bold text-center tracking-tight">
            Delete all tasks?
          </AlertDialogTitle>

          <AlertDialogDescription className="text-left text-muted-foreground">
            This will permanently remove all tasks from the{" "}
            <span className="font-semibold capitalize text-destructive">
              &quot;{title}&quot;
            </span>{" "}
            column. You can&apos;t undo this action.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </div>

      <AlertDialogFooter className="bg-muted/20 flex p-4 gap-2 border-t">
        <AlertDialogCancel className="border-none hover:bg-muted font-medium">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button variant={"destructive"} onClick={onConfirm}>
            Delete Everything
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default ConfirmDialog;
