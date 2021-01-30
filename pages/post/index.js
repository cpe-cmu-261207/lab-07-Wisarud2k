import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await axios.get(`${baseURL}/post`,
        {
            headers: {
                'app-id': '600d932cbe74672ded2529ad'
            }
        })
        console.log(response.data)
        setPosts(response.data.data)
    }

    useEffect(fetchPosts,[])
    return (
        <>
            <h1>All Posts</h1><br></br>
            <Link href = "/">
                    <button>Home</button>
            </Link>
            <>
                {
                    posts.map(post => (
                        <>
                            <p>
                                post : {post.text}
                            </p>
                            <img width="400px" src= {post.image}></img>
                            <p>
                                Like : {post.likes}
                            </p>

                            <Link key={post.id} href={`/post/${post.id}`}>
                                <button>Go to this post</button>
                            </Link>
                        </>
                    ))

                    
                }
                
            </>
        </>
    )
}

export default  Posts
