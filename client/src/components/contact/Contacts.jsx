import { Fragment } from "react";
import { Pink, CurrentLine, Orange } from "../../helper/color";
import Contact from './contact';
import NotFound from '../../assets/no-found.gif';
import Spinner from '../Spineer';

export default function Contacts({ contacts, loading }) {
    return (
        <Fragment>
            <section className='container'>
                <div className='grid'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h3'>
                                <button className='btn mx-2' style={{ backgroundColor: Pink }}>
                                    New Contact
                                    <i className='fa fa-plus-circle mx-2' />
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> : (
                    <section className='container'>
                        <div className='row'>
                            {
                                contacts.length > 0 ? contacts.map(c => (
                                    <Contact key={c.id} Contact={c} />
                                )) :
                                    (
                                        <div className=' text-center py-5' style={{ backgroundColor: CurrentLine }}>
                                            <p className='h3' style={{ color: Orange }}>
                                                Contact Not Found ...
                                            </p>
                                            <img src={NotFound} alt="Not found" className=' w-25' />
                                        </div>
                                    )
                            }

                        </div>
                    </section>
                )
            }

        </Fragment>
    )
}