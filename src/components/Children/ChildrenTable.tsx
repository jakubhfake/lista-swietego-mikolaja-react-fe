import React from "react";
import {ChildEntity, GiftEntity} from "types";
import {ChildrenTableRow} from "./ChildrenTableRow";


interface Props {
    giftsList: GiftEntity[];
    childrenList: ChildEntity[];
}
export const ChildrenTable = (props: Props) => {
   return  <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Gift</th>
                {/*<th>Action</th>*/}
            </tr>
        </thead>
       <tbody>
       {
           props.childrenList.map(child => (<ChildrenTableRow
               key={child.id}
               child={child}
               giftsList = {props.giftsList}
           />))
       }
       </tbody>
    </table>
}