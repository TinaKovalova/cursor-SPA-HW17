import {Component} from "react";
import Post from "../post/Post";
import './PostsPage.css'
import {ANAKIN_IMAGE, RAY_IMAGE} from "../../constants";
export default class PostsPage extends Component{
    render() {
        return(
            <div className='posts-container'>
                <Post author={{
                    name: "Anakin skywalker",
                    photo: ANAKIN_IMAGE,
                    nickname: "@dart_vader"
                }}
                      content='WTF? Who is Ray? Why she is Skywalker? Luke...?'
                      image={RAY_IMAGE}
                      date={"26 февр."}/>
                <Post author={{
                    name: "Anakin skywalker",
                    photo: ANAKIN_IMAGE,
                    nickname: "@dart_vader"
                }}
                      content='WTF? Who is Ray? Why she is Skywalker? Luke...?'
                      image={RAY_IMAGE}
                      date={"26 февр."}/>


            </div>
        )
    }
}