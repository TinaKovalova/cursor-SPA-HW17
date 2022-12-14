import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {Header, AboutPage, ContactsPage, GalleryPage, PostsPage} from '../index';

function App() {
    return (
        <div className="App">

            <div className='main-container'>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={AboutPage}/>
                        <Route path='/posts' component={PostsPage}/>
                        <Route path='/gallery' component={GalleryPage}/>
                        <Route path='/contacts' component={ContactsPage}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
