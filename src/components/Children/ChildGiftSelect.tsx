import React, {FormEvent, useState} from "react";
import { GiftEntity } from "types";
import {SetGiftForChildReq} from "../../../../../E4/ListaSwietegoMikolaja/types/child/child";

interface Props {
    giftList: GiftEntity[];
    selectedId: string;
    childId: string;
};
export const ChildGiftSelect = (props: Props) => {
    const [selected, setSelected] = useState<string>(props.selectedId);
    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        await fetch(`http://localhost:3001/child/gift/${props.childId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                giftId: selected
            } as SetGiftForChildReq),
        });
    }

    return (
        <form onSubmit={sendForm}>
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                {
                 props.giftList.map(gift => (
                     <option key={gift.id} value={gift.id}>
                           {gift.name}
                    </option>
                    ))
                }
            </select>
            <button type={'submit'}>Save</button>
        </form>
    )
};