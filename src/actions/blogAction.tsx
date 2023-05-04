import { v4 as uuid } from "uuid";

export const addBlog = ({title,desc,img,category}:any) => ({
    type: "ADD_BLOG",
    blog: {
        id:uuid(),
        category:category,
        img: img,
        title: title,
        desc: desc,
    }
});

export const editBlog = (id:any,uptade:any)=> ({
    type: "UPTADE_BLOG",
    id,
    uptade,
});


export const removeBlog = ({id}:any) => ({
    type: "REMOVE_BLOG",
    id:id
});