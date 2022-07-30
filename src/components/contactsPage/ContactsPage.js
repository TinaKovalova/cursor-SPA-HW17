import {Component} from "react";
import Contact from "../contact/Contact";
import './ContactsPage.css';
import {CONTACTS} from '../../constants';
import {v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVenus, faMars, faMarsAndVenus} from '@fortawesome/free-solid-svg-icons';


export default class ContactsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParam: '',
            genderSearchParams: {
                male: true,
                female: true,
                unknownGender: true
            },
            contacts: null
        };
    }

    componentDidMount() {
        this.setState({contacts: CONTACTS});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
            const sorted = this.filterContacts(this.state.genderSearchParams, this.state.searchParam);
            this.setState({contacts: sorted});
        }
    }

    filterContacts = (genderParams, searchTextParam) => {
        const filteredByGender = CONTACTS.filter(contact => genderParams[contact.gender]
            || (!(contact.gender in genderParams) && genderParams.unknownGender));
        const searchResult = searchTextParam ?
            filteredByGender.filter(
                ({
                     firstName,
                     lastName,
                     phone
                 }) => `${firstName} ${lastName} ${phone}`.toLowerCase().includes(searchTextParam)) : filteredByGender;
        return searchResult;
    }

    handleSearch = (event) => {
        const target = event.target;
        if (target.name in this.state.genderSearchParams) {
            this.setState((prev) => ({
                genderSearchParams: {
                    ...prev.genderSearchParams,
                    [target.name]: target.checked
                }
            }))

        } else if (target.name === 'name') {
            this.setState((prev) => ({searchParam: target.value.toLowerCase()}))
        }
    }

    render() {
        const {contacts, searchParam, genderSearchParams} = this.state;
        return (
            <div className='d-flex contacts br-10'>
                <div className="d-flex contact-search br-10 ">
                    <input className="contact-search-main br-10"
                           name='name'
                           type="text"
                           placeholder="<Search..."
                           onChange={this.handleSearch}
                           value={searchParam}/>
                    <div className="d-flex contact-gender-search">
                        <div className="d-flex gender-checkbox">
                            <input name="male"
                                   type="checkbox"
                                   onChange={this.handleSearch}
                                   checked={genderSearchParams.male}/>
                            <FontAwesomeIcon icon={faMars}/>
                        </div>
                        <div className="d-flex gender-checkbox">
                            <input name="female"
                                   type="checkbox"
                                   onChange={this.handleSearch}
                                   checked={genderSearchParams.female}/>
                            <FontAwesomeIcon icon={faVenus}/>
                        </div>
                        <div className="d-flex gender-checkbox">
                            <input name="unknownGender"
                                   type="checkbox"
                                   onChange={this.handleSearch}
                                   checked={genderSearchParams.unknownGender}/>
                            <FontAwesomeIcon icon={faMarsAndVenus}/>
                        </div>
                    </div>
                </div>
                <div className="contacts-list">
                    <ul>
                        {
                            contacts?.map(contact => <li className="br-10" key={uuidv4()}><Contact {...contact}/></li>)
                        }
                    </ul>
                </div>

            </div>
        )
    }
}