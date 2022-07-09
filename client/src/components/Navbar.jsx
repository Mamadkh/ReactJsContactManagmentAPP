

import {Background,Purple} from '../helper/color'
import SearchContact from './contact/Searchcontact';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg"
            style={{ backgroundColor: Background }}>
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <div className=' navbar-brand'>
                            <i className="fas fa-id-badge" style={{ color: Purple }} />{" "}
                            Web Application managment {" "}
                            <span style={{ color: Purple }}> Contact</span>
                        </div>
                    </div>
                    <div className="col">
                        <SearchContact />

                    </div>
                </div>

            </div>
        </nav>
    )
}