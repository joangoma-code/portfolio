import { SVGProps, useId } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const clipPathId = useId()
  const data = "M.5 103.09V59.51l36-11 26-3 40-14 33-4 39 17 54 4 52-13 37-4 61 7 56-14 55-24 45.39 5.3 48.61 16.7 42 3 53-4 49 10 38-19h32l36-6 24 9 30 11 26 17 44 9 43-6 33-11 22-2 30 8 33 10 37-8 30-7 29 4 31-2 17 9 28-4.21 35-12.79 42-9 29-1 41 11.79 46 4.21 51-20.21 39-7.79 31-5 35 8.79 29 17.21 44 8.79 34-2.79 38 9.79 38 7.21 36-10.21 31 3.21 31.39 13.08-.39 44.5H.5z"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 2"
      viewBox="0 0 1920 103.59"
      {...props}
    >
      <defs>
        <clipPath id={clipPathId}>
          <rect x="0" y="0" width="1920" height="60" />
        </clipPath>
      </defs>

      <path
        d={data}
        data-name="Capa 1"
        fill="var(--color-card)"
      />

      <path
        d={data}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1"
        //strokeLinejoin="round"
        clipPath={`url(#${clipPathId})`}
      />
    </svg>
  )
}

export default SvgComponent
