import { useState } from 'react'

const BlogForm = ({ blogSubmit, editblog }: any) => {
    const [formImg, setFormImg] = useState(editblog ? editblog.img : "");
    const [formCategory, setFormCategory] = useState(editblog ? editblog.category : "");
    const [formTitle, setFormTitle] = useState(editblog ? editblog.title : "");
    const [formDesc, setFormDesc] = useState(editblog ? editblog.desc : "");


    const formSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!formImg || !formCategory || !formTitle || !formDesc) {
            alert('Please,fill input');
        } else {
            blogSubmit({
                img: formImg,
                category: formCategory,
                title: formTitle,
                desc: formDesc
            })
        }
    }

    return (
        <div className='d-flex align-center justify-content-center flex-column my-4'>
            <form className='col-12' onSubmit={formSubmit}>
                <div className="mb-3">
                    <label className="form-label text_color">Title</label>
                    <input onChange={(e) => { setFormTitle(e.target.value) }} value={formTitle} className="form-control contact-input text_color" />
                </div>
                <div className="mb-3">
                    <label className="form-label text_color">Image url</label>
                    <input onChange={(e) => { setFormImg(e.target.value) }} value={formImg} className="form-control contact-input text_color" />
                </div> 
                <div className="mb-3">
                    <label className="form-label text_color">Category</label>
                    <input onChange={(e) => { setFormCategory(e.target.value) }} value={formCategory} className="form-control contact-input text_color" />
                </div>
                <div className="mb-3">
                    <label className="form-label text_color">Description</label>
                    <textarea onChange={(e) => { setFormDesc(e.target.value) }} value={formDesc} className="form-control contact-input2 text_color"  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark">Save</button>
            </form>
        </div>
    )
}

export default BlogForm;