import {Component} from "react";
import avatar from '../../assets/darth-vader.png';

export default class CardImage extends Component {
    constructor(props) {
        super(props);
        this.state = {src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/loader-spinner.png'};
    }

    componentDidMount() {
        fetch(this.props.src).then((response) => {
            this.setState({src: response.status == 404 ? avatar : response.url});
        });
    }

    render() {
        return (<>
            <img className='card-img'
                 src={this.state.src}/>
        </>);
    }
}

