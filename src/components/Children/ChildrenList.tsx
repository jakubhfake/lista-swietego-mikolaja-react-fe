import React, {useEffect, useState} from 'react';
import {ChildrenTable} from "./ChildrenTable";
import {LoadingSpinner} from "../common/LoadingSpinner/LoadingSpinner";
import { ListChildrenRes } from 'types';

export const ChildrenList = () => {
    const [data, setData] = useState<ListChildrenRes | null>(null);

    const refreshGifts = async () => {
        setData(null);
        const res = await fetch (
            'http://localhost:3001/chlid');
        const data = await res.json();
        setData(data);
    };



    useEffect(() => {
        refreshGifts();
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