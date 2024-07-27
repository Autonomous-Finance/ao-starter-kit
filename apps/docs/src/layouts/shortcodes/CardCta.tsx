import React from "react";

const CardCta = ({
  title,
  image,
  label,
  link,
}: {
  title: string;
  image: string;
  label: string;
  link: string;
}) => {
  return (
    <div className="2xl:col-6">
      <div className="relative z-10">
        <div className="relative w-full rounded-xl bg-theme-light px-6 py-6 sm:rounded-3xl sm:px-8 sm:py-8 sm:pr-28">
          <h3 className="mt-0 text-h5 font-medium">{title}</h3>
          <a href={link} className="btn btn-primary-gray">
            {label}
          </a>
        </div>
        <img
          className="absolute bottom-0 right-0 m-0 hidden w-[190px] p-0 xs:block"
          src={image}
          alt="illustration"
        />
      </div>
    </div>
  );
};

export default CardCta;
