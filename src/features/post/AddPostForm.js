import React from 'react'
import { useState } from 'react'
import{useDispatch} from 'react-redux'

import { postAdd } from './postSlice'

const AddPostForm = () => {

    const[title, setTitle]=useState('');
    const dispatch= useDispatch();
    const onTitleChange =e=>setTitle(e.target.value);

    const onSavePost = ()=>{
        if(title){
            dispatch(
                postAdd(title),
            )

            setTitle('');
        }
    }

  return (
    <>
    <section className='my-2 p-4'>
        <h1 className='text-xl font-[400]'>Your Input Fied</h1>
        <div className='flex  my-4 gap-3'>
            <input type='text' value={title} className="bg-red-100 border m-4 p-3" placeholder='Enter here' onChange={onTitleChange}/>
            <button onClick={onSavePost}>Save Post</button>
        </div>
    </section>
    </>
  )
}

export default AddPostForm
