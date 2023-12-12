import React, {MouseEvent} from "react";
import {ChildEntity, GiftEntity } from "types";
import {Link} from "react-router-dom";


interface Props {
    child: ChildEntity ;
    giftsList: GiftEntity[];
    // onGiftsChange: () => void;
}

// @ToDo Add useState for deleting child
export const ChildrenTableRow = (props: Props) => {
    const deleteGift = async (e: MouseEvent) => {
        e.preventDefault();

        if (!window.confirm(`Are you sure you want to remove gift name: ${props.gift.name}`)) {
            return;
        }
        const res = await fetch(`http://localhost:3001/gift/${props.gift.id}`, {
            method: 'DELETE',
        });
        console.log(res);
        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occurred: ${error.message}`)
            return;
        }

        // props.onGiftsChange();
    };
   return ( <tr>
        <td>
            <Link to={`/gift/${props.gift.id}`}>
                {props.gift.name}
            </Link>
        </td>
           <td>
               {props.gift.count}
           </td>
        <td>
            <a href="#" onClick={deleteGift}>🗑</a>
        </td>
    </tr>
   )
}