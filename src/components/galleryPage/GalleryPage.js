import {Component} from "react";
import './GalleryPage.css';
import Service from "../../service";
import CardImage from '../cardImage/CardImage';

export default class GalleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null, src: ''};
        this.service = new Service();
    }

    componentDidMount() {
        this.service.getData().then(result => {
            const data = result.map(item => ({id: item.id, name: item.name, image: item.image}));
            this.setState({data});
        });
    }

    render() {
        const {data} = this.state;

        return (
            <div className='gallery-block'>
                {
                    data ? data.map(({id, name, image}) => {
                            return (
                                <div key={id} className="card">
                                    <CardImage className='card-img' src={image}/>
                                    <div className="container">
                                        <h4><b>{name}</b></h4>
                                    </div>
                                </div>)
                        }) :
                        <div className="loader"></div>
                }
            </div>
        );
    }
}