import React, {useState} from "react";
import { CreateGiftReq } from "types";
import {LoadingSpinner} from "../common/LoadingSpinner/LoadingSpinner";


export const GiftAdd = () => {
    const [form, setForm] = useState<CreateGiftReq>({
        name: '',
        count: 0,
    });

    const [loading, setLoading] = useState<boolean>(false);

    if (loading) {
        return <LoadingSpinner/>;
    }

    const updateForm = (key: string, value: any) => {
        setForm( form => ({
            ...form,
            [key]: value,
        }));
    }

    return <form>
        <p>
            <label>
                Name: <br/>
                <input
                    type={"text"}
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Count: <br/>
                <input
                    type={"number"}
                    value={form.count}
                    onChange={e => updateForm('count', e.target.value)}
                />
            </label>
        </p>
        <button>Add</button>
    </form>
}