import React from "react";
import InventarisCardItem from "./InventarisCardItem";

export default function InventarisCards() {
    return (
        <div className="w-full py-4">
            <div className="w-full place-items-center grid grid-cols-3 gap-10">
                <InventarisCardItem />
                <InventarisCardItem />
                <InventarisCardItem />
                <InventarisCardItem />
                <InventarisCardItem />
                <InventarisCardItem />
                <InventarisCardItem />
                <InventarisCardItem />
                <InventarisCardItem />
            </div>
        </div>
    );
}
