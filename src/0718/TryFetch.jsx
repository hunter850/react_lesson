import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import useSetTimeout from "../hooks/useSetTimeout";

function TryFetch() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [timeout] = useSetTimeout();
    useEffect(() => {
        async function getData() {
            const response = await axios.get(
                "http://my-json-server.typicode.com/eyesofkids/json-fake-data/users"
            );
            setUsers(response.data);
            timeout(() => {
                setIsLoading(false);
            }, 500);
        }
        getData();
    }, [timeout]);

    const spinnerEl = (
        <Fragment>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </Fragment>
    );
    
    const dataEl = (
        <Fragment>
            <button className="btn btn-primary">primary</button>
            <button className="btn btn-secondary">secondary</button>
            <table border="1">
                <tbody>
                    {users.map((user) => (
                        <Fragment key={user.id}>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.birth}</td>
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );

    return <Fragment>{isLoading ? spinnerEl : dataEl}</Fragment>;
}

export default TryFetch;
