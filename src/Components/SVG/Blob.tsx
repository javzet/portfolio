type BlobProps = {
  gradient?: boolean;
  gradientName?: string;
  color1: string;
  color2?: string;
};

export const Blob = (props: BlobProps) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 310 350"
    >
      {props.gradient ? (
        <defs>
          <linearGradient
            id={props.gradientName ? props.gradientName : 'gradient-fill'}
            x1="0"
            y1="0"
            x2="400"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={props.color1} />
            <stop offset="1" stopColor={props.color2} />
          </linearGradient>
        </defs>
      ) : (
        <></>
      )}
      <path
        d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
        fill={
          props.gradient
            ? props.gradientName
              ? `url(#${props.gradientName})`
              : 'url(#gradient-fill)'
            : props.color1
        }
      />
    </svg>
  );
};
