import { useEffect, useState } from "react";


const lessions = [
    {
        id: 1,
        name: 'React la gi ? tai sao nen hoc React'
    },
    {
        id: 2,
        name: 'SPA/MPA la gi ? '
    },
    {
        id: 3,
        name: 'Arrow functions'
    }
]



function Content() {

    const [lessionId, setLesstionId] = useState(1);


    useEffect(()=>{

            const handleComment = ({detail}) => {
                console.log(detail);
            }

            window.addEventListener(`lession-${lessionId}` , handleComment)
       
            // clean up function : 
            return () => {
                window.removeEventListener(`lession-${lessionId}` , handleComment)
            }
        } , [lessionId]
    )

    return (
        <div>
            <ul>
                {lessions.map((lession) =>
                    <li
                        key={lession.id}
                        onClick={() => {
                            setLesstionId(lession.id);
                        }}
                        style={{ color: (lessionId === lession.id) ? 'red' : 'black' }}
                    >
                        {lession.name}

                    </li>
                )}
            </ul>
        </div>
    )

}

export default Content;