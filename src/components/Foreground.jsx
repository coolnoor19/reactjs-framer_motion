import React, { useRef, useState } from 'react'
import Card from './Card'


const Foreground = () => {
  
    const ref = useRef(null)

    const data = [
        { desc: "this is a website.",
          filesize: ".9mb", 
          close: true, 
          tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },
        { desc: "be ready for your next project.",
            filesize: ".9mb", 
            close: true, 
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        { desc: "happy to make this project with the use of framer motion.",
            filesize: ".9mb", 
            close: false, 
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" }
          },


    ];

    
   
    return (
        
            <div ref= {ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
               {data.map((item, index)=>(
                <Card data={item} reference={ref}/>
               ))}
            </div>

        
    )
}

export default Foreground
