import { Accordion } from "rsuite";

interface AnswerProps {
  message?: React.ReactNode;
  videoUrl?: string;
}

export const Answer = ({ message, videoUrl }: AnswerProps) => {
  return (
    <Accordion className="bg-gray-100">
      <Accordion.Panel header="Voir la réponse" className="bg-gray-100">
        {!!message && (
          <p className="text-2xl mt-5 font-extrabold text-black">{message}</p>
        )}
        {!!videoUrl && (
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-5"
          ></iframe>
        )}
      </Accordion.Panel>
    </Accordion>
  );
};
