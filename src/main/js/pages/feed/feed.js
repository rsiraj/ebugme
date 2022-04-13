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
                    {props.posts.map((data) => (
                        <Link to={`/story/${data.id}`} key={data.id}>
                            <Post
                                title={data.title}
                                postImage={data.postImage}
                                text={data.text}
                                author={data.author}
                                group={data.group}
                                date={data.date}
                                read_length={data.read_length}
                            />
                        </Link>
                    ))}
                </div>
                {/* Displays the New Writer UI Component */}
                <NewWriter />
            </div>
        </>
    );
};

export default Home;
