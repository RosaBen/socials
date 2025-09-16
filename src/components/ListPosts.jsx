
import {usePosts} from '../utils/usePost'
export default function ListPosts(){
  const {posts, meta, page, loading, fetchPosts} = usePosts()
  if(loading) return <p>Chargement ...</p>

  const postsList = posts?.map((post)=>(
    <div key={post.id} className='post-card'>
      <p>{post.attributes.text}</p>
      <p>{post.attributes.author}</p>
      <p>{post.attributes.like}</p>
    </div>
  ))

  return(
    <>
  <div className='posts-container'>
    {posts?.length > 0 ? postsList : <p>Aucun post disponible</p>}
  </div>
  {meta && (
    <div>
      <button
      disabled={page === 1}
      onClick={()=> fetchPosts(page -1)}
      >
        Previous page
      </button>
      <span>
        {meta.pagination.page}/{meta.pagination.pageCount}
      </span>
            <button
      disabled={page === meta.pagination.pageCount}
      onClick={()=> fetchPosts(page +1)}
      >
        Next page
      </button>
    </div>
  )}
    </>
  )
}