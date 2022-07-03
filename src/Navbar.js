import React, { useEffect, useState, useRef } from 'react'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'

export default function Navbar() {
    const [showlinks, setShowlinks] = useState(false)
    const navRef = useRef()
    const linksRef = useRef()

    // ! there are two methods but I think the second one is more accurate
    // useEffect(() => {
    //     showlinks ?
    //         navRef.current.style.height = `${links.length * 2.5}rem`
    //         :
    //         navRef.current.style.height = '0'

    // }, [showlinks])

    useEffect(() => {
        // ! here we are going to change the height of the nav according to the height of the links
        let linksHeight = linksRef.current.getBoundingClientRect().height
        navRef.current.style.height = showlinks ? `${linksHeight}px` : '0'
        // ! very important note : make sure to set the height on bigger screen to be auto or there will be no links
    }, [showlinks])

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="coding addict logo" />
                    <button onClick={() => setShowlinks(!showlinks)} className={`nav-toggle ${showlinks && 'rotate'}`}>
                        <FaBars />
                    </button>
                </div>
                <div ref={navRef} className={`links-container ${showlinks && 'show-container'}`}>
                    <ul ref={linksRef} className='links'>
                        {
                            links.map(link => {
                                const { id, url, text } = link
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className="social-icons">
                    {
                        social.map(s => {
                            const { id, url, icon } = s
                            return (
                                <li key={id}>
                                    <a href={url}>
                                        {icon}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}
