import React from "react";
import { Button } from "../ui/button";
import DialogInfoButton from "./DialogInfoButton";

type Props = {
    name?: any;
};

export default function StatusItem({ name }: Props) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-xl bg-gray-400"></div>
                <p>{name}</p>
            </div>
            <DialogInfoButton name={name} />
        </div>
    );
}
