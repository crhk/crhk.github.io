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

export const Quiz = () => {
  const items = [
    {
      id: 1,
      question: "What is the capital of France?",
      choices: ["Paris", "Madrid", "Rome", "Lisbon"],
      answer: {
        message: "Paris is the capital of France",
        videoUrl: "https://www.youtube.com/embed/8k_9I9lQjGk",
      },
    },
    {
      id: 2,
      question: "What is the capital of Spain?",
      choices: ["Paris", "Madrid", "Rome", "Lisbon"],
      answer: {
        message: "Madrid is the capital of Spain",
        videoUrl: "https://www.youtube.com/embed/8k_9I9lQjGk",
      },
    },
    {
      id: 3,
      question: "What is the capital of Italy?",
      choices: ["Paris", "Madrid", "Rome", "Lisbon"],
      answer: {
        message: "Rome is the capital of Italy",
        videoUrl: "https://www.youtube.com/embed/8k_9I9lQjGk",
      },
    },
  ];

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div>
          <Question key={item.id} question={item.question} />
          <Choices choices={item.choices} />
          <Answer
            message={item.answer.message}
            videoUrl={item.answer.videoUrl}
          />
        </div>
      ))}
    </Slider>
  );
};
