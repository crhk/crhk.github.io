import Slider from "react-slick";

import { Answer } from "./Answer";
import { Choices } from "./Choices";
import { Question } from "./Question";
import { items } from "../data/quiz";
import { Thanks } from "./Thanks";

const settings = {
  arrows: true,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Quiz = () => {
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.question.label}>
          <div className="flex flex-col items-center text-center">
            <Question {...item.question} />
            <Choices choices={item.choices} />
            <Answer
              message={
                item.answer?.label ||
                item.choices.find((choice) => choice.isCorrect)?.label
              }
              videoUrl={item.answer?.videoUrl}
            />
          </div>
        </div>
      ))}
      <Thanks />
    </Slider>
  );
};
