import React, {useEffect, useState} from 'react';
import {ChildrenTable} from "./ChildrenTable";
import {LoadingSpinner} from "../common/LoadingSpinner/LoadingSpinner";
import { ListChildrenRes } from 'types';

export const ChildrenList = () => {
    const [data, setData] = useState<ListChildrenRes | null>(null);

    const refreshChildren = async () => {
        setData(null);
        const res = await fetch (
            'http://localhost:3001/child');
        console.log(res);
        setData(await res.json());
    };

    useEffect(() => {
        refreshChildren();
    }, [])

    if (data=== null) {
        return <LoadingSpinner/>;
    }
    return <>
        <h1>
            Children
        </h1>
        <ChildrenTable childrenList={data.childrenList} giftsList={data.giftsList}/>
    </>;
}