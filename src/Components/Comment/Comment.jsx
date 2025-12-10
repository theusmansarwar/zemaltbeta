import React, { useState } from "react";
import "./Comment.css";
import { commentAdd } from "@/DAL/Create";
import { formatDate } from "@/utils/FormatDate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comment = ({ blogId, comments = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (isSubmitted) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: e.target.value.trim() ? "" : prevErrors[e.target.name],
      }));
    }
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Validate form
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.comment.trim()) errors.comment = "Comment cannot be empty.";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const payload = {
      blogId,
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
    };

    try {
      const response = await commentAdd(payload);

      if (response.status === 201) {
        toast.success(response?.message || "Comment submitted successfully ");
        setFormData({ name: "", email: "", comment: "" });
        setIsSubmitted(false);
      } else {
        toast.error(response?.message || "Failed to submit comment ");
      }
    } catch (err) {
      toast.error("Error submitting comment:", err);
      toast.error("Something went wrong. Please try again later ");
    }
  };

  return (
    <div className="comment-container">
      {/* ✅ Comment Form */}
      <div className="comment-form">
        <h2>Leave a Comment</h2>
        <form onSubmit={handleSubmit}>
          {formErrors.name && (
            <span className="error-message">{formErrors.name}</span>
          )}
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.email && (
            <span className="error-message">{formErrors.email}</span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.comment && (
            <span className="error-message">{formErrors.comment}</span>
          )}
          <textarea
            name="comment"
            placeholder="Write your comment..."
            value={formData.comment}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Comment</button>
        </form>
      </div>

      {/* ✅ Display Comments */}
      <div className="comment-list">
        <h3 className="text-xl font-bold mb-2">Comments ({comments.length})</h3>
        <div className="comment-area-list">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="comment">
                <p>{comment.comment}</p>
                <small>
                  <span>
                    By <strong>{comment.name || "Anonymous"}</strong>
                  </span>{" "}
                  <span>{formatDate(comment.createdAt)}</span>
                </small>
              </div>
            ))
          ) : (
            <p className="no-comments">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
