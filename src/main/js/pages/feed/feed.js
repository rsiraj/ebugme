import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import NewWriter from "../../components/newWriter/newWriter";
import Post from "../../components/post/post";
import { getStorageValue } from "../../utils/useLocalStorage";

const Home = (props) => {
    const [posts, setPosts] = useState(props.posts);

    // Function that triggers as soon as the page loads
    useEffect(() => {
        // Scroll to the top of the screen as the page loads
        window.scrollTo(0, 0);

        // Updates state variable to store the values in local storage at a specified key
        // And provide a default value of props.posts which is a json file declared in the file structure
        setPosts(getStorageValue("post", props.posts));
    }, []);

    return (
        <>
            <Navigation title="LOGO " />
            <div id="home">
                <div>
                    {/* Displays the posts stored in the posts state variable */}
                    <Link
                        to={`/story/${props.posts[0].id}`}
                        key={props.posts[0].id}
                    >
                        <Post
                            title={props.posts[0].title}
                            postImage={props.posts[0].postImage}
                            text={props.posts[0].text}
                            author={props.posts[0].author}
                            group={props.posts[0].group}
                            date={props.posts[0].date}
                            read_length={props.posts[0].read_length}
                        />
                        </Link>
                        
                        <Link
                        to={`/story/${props.posts[1].id}`}
                        key={props.posts[1].id}
                    >
                        <Post
                            title={props.posts[1].title}
                            postImage={props.posts[1].postImage}
                            text={props.posts[1].text}
                            author={props.posts[1].author}
                            group={props.posts[1].group}
                            date={props.posts[1].date}
                            read_length={props.posts[1].read_length}
                        />
                        </Link>

                        <Link
                        to={`/story/${props.posts[2].id}`}
                        key={props.posts[2].id}
                    >
                        <Post
                            title={props.posts[2].title}
                            postImage={props.posts[2].postImage}
                            text={props.posts[2].text}
                            author={props.posts[2].author}
                            group={props.posts[2].group}
                            date={props.posts[2].date}
                            read_length={props.posts[2].read_length}
                        />
                        </Link>

                        <Link
                        to={`/story/${props.posts[3].id}`}
                        key={props.posts[3].id}
                    >
                        <Post
                            title={props.posts[3].title}
                            postImage={props.posts[3].postImage}
                            text={props.posts[3].text}
                            author={props.posts[3].author}
                            group={props.posts[3].group}
                            date={props.posts[3].date}
                            read_length={props.posts[3].read_length}
                        />
                        </Link>

                        <Link
                        to={`/story/${props.posts[4].id}`}
                        key={props.posts[4].id}
                    >
                        <Post
                            title={props.posts[4].title}
                            postImage={props.posts[4].postImage}
                            text={props.posts[4].text}
                            author={props.posts[4].author}
                            group={props.posts[4].group}
                            date={props.posts[4].date}
                            read_length={props.posts[4].read_length}
                        />
                        </Link>
                    
                    
                </div>
                {/* Displays the New Writer UI Component */}
                <NewWriter />
            </div>
        </>
    );
};

export default Home;
