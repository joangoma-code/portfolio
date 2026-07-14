import * as React from "react";

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Capa 1"
    viewBox="0 0 1920 1080.57"
    {...props}
  >
    <path
      d="m0 868.1 87.5-17.6 56-29 35 5 29-20 30-14 37-24 14 5 21.41-5 17.59-15 28 12 19 17 17 2 27 20 26-4 36 17 26 1 23 5 34 21 39 10 25-9 67.41 22.6 29.59 5.4 53 15 46-21 20-4 17-9 10 2 25-17 29-6 35.5-20.4 23.5 1.4 28-6 29.41 12.5 52.59-5.5 72-35 20-3 14 2 61-32 22-6 30-20 23 14h16l30 23h15l30 24 22-3 31 11 38 19 53 17 31 10 26-7 60 18 44-3 34-17 10-5 39 15 38 21 30 1 37.5 11.6v209.47H0V868.1z"
      style={{
        fill: "var(--color-background)",
        strokeWidth: 0,
      }}
    />
  </svg>
);

export default SvgComponent;