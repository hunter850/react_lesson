import { Fragment, useState, useMemo, useCallback } from "react";
import { counties, townships } from "./data/townships";

function TWZipCode() {
    const [selectedCounties, setSelectedCounties] = useState("");
    const [selectedTownship, setSelectedTownship] = useState("");
    const districtArray = useMemo(() => {
        const districtIndex = counties.indexOf(selectedCounties);
        if (districtIndex >= 0) return townships[districtIndex];
        return [];
    }, [selectedCounties]);
    const changeCountyHandler = useCallback((e) => {
        setSelectedCounties(e.target.value);
        setSelectedTownship("");
    }, []);
    return (
        <Fragment>
            <form>
                <select
                    value={selectedCounties}
                    onChange={(e) => changeCountyHandler(e)}
                >
                    <option value="" disabled>
                        -- 選擇縣市 --
                    </option>
                    {counties.map((county) => (
                        <option value={county} key={county}>
                            {county}
                        </option>
                    ))}
                </select>
                <select
                    value={selectedTownship}
                    onChange={(e) => setSelectedTownship(e.target.value)}
                >
                    <option value="" disabled>
                        -- 選擇區域 --
                    </option>
                    {districtArray.map((district) => (
                        <option value={district} key={district}>
                            {district}
                        </option>
                    ))}
                </select>
            </form>
        </Fragment>
    );
}

export default TWZipCode;
