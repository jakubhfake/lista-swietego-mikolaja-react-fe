import React, {FormEvent, useState} from "react";
import { CreateGiftReq, GiftEntity } from "types";
import {LoadingSpinner} from "../common/LoadingSpinner/LoadingSpinner";

// @Todo przenieść do osobnych funkcji zapytania do API
export const GiftAdd = () => {
    const [form, setForm] = useState<CreateGiftReq>({
        name: '',
        count: 0,
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: any) => {
        setForm( form => ({
            ...form,
            [key]: value,
        }));
    }

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        // @Todo made error validation
        try {

            const res = await fetch('http://localhost:3001/gift', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: GiftEntity = await res.json();

            setResultInfo(`Gift named ${data.name} added with id ${data.id}.`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <LoadingSpinner/>;
    }

    if (resultInfo !== null) {
        return <div>
            <p>{resultInfo}</p>
            <button onClick={() => setResultInfo(null)}>Add another one</button>
        </div>

    }

    return <form onSubmit={sendForm}>
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
                    onChange={e => updateForm('count', Number(e.target.value))}
                />
            </label>
        </p>
        <button type={"submit"}>Add</button>
    </form>
}