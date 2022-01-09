import React from "react";

import { Builder } from "@builder.io/react";
Builder.registerComponent(AboutDescription, {
  name: "AboutDescription",
});

function AboutDescription(props) {
  return (
    <div className=" p-4 flex flex-col gap-8">
      <p className=" leading-8 text-gray-600">
        <span className=" font-bold">Nicole Dennis-Benn</span> is the author of{" "}
        <a href="/" className=" text-lightIndigo">
          {" "}
          HERE COMES THE SUN
        </a>
        (Norton/Liveright, July 2016), a New York Times Notable Book of the Year
        and a 2017 Lambda Literary Award winner. Her bestselling sophomore
        novel,{" "}
        <a href="/" className=" text-lightIndigo">
          PATSY
        </a>{" "}
        (Norton/Liveright, June 2019), is a 2020 Lambda Literary Award winner, a
        New York Times Editors’ Choice, a Financial Times Critics Choice, a
        Stonewall Book Awards Honor Book, and a Today Show Read With Jenna Book
        Club selection.{" "}
        <a href="/" className=" text-lightIndigo">
          PATSY
        </a>{" "}
        has been named Best Book of the Year by Kirkus Reviews, TIME, NPR,
        PEOPLE Magazine, Washington Post, Apple Books, Oprah Magazine, The
        Guardian, Goodhousekeeping, BuzzFeed, ELLE, among others. “Patsy fills a
        literary void with compassion, complexity and tenderness,” raves Time
        Magazine; and NPR names Dennis-Benn “an indispensable novelist”.
      </p>

      <p className=" leading-8 text-gray-600">
        In addition to being a two time Lambda Literary Award Winner for her
        novels{" "}
        <a href="/" className=" text-lightIndigo">
          PATSY
        </a>{" "}
        and{" "}
        <a href="/" className=" text-lightIndigo">
          {" "}
          HERE COMES THE SUN
        </a>
        , Dennis-Benn is a recipient of the National Foundation for the Arts
        Grant. She was a finalist for the National Book Critics Circle John
        Leonard Award, the New York Public Library Young Lions Award, the Center
        for Fiction’s First Novel Prize; and has recently been long-listed for
        The Pen/Faulkner Award in Fiction and short-listed for the Aspen Words
        Literary Prize.
      </p>

      <p className=" leading-8 text-gray-600">
        Her work has appeared in The New York Times, Elle, BuzzFeed, Electric
        Literature, Lenny Letter, The Rumpus, Catapult, Red Rock Review, and
        Kweli Literary Journal, Mosaic, Ebony, and the Feminist Wire. She has
        previously taught in the writing programs at Princeton University, the
        University of Pennsylvania, NYU, Sarah Lawrence College, and City
        College; and has been awarded fellowships from{" "}
        <a href="/" className=" text-lightIndigo">
          MacDowell Colony
        </a>
        , Hedgebrook, Lambda, Barbara Deming Memorial Fund, Hurston/Wright, and
        Sewanee Writers’ Conference.
      </p>

      <p className=" leading-8 text-gray-600">
        Dennis-Benn was born and raised in Kingston, Jamaica. She is a graduate
        of St. Andrew High School for Girls and Cornell University; and holds a
        Master of Public Health from the University of Michigan and an MFA in
        Creative Writing from Sarah Lawrence College. Dennis-Benn is the founder
        of the Stuyvesant Writing Workshop and lives with her wife in Brooklyn,
        New York.
      </p>
    </div>
  );
}

export default AboutDescription;
