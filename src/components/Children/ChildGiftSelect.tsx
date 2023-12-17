import React, {useState} from "react";
import { GiftEntity } from "types";

interface Props {
    giftList: GiftEntity[];
    selectedId: string;
};
export const ChildGiftSelect = (props: Props) => {
    const [selected, setSelected] = useState<string>(props.selectedId);

    return <select value={selected} onChange={e => setSelected(e.target.value)}>

    </select>
};