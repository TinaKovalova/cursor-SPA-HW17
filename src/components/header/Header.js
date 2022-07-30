import {Component} from "react";
import {NavLink} from "react-router-dom";
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='navigation'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/posts'>Posts</NavLink></li>
                    <li><NavLink to='/gallery'>Gallery</NavLink></li>
                    <li><NavLink to='/contacts'>Contacts</NavLink></li>
                </ul>
            </div>
        );
    }
}