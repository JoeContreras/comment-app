import { useState } from "react";
import CommentsList from "./CommentsList";
import { useCreateCommentMutation } from "../api/apiSlice";

const initialState = {
    email: "",
    comment: "",
    };
function CommentForm() {
    const [commentForm, setCommentForm] = useState(initialState);
    const [createComment] = useCreateCommentMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentForm({
            ...commentForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createComment({ ...commentForm, deleted: false});
        setCommentForm(initialState);
    };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            name="email"
            value={commentForm.email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="comment"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your comment
          </label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={commentForm.comment}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></input>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <CommentsList />
    </div>
  );
}

export default CommentForm;
