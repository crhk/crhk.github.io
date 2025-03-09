import { Accordion } from "rsuite";

interface AnswerProps {
  message?: string;
  videoUrl?: string;
}

export const Answer = ({ message, videoUrl }: AnswerProps) => {
  return (
    <Accordion>
      <Accordion.Panel header="Voir la réponse">
        {!!message && <p className="text-2xl mt-5 font-extrabold">{message}</p>}
        {!!videoUrl && (
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-5"
          ></iframe>
        )}
      </Accordion.Panel>
    </Accordion>
  );
};
