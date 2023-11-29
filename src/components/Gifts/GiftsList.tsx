import React, {useEffect, useState} from 'react';
import {GiftsTable} from "./GiftsTable";
import {GiftEntity} from 'types';
import {LoadingSpinner} from "../common/LoadingSpinner/LoadingSpinner";

export const GiftsList = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

    const refreshGifts = async () => {
        setGiftsList(null);
        const res = await fetch (
            'http://localhost:3001/gift');
        const data = await res.json();
        setGiftsList(data.giftsList);
    };



    useEffect(() => {
        refreshGifts();
    }, [])

    if (giftsList === null) {
        return <LoadingSpinner/>;
    }
    return <>
        <h1>
            Gift
        </h1>
        <GiftsTable gifts={giftsList} onGiftsChange={refreshGifts}/>
    </>;
}