import { Fragment, useState, useMemo, useCallback } from "react";

function DatePractice() {
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const yearArray = useMemo(() => {
        const output = [];
        for (
            let i = new Date().getFullYear() - 100;
            i <= new Date().getFullYear();
            i++
        ) {
            output.push(i);
        }
        return output;
    }, []);
    const monthArray = useMemo(() => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }, []);
    const dateArray = useMemo(() => {
        if (selectedYear && selectedMonth) {
            const totalDate = new Date(
                parseInt(selectedYear),
                parseInt(selectedMonth),
                0
            ).getDate();
            const output = [];
            for (let i = 1; i <= totalDate; i++) {
                output.push(i);
            }
            return output;
        } else {
            return [];
        }
    }, [selectedYear, selectedMonth]);
    const styles = useMemo(() => {
        return {
            formWrap: {
                padding: "40px",
                border: "1px solid black",
                width: "40%",
                margin: "auto",
                borderRadius: "10px",
            },
            radioStyle: {
                marginRight: "12px",
                cursor: "pointer",
                userSelect: "none",
            },
        };
    }, []);
    const verifyHandler = useCallback(
        (e) => {
            e.preventDefault();
            const seletedDate = new Date(
                parseInt(selectedYear),
                parseInt(selectedMonth) - 1,
                parseInt(selectedDate)
            );
            console.log(seletedDate);
            const nowDate = new Date();
            const seletedMilliSecond = seletedDate.getTime();
            const nowMilliSecond = nowDate.getTime();
        },
        [selectedYear, selectedMonth, selectedDate]
    );
    return (
        <Fragment>
            <form style={styles.formWrap}>
                <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    <option value="" disabled>
                        -- 年份 --
                    </option>
                    {yearArray.map((year) => (
                        <option key={year} value={year}>
                            {year} 年
                        </option>
                    ))}
                </select>
                <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    <option value="" disabled>
                        -- 月份 --
                    </option>
                    {monthArray.map((month) => (
                        <option key={month} value={month}>
                            {month} 月
                        </option>
                    ))}
                </select>
                <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                >
                    <option value="" disabled>
                        -- 月份 --
                    </option>
                    {dateArray.map((date) => (
                        <option key={date} value={date}>
                            {date} 日
                        </option>
                    ))}
                </select>
                <button onClick={(e) => verifyHandler(e)}>驗證</button>
            </form>
        </Fragment>
    );
}

export default DatePractice;
