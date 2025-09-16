import { useState, createContext, useEffect } from "react";
import { api } from "../utils/api";

const PostContext = createContext();

export default PostContext;

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage]= useState(1)
  const [meta, setMeta]=useState(null)

      async function fetchPosts(page=1, pageSize=6) {
      setLoading(true)
      try {
        const response = await api.getPosts(page, pageSize);
        setPosts(response.data);
        console.log(response.data)
        setMeta(response.meta)
        setPage(page)
      } catch(error) {
        console.error('api issue', error);
      } finally{
        setLoading(false)
      }
    }

  useEffect(() => {

    fetchPosts();
  }, []);
  return (
    <PostContext.Provider value={{ posts, meta,page,loading,fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
}