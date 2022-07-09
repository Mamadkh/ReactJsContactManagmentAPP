

import { Purple} from './../../helpers/colors';

export default function SearchContact() {
    return (
        <div className=" input-group mx-2 w-75">
            <span className=" input-group-text" id="basic-addon1" 
            style={{ backgroundColor: Purple }}>
                <i className="fas fa-search" />
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Search Contact ..."
                aria-label="Search"
                aria-describedby="basic-addon1"
            />
        </div>
    )
}