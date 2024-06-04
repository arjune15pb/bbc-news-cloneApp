import { useEffect, useState } from 'react'
import { doc, addDoc, collection, getDocs } from 'firebase/firestore'
import { auth, database } from '../firebase/setup'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Comments(props) {
  const [comments, setComments] = useState('')
  const [newsComments, setNewsComments] = useState([])

  const addComment = async () => {
    if(comments==""){
      return
    }
    const newsDoc = doc(database, 'News', `${props.url.substr(-10, 10)}`)
    const commentsRef = collection(newsDoc, 'Comments')
    auth.currentUser == null && toast.warning("Please login")
    try {
      auth.currentUser &&
      await addDoc(commentsRef, {
        comments: comments,
        
        name: auth.currentUser.displayName,
        profileImg:auth.currentUser.photoURL
      })
     auth.currentUser && toast.success("comments added succesfully")
     setComments("")
    } catch (err) {
      console.error(err)
    }
  }

  const showComments = async () => {
    const newsDoc = doc(database, 'News', `${props.url.substr(-10, 10)}`)
    const commentsRef = collection(newsDoc, 'Comments')

    try {
      const data = await getDocs(commentsRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setNewsComments(filteredData)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    showComments()
  }, [newsComments])

  return (
    <div className="grid grid-rows-2">
      <div className="p-5 mt-10">
        <label
          for="Add Comments"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Add Comments
        </label>
        <div className="flex">
          <input
            onChange={(e) => setComments(e.target.value)}
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Comments"
            value={comments}
            required
          />
          <button
            onClick={addComment}
            class="ml-2 bg-gray-50 hover:bg-slate-300 text-gray-500 text-sm py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
      <div className="h-2 p-4">
        {newsComments.map((data) => {
          return (
            <>
              <div className="flex">
                <img
                  src={data.profileImg}
                  alt="img"
                  className="rounded-full w-5 h-5"
                />
                <h6 className="font-semibold ml-2 text-xs text-slate-500">
                  {data.name.toUpperCase()}
                </h6>
              </div>
              <h6 className="ml-7">{data.comments}</h6>
            </>
          )
        })}
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default Comments
