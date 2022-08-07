import { useState } from 'react'

type Props = {}

const Form = (props: Props) => {
    /* --- Hooks --- */
    const [textAreaValue, setTextAreaValue] = useState('')
    const [imageUrlValue, setImageUrlValue] = useState('')

    /*  --- variablea --- */ 
    const minTextLength = 10
    const canSave= Boolean(textAreaValue?.trim()?.length >= minTextLength || imageUrlValue?.trim())
    /* --- functions ---- */ 
    const uploadPost = ()=> {

    }

  return (
      <form onSubmit={()=> e.preventDefault()} className='flex flex-col relative text-black/75 dark:text-white/75'>
          <textarea 
          id="postForm"
          name="postForm" 
          rows="4" 
          placeholder='what do you want to talk about' 
          className='bg-transparent focus:outline-none dark:placeholder-white/75' 
          value={textAreaValue}
          onChange={(e)=>setTextAreaValue(e.target.value)} />
          <input 
              type="text" 
          placeholder='Add a image url (Optional)' 
          className='bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75'
          value={imageUrlValue}
          onChange={e => setImageUrlValue}
          />
        <button 
            className="absolute bottom-0 right-0 font-md bg-blue-400 hover:bg-blue-500 disabled:text-black-40 disabled:bg-white-75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
          disabled={!canSave}
            type="submit"
            onClick={handleSubmit}
        ></button>
      </form>
  )
}

export default Form                                     
