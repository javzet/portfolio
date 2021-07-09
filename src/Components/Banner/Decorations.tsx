import { Blob } from '../SVG/Blob';
export const Decorations = () => {
  return (
    <>
      <div className="blob">
        <Blob
          gradient
          color1="#40c9ff"
          color2="#e81cff"
          gradientName="gradient-blob-1"
        />
      </div>
      <div className="blob-1">
        <Blob
          gradient
          color1="#e81cff"
          color2="#40c9ff"
          gradientName="gradient-blob-2"
        />
      </div>
    </>
  );
};
