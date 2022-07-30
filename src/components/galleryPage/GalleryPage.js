import {Component, Fragment} from "react";
import './GalleryPage.css';
import Service from "../../service";


export default class GalleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
        this.service = new Service();
    }

    componentDidMount() {
        this.service.getData().then(result => {
            const data = result.map(item => ({id: item.id, name: item.name, image: item.image}));
            this.setState({data});
        })
    }

    render() {
        const {data} = this.state;
        return (
            <div className='gallery-block'>
                {
                    data ? data.map(({id, name, image}) => (
                            <div key={id} className="card">
                                <img className='card-img' src={image} alt="Avatar"/>
                                <div className="container">
                                    <h4><b>{name}</b></h4>
                                </div>
                            </div>)) :
                        <div className="loader"></div>
                }
            </div>
        );
    }
}