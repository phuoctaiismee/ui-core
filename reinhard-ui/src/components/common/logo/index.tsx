import Link from "next/link";
import React from "react";

const SiteLogo = ({ withText = false }: { withText: boolean }) => {
  return (
    <>
      <Link className="flex font-bold items-center" href="/">
        <span className="flex items-center justify-center size-7 lg:size-8 mr-2">
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Analogue icon</title>
            <path d="M5.468 12.804a5.145 5.145 0 10-.644 10.27 5.145 5.145 0 00.644-10.27zm17.841 2.562L16.45 3.484a5.146 5.146 0 00-8.912 5.15l6.86 11.878a5.148 5.148 0 007.031 1.885 5.146 5.146 0 001.881-7.031z" />
          </svg>
        </span>
        <h5 className="text-lg lg:text-xl">Reinhard</h5>
      </Link>

      <div className="flex items-center lg:hidden">
        <svg
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Analogue icon</title>
          <path d="M5.468 12.804a5.145 5.145 0 10-.644 10.27 5.145 5.145 0 00.644-10.27zm17.841 2.562L16.45 3.484a5.146 5.146 0 00-8.912 5.15l6.86 11.878a5.148 5.148 0 007.031 1.885 5.146 5.146 0 001.881-7.031z" />
        </svg>
      </div>
    </>
  );
};

export default SiteLogo;
