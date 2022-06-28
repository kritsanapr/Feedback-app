import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextInput = (e) => {
    if (text === "") {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at  least 10 characters");
      setBtnDisable(true);
    } else {
      setMessage(null);
      setBtnDisable(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    setText("");
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);

      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextInput}
            type="text"
            value={text}
            placeholder="Write a review ?"
          />
          <Button type="submit" isDisable={btnDisable}>
            Send
          </Button>
        </div>

        {message && <div className="message"> {message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
