import decrement from "../assets/images/icon-decrement-quantity.svg";

export const Increment = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
      {...props}
    >
      <path
        fill="#fff"
        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
      />
    </svg>
  );
};

export const Decrement = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      fill="none"
      viewBox="0 0 10 2"
      {...props}
    >
      <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
    </svg>
  );
};
