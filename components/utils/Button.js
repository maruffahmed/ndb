import Link from "next/link";
import React from "react";
import { classNames } from "utils";

function Button({ title, href, className }) {
  const style =
    "uppercase font-bold bg-gradient-to-r from-deepIndigo to-lightIndigo text-white rounded text-center ";
  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={classNames(style, className)}>{title}</a>
        </Link>
      ) : (
        <button className={classNames(style, className)}>{title}</button>
      )}
    </>
  );
}

export default Button;
