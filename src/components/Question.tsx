interface QuestionProps {
  label: string;
  videoUrl?: string;
}

export const Question = ({ label, videoUrl }: QuestionProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-6xl font-extrabold">{label}</h1>
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
    </div>
  );
};
