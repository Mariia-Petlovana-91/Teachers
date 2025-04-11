const RadioBtn = () => {
  return (
    <div class="radio-group">
      <div class="radio-wrapper">
        <input type="radio" id="option2" name="radio" value="2" />
        <label for="option2" class="radio-label"></label>
        <span class="radio-text">Option 2</span>
      </div>

      <div class="radio-wrapper">
        <input type="radio" id="option3" name="radio" value="3" />
        <label for="option3" class="radio-label"></label>
        <span class="radio-text">Option 3</span>
      </div>

      <div class="radio-wrapper">
        <input type="radio" id="option4" name="radio" value="4" />
        <label for="option4" class="radio-label"></label>
        <span class="radio-text">Option 4</span>
      </div>

      <div class="radio-wrapper">
        <input type="radio" id="option5" name="radio" value="5" />
        <label for="option5" class="radio-label"></label>
        <span class="radio-text">Option 5</span>
      </div>
    </div>
  );
};

export default RadioBtn;
