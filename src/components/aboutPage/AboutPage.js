import {Component, Fragment} from "react";
import './AboutPage.css';
import {YODA_IMAGE} from "../../constants";

export default class AboutPage extends Component{
    render() {
        return(
            <div className='about-block'>
                <div className='about-block-card'>
                    <img src={YODA_IMAGE}/>
                    <div className='card-text'>
                        <p>
                            Yoda is a fictional character in the Star Wars universe.
                            He is a small, green humanoid alien who is powerful with the Force and is a leading member of the Jedi Order until its near annihilation.
                            Yoda is an iconic figure in popular culture due to his distinct pattern of speech and role as a wise mentor.
                        </p>
                    </div>

                </div>


            </div>

        )
    }
}