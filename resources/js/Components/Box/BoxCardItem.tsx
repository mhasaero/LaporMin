import { Button } from "../ui/button";

type Props = {
    name: string;
    quantity: number;
    id: number;
    onToggle: (id: number, checked: boolean) => void;
};

export default function BoxCardItem({ name, quantity, id, onToggle }: Props) {
    return (
        <div className="flex items-center justify-between border-b-1 border-s-1 border-e-1 border-[#23318C] p-12">
            <label className="flex items-center text-2xl space-x-4">
                <input
                    type="checkbox"
                    className="size-5"
                    onChange={(e) => onToggle(id, e.target.checked)}
                />
                <div className="flex items-center gap-4">
                    <img src="" alt="" />
                    <div className="size-24 border-2 border-[#23318C]"></div>
                    <span>{name}</span>
                </div>
            </label>
            <div className="flex items-center gap-6 text-2xl">
                <Button className="text-xl">+</Button>
                <span>{quantity}</span>
                <Button className="text-xl">-</Button>
            </div>
        </div>
    );
}
