import { useEffect, useState } from 'react'
import { doc, addDoc, collection, getDocs } from 'firebase/firestore'
import { database } from '../firebase/setup'
function Comments(props) {
  const [comments, setComments] = useState('')

  const addComment = async () => {
    const newsDoc = doc(database, 'News', `${props.url.substr(-10, 10)}`)
    const commentsRef = collection(newsDoc, 'Comments')

    try {
      await addDoc(commentsRef, {
        comments: comments,
      })
    } catch (err) {
      console.error(err)
    }
  }

  const showComments = async () => {
    const newsDoc = doc(database, 'News', `${props.url.substr(-10, 10)}`)
    const commentsRef = collection(newsDoc, 'Comments')

    try {
      const data=await getDocs(commentsRef)
      const filteredData=data.docs.map()
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    showComments()
  }, [])

  return (
    <div className="grid grid-rows-2">
      <div className="p-5">
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
    </div>
  )
}

export default Comments
