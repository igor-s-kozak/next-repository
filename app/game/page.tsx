export default async function Page () {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())

    console.log(posts.slice(0,6))
    
      
    return (
        <ul>
            {posts.map((item) => (
                <li key = {item.id}>
                    {item.id} . {item.title}
                </li>
            ))}
        </ul>
    )
}

