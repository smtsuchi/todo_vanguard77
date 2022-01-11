import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            this is Home
            <Link to='/window'>Window</Link>
        </div>
    )
}
