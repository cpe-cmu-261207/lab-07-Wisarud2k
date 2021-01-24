import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])
    const fetchPost = async () => {
        if(postId){
            const response = await axios.get(`${baseURL}/post/${postId}`,
            {
                headers: {
                    'app-id' : '600d932cbe74672ded2529ad'
                }
            })
            setPost(response.data)
            console.log(response.data)
        }
    }
    const fetchComment = async () => {
        if(postId){
            const response = await axios.get(`${baseURL}/post/${postId}/comment`,
            {
                headers: {
                    'app-id' : '600d932cbe74672ded2529ad'
                }
            })
            setComment(response.data.data)
            // console.log(response.data.data)
        }
    }

    useEffect(fetchPost,[postId])
    useEffect(fetchComment,[postId])
    return (
        <>
            {/* <h1>display post data from api here</h1> */}
            <>
            {post !== null ? (
                
                <>
                    <h1>
                        post : {post.text}
                    </h1>
                    <p>
                        tags : {post.tags.map(item => (
                            <>
                                {item }{' '}
                            </>
                        ))} 
                    </p>
                    <img width="400px" src= {post.image}></img>
                    <p>
                        Like : {post.likes}
                    </p>

                    
                </>):null
                
            }

            {comment !== null ? (
                <>
                    <h5>Comments</h5>
                    {comment.map(com => (
                        <>
                            <p>
                               {com.owner.firstName} {com.owner.lastName} : {com.message}
                            </p>
                        </>
                    ))
                    }
                </>
            ):null
            }

            <Link href='/post'>
                <button>
                back
                </button>
            </Link>
            
            </>
        </>
    )
}

export  default  Post

