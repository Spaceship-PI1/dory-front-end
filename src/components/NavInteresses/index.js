import React from "react";
import { useNavigate } from 'react-router-dom';

import './style.css';

export default function NavInteresses({ data }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate({
            pathname: '/pesquisa',
            search: `?q=${e.target.value}`
        });

        e.preventDefault();
    }

    return (
        <div className="interesses-container">
            <p>Seus interesses</p>
            <ul className="interesses-list-tags">
                { data?.map((inter, index) => (
                    <button key={index} onClick={handleSubmit} value={inter}>{inter}</button>))
                }
            </ul>
        </div>
    )
}