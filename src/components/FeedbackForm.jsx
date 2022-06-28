import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisable, setbtnDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextInput = (e) => {
    if (text === "") {
      setbtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at  least 10 characters");
      setbtnDisable(true);
    } else {
      setMessage(null);
      setbtnDisable(false);
    }
    setText(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>

        <div className="input-group">
          <input
            onChange={handleTextInput}
            type="text"
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
