'use server'
import {revalidatePath} from 'next/cache';


export async function createPost(_, formData) {
   
    const title = formData.get('title');
    const body = formData.get('body');
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            body,
            id: Date.now(),
            userId: 1
        })
    }).then(res => res.json())
    revalidatePath('/game/create');
    
    


    
}