import { Accordion } from "rsuite";

interface AnswerProps {
  message?: string;
  videoUrl?: string;
}

export const Answer = ({ message, videoUrl }: AnswerProps) => {
  return (
    <Accordion>
      <Accordion.Panel header="Voir la réponse">
        {!!message && <p>{message}</p>}
        {!!videoUrl && (
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </Accordion.Panel>
    </Accordion>
  );
};
