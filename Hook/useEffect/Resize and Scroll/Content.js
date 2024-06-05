import { useEffect, useState } from "react";



function Content() {

    // Resize : 

    const [state, setState] = useState(window.innerWidth);

    useEffect(

        () => {

            const handleResize = () => {
                setState(window.innerWidth);
            }
            window.addEventListener('resize', handleResize)

            // clean up function : 
            return ()=> {
            window.removeEventListener('resize', handleResize)
            }

        }
        , [])

    return (
        <>
            <div>
                {state}
            </div>
        </>
    )

    //  Scroll : 

    // const [width, setWidth] = useState(window.scrollY);
    // const [goToTop, setGoTOTop] = useState(false);
    // const [posts, setPosts] = useState([]);


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(resp => resp.json())
    //         .then(posts => setPosts(posts))
    // }, [])

    // useEffect(() => {

    //     const handleScroll = () => {

    //         setGoTOTop(window.scrollY > 200)
    //     }

    //     window.addEventListener('scroll', handleScroll)
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)

    //     }
    // }, [])


    // return (

    //     <>
    //         <div>
    //             {posts.map(p =>
    //             (
    //                 <li key={p.id}>{p.body}</li>
    //             )
    //             )}
    //         </div>

    //         {goToTop &&
    //             (
    //                 <button
    //                     style={{
    //                         position: 'fixed',
    //                         bottom: 20,
    //                         right: 20
    //                     }}
    //                 >
    //                     Go to top
    //                 </button>
    //             )
    //         }
    //     </>
    // )

}

export default Content;