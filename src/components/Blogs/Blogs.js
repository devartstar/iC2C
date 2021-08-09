import React from "react";
import Blog from "./Blog.js";
import style from "./Blog.module.css";
const Blogs=(props)=>{

return(

<div className={`${style.container2}`}>
    {
(props.content).map(item => {
                return(
                        
                            <Blog
                                heading={item.heading}
                                name={item.name}
                                texts={item.texts}
                            />
                    )
                })
    }
</div>
);
};

export default Blogs;