import React from "react";
import style from "./Blog.module.css";

const Blog=(props)=>(
<div className={`${style.container} p-4`}>
    <div className={`${style.header} pb-4`}>
    <div className ={style.title}>{props.heading}</div>
    <div className={`${style.subTitle} mt-3`}>{props.name}</div>
    </div>
    <div className={`${style.body} mt-3`}>
        <p>{props.texts}
        <a href="https://medium.com/@ish.ranga11/the-8-month-plan-to-get-an-internship-in-your-dream-company-8195e419726a" target="_blank">read more</a>
        </p>
    </div>
</div>
);


export default Blog;