import Slider from "react-slick";

import { Answer } from "./Answer";
import { Choices } from "./Choices";
import { Question } from "./Question";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const items = [
  {
    id: 1,
    question: "What is the capital of France?",
    choices: [
      {
        label: "Paris",
        isCorrect: true,
      },
      {
        label: "Madrid",
      },
      {
        label: "Rome",
      },
      {
        label: "Lisbon",
      },
    ],
    answer: {
      videoUrl: "https://www.youtube.com/embed/8k_9I9lQjGk",
    },
  },
  {
    id: 2,
    question: "What is the capital of Spain?",
    choices: [
      {
        label: "Paris",
      },
      {
        label: "Madrid",
        isCorrect: true,
      },
      {
        label: "Rome",
      },
      {
        label: "Lisbon",
      },
    ],
    answer: {
      videoUrl: "https://www.youtube.com/embed/8k_9I9lQjGk",
    },
  },
  {
    id: 3,
    question: "What is the capital of Italy?",
    choices: [
      {
        label: "Paris",
      },
      {
        label: "Madrid",
      },
      {
        label: "Rome",
        isCorrect: true,
      },
      {
        label: "Lisbon",
      },
    ],
    answer: {
      videoUrl: "https://www.youtube.com/embed/8k_9I9lQjGk",
    },
  },
];

export const Quiz = () => {
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div>
          <Question key={item.id} question={item.question} />
          <Choices choices={item.choices} />
          <Answer
            message={item.choices.find((choice) => choice.isCorrect)?.label}
            videoUrl={item.answer.videoUrl}
          />
        </div>
      ))}
    </Slider>
  );
};
