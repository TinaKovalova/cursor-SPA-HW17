import {Component} from "react";
import './Contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVenus, faMars} from '@fortawesome/free-solid-svg-icons'


export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {firstName, lastName, phone, gender} = this.props;
        return (
            <div className="contact">
                <div className="contact-photo"></div>
                <div className="contact-data">
                    <p className="contact-name">{`${firstName} ${lastName}`}</p>
                    <p className="contact-phone">{phone}</p>
                </div>
                <div className="contact-gender">
                    {
                        gender ?
                            (gender === 'male' ?
                                <FontAwesomeIcon icon={faMars}/> :
                                <FontAwesomeIcon icon={faVenus}/>)
                            : null
                    }
                </div>
            </div>
        );
    }


}
