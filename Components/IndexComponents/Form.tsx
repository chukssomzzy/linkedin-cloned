import { useState } from 'react'
import { postPost } from '../../api/posts'
import { useSession } from 'next-auth/react' 
import { useRecoilState } from 'recoil'
import { modalState } from '../../atoms/modalAtom'
import { handlePostState } from '../../atoms/postsAtom'

type Props = {}

const Form = (props: Props) => {
    /* --- Hooks --- */
    const [textAreaValue, setTextAreaValue] = useState('')
    const [imageUrlValue, setImageUrlValue] = useState('')
    const [handlePost, setHandlePost] = useRecoilState(handlePostState)
    const { data: session } = useSession()
    const [modalOpen, setModalOpen ] = useRecoilState(modalState)

    /*  --- variablea --- */ 
    const minTextLength = 10
    const canSave= Boolean(textAreaValue?.trim()?.length >= minTextLength || imageUrlValue?.trim())
    /* --- functions ---- */ 
    const uploadPost = async (e: React.MouseEvent<HTMLButtonElement>)=> {
       try {
           const post = await postPost({
               post: textAreaValue,
               imageUrl: imageUrlValue,
               postedBy:{
                   userName: session?.user?.name as string ,
                   userEmail: session?.user?.email as string,
                   userImageUrl: session?.user?.image as string
               },
               createdAt: Date.now().toString()
           })
           setModalOpen(false)
           setTextAreaValue('')
           setImageUrlValue('')
           setHandlePost(true)
       } catch (e){
           console.log(e)
       }
    }

  return (
      <form onSubmit={(e)=> e.preventDefault()} className='flex flex-col relative text-black/75 dark:text-white/75'>
          <textarea 
          id="postForm"
          name="postForm" 
          rows={4} 
          placeholder='what do you want to talk about' 
          className='bg-transparent focus:outline-none dark:placeholder-white/75' 
          value={textAreaValue}
          onChange={(e)=>setTextAreaValue(e.target.value)} />
          <input 
              type="text" 
          placeholder='Add a image url (Optional)' 
          className='bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75'
          value={imageUrlValue}
          onChange={() => setImageUrlValue}
          />
        <button 
            className="absolute bottom-0 right-0 font-md bg-blue-400 hover:bg-blue-500 disabled:text-black-40 disabled:bg-white-75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
          disabled={!canSave}
            type="submit"
            onClick={uploadPost}
        ></button>
      </form>
  )
}

export default Form                                     
