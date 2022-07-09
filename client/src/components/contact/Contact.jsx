
import {Purple , CurrentLine , Orange ,Cyan, Red} from "../../helper/color"

export default function Contact() {
    return (
        <div className='col-md-6'>
            <div style={{ backgroundColor: CurrentLine }} className="card my-2">
                <div className='card-body'>
                    <div className='row align-items-center d-flex justify-content-around'>
                        <div className=' col-md-4 col-sm-4'>
                            <img src="http://via.placeholder.com/200"
                                style={{ border: `1px solid ${Purple}` }}
                                className='img-fluid rounded'
                                alt="picture" />
                        </div>
                        <div className='col-md-7 col-sm-7'>
                            <ul className='list-group'>
                                <li className='list-group-item list-group-item-dark'>
                                    Name and family : {' '}
                                    <span className='fw-bold'>
                                        Max Amini
                                    </span>
                                </li>
                                {/* ////////////////////////////////////////////////// */}
                                <li className='list-group-item list-group-item-dark'>
                                    Phone Number : {' '}
                                    <span className='fw-bold'>
                                        987654321
                                    </span>
                                </li>
                                {/* ////////////////////////////////////////////////// */}
                                <li className='list-group-item list-group-item-dark'>
                                    Email : {' '}
                                    <span className='fw-bold'>
                                        Max Amini@gmail.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-1 col-sm-1 d-flex flex-column align-items-center'>
                            <button className='btn my-1' style={{ backgroundColor: Orange }}>
                                <i className='fa fa-eye'></i>
                            </button>
                            <button className='btn my-1' style={{ backgroundColor: Cyan }}>
                                <i className='fa fa-pen'></i>
                            </button>
                            <button className='btn my-1' style={{ backgroundColor: Red }}>
                                <i className='fa fa-trash'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}