const RadioBtn = ({ register }) => {
  return (
    <div className="radio__group">
      <div className="radio__el">
        <input
          className="radio__input"
          type="radio"
          id="career"
          name="category"
          value="career"
          {...register('category')}
        />
        <label className="radio__label" htmlFor="career">
          Career and business
        </label>
      </div>

      <div className="radio__el">
        <input
          className="radio__input"
          type="radio"
          id="kids"
          name="category"
          value="kids"
          {...register('category')}
        />
        <label className="radio__label" htmlFor="kids">
          Lesson for kids
        </label>
      </div>

      <div className="radio__el">
        <input
          className="radio__input"
          type="radio"
          id="abroad"
          name="category"
          value="abroad"
          {...register('category')}
        />
        <label className="radio__label" htmlFor="abroad">
          Living abroad
        </label>
      </div>

      <div className="radio__el">
        <input
          className="radio__input"
          type="radio"
          id="exams"
          name="category"
          value="exams"
          {...register('category')}
        />
        <label className="radio__label" htmlFor="exams">
          Exams and coursework
        </label>
      </div>

      <div className="radio__el">
        <input
          className="radio__input"
          type="radio"
          id="hobby"
          name="category"
          value="hobby"
          {...register('category')}
        />
        <label className="radio__label" htmlFor="hobby">
          Culture, travel or hobby
        </label>
      </div>
    </div>
  );
};

export default RadioBtn;
