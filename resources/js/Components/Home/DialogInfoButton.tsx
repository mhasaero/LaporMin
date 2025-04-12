import React from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Copy } from "lucide-react";

type Props = {
    name?: any;
};

export default function DialogInfoButton({ name }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="default"
                    className="w-fit text-md rounded-xl px-8 py-2 cursor-pointer"
                >
                    Info
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Informasi Detail {name}</DialogTitle>
                    <DialogDescription>
                        Ini merupakan informasi detail terkait {name}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant="secondary"
                            className="cursor-pointer"
                        >
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
