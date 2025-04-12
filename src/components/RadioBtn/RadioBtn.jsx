const RadioBtn = () => {
  return (
    <div className="radio-group">
      <input type="radio" id="option1" name="radio" value="1" />
      <label htmlFor="option1" className="radio-label">
        Option 1
      </label>

      <input type="radio" id="option2" name="radio" value="2" />
      <label htmlFor="option2" className="radio-label">
        Option 2
      </label>

      <input type="radio" id="option3" name="radio" value="3" />
      <label htmlFor="option3" className="radio-label">
        Option 3
      </label>

      <input type="radio" id="option4" name="radio" value="4" />
      <label htmlFor="option4" className="radio-label">
        Option 4
      </label>

      <input type="radio" id="option5" name="radio" value="5" />
      <label htmlFor="option5" className="radio-label">
        Option 5
      </label>
    </div>
  );
};

export default RadioBtn;
