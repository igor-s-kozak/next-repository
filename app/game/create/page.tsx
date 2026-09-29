'use client'
import Form from "@/app/ui/invoices/create-form"
import { redirect } from 'next/navigation';
import { createPost } from "./create-post";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";




export default function Page() {

    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const initialState = {
        message: ''
    }
    const [state, formAction, pending] = useActionState(createPost, initialState);
    useEffect(() => {
        async function loadPosts() {

            fetch('http://localhost:3000/posts')
                .then(response => response.json()).then((res) => setPosts(res))

        }
        loadPosts();
    }, [])



    useEffect(() => {
        console.log('state', state);

    }, [state])





    return (
        <>
            <form className="grid justify-center size-full" action={formAction} >
                <div>

                    <label htmlFor="title">
                        Some input title
                        <input className="rounded-2xl" required id='title' name='title' title='Title' type='text' />
                    </label>
                </div>
                <div>

                    <label htmlFor="body">
                        Some input body
                        <input required className="rounded-2xl" id='input-body' name='body' title='body' type='text' />
                    </label>
                </div>
                <button onClick={router.refresh} disabled={pending} className='rounded-2xl border solid'>Submit</button>

            </form>
            {pending ? <div>Loading .... </div> : <ul>
                {posts.map((item) => (
                    <li key={item.id}>
                        {item.id} . {item.title}
                    </li>
                ))}
            </ul>}
        </>
    )
}