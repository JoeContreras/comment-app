import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommentForm from "./components/CommentForm";
import EditCommentForm from "./components/EditCommentForm";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommentForm />} />
          <Route path="/edit/:id" element={<EditCommentForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
