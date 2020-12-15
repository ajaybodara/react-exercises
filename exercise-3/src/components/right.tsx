import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_CONTINENT } from "./Apollo.query";

type continent = {
    name: string;
    code: string;
    countries: any;
};

const Right: React.FC = () => {
    const [getCountries, { data, loading, error }] = useLazyQuery(GET_CONTINENT);
    const [code, setcode] = useState('');
    const getData = () => {
        if (loading) return <div>loading</div>;
        if (error) return <div>Something went wrong</div>;
        if (data) {
            const { continent }: { continent: continent } = data;
            return (

                <ul className="continent_data">
                    {continent.countries.map((res: any) =>
                        <li>{res.emoji} {res.name}</li>
                    )}
                </ul>

            );
        }
        return <div className="no_data">No Data shown!</div>;
    };

    const ButtonClick = () => {
        getCountries({
            variables: {
                code: code.toUpperCase(),
            },
        });
    };

    return (
        <div>
            <input className="add_data" onChange={(e) => setcode(e.target.value)} placeholder="Enter continent code"></input>
            <button className="button" onClick={ButtonClick}>submit</button>
            {getData()}
        </div>
    );
};

export default Right;
