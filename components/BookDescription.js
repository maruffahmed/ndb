import React from "react";
import { Tab } from "@headlessui/react";
import Button from "./utils/Button";
import { classNames } from "utils";

import { Builder } from "@builder.io/react";
Builder.registerComponent(BookDescription, {
  name: "BookDescription",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Text here",
    },
  ],
});

const BuyLinks = [
  {
    title: "Amazon",
    href: "/",
  },
  {
    title: "Audible",
    href: "/",
  },
  {
    title: "Google play",
    href: "/",
  },
  {
    title: "Google play",
    href: "/",
  },
  {
    title: "Apple Books",
    href: "/",
  },
  {
    title: "www.norton & Company",
    href: "/",
  },
];

function BookDescription(props) {
  return (
    <div>
      <Tab.Group>
        <Tab.List className=" bg-gradient-to-br from-lightYellow to-deepYellow p-8 flex justify-between gap-4">
          <Tab
            className={({ selected }) =>
              classNames(
                "uppercase font-bold text-white rounded-l rounded-r-none py-4 px-10",
                selected
                  ? " bg-activeIndigo"
                  : "bg-gradient-to-r from-lightIndigo to-deepIndigo"
              )
            }
          >
            About
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "uppercase font-bold text-white rounded-r rounded-l-none py-4 px-10",
                selected
                  ? " bg-activeIndigo"
                  : "bg-gradient-to-r from-deepIndigo to-lightIndigo"
              )
            }
          >
            Buy now
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className=" p-8 flex flex-col gap-4">
              <p>
                Best Books of 2019: Washington Post • O, The Oprah Magazine •
                Time • NPR • People • Buzzfeed A TODAY Show #ReadWithJenna Book
                Club Selection Winner • Lambda Literary Award [Lesbian Fiction]
                A Washington Post Lily Lit Club Selection Longlisted •
                PEN/Faulkner Award for Fiction American Library Association • A
                Barbara Gittings Literature Award Honor Book (Stonewall Book
                Awards) Finalist • Aspen Words Literary Prize Finalist •
                Brooklyn Public Library Literary Prize Apple Books • Best Books
                of the Month New York Times Book Review • Editors’ Choice
                Selection Kirkus Reviews • Most Memorable Fictional Families of
                the Year Longlisted • The Morning News Tournament of Books A
                Rumpus Book Club Selection
              </p>
              <p>
                A beautifully layered portrait of motherhood, immigration, and
                the sacrifices we make in the name of love from award-winning
                novelist Nicole Dennis-Benn.
              </p>
              <p>
                Heralded for writing “deeply memorable . . . women” (Jennifer
                Senior, New York Times), Nicole Dennis-Benn introduces readers
                to an unforgettable heroine for our times: the eponymous Patsy,
                who leaves her young daughter behind in Jamaica to follow
                Cicely, her oldest friend, to New York. Beating with the pulse
                of a long-withheld confession and peppered with lilting patois,
                Patsy gives voice to a woman who looks to America for the
                opportunity to love whomever she chooses, bravely putting
                herself first. But to survive as an undocumented immigrant,
                Patsy is forced to work as a nanny, while back in Jamaica her
                daughter, Tru, ironically struggles to understand why she was
                left behind. Greeted with international critical acclaim from
                readers who, at last, saw themselves represented in Patsy, this
                astonishing novel “fills a literary void with compassion,
                complexity and tenderness” (Joshunda Sanders, Time), offering up
                a vital portrait of the chasms between selfhood and motherhood,
                the American dream and reality.
              </p>
              <div>
                <p>
                  Print Length: <b>432 pages</b>
                </p>
                <p>
                  Language: <b>English</b>
                </p>

                <p>
                  Publisher: <b>Liveright</b>
                </p>

                <p>
                  Publication Date: <b>May 26, 2020</b>
                </p>

                <p>
                  Dimensions: <b>5.5 x 1.1 x 8.3 inches</b>
                </p>
                <p>
                  ISBN: <b>1631497898</b>
                </p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className=" flex flex-col justify-center items-center gap-8 px-8 py-16">
              {BuyLinks.map((item, index) => (
                <Button
                  title={item.title}
                  href={item.href}
                  className=" w-full text-center px-2 py-4"
                />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default BookDescription;
