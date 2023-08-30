import React from 'react'
import './layoutStyles.css';
import Appbar from './Appbar';
import Topbar from './Topbar';
import { Footer } from './Footer';

export default function Layout({ children }) {
    return (
        <div className="page">
            <Topbar />
            <Appbar />
            {children}
            <Footer />
        </div>
    )
}
