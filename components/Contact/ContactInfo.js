import React from "react";

import { Builder } from "@builder.io/react";
Builder.registerComponent(ContactInfo, {
  name: "ContactInfo",
});

function ContactInfo(props) {
  return (
    <div className=" py-20 px-4 text-center text-deepBlue">
      <h1 className=" font-bold text-lg">Contact info</h1>
      <div className=" flex flex-col gap-4 mt-8">
        <div>
          <h1 className=" font-bold">PUBLICITY</h1>
          <p>Cordelia Calvert</p>
          <p>W.W.Norton/Liveright</p>
          <p>ccalvert@wwnorton.com</p>
          <p className=" text-gray-400">
            *Contact Cordelia to schedule an interview with me or for any
            publicity-related matter.
          </p>
        </div>

        <div>
          <h1 className=" font-bold">LITERARY AGENT</h1>
          <p>Julie Barer</p>
          <p>The Book Group</p>
          <p>www.thebookgroup.com</p>
          <p className=" text-gray-400">
            *Contact Julie for anything book related.
          </p>
        </div>

        <div>
          <h1 className=" font-bold">SPEAKING ENGAGEMENTS</h1>
          <p>Leslie Shipman</p>
          <p>The Shipman Agency</p>
          <p>leslie@theshipmanagency.com</p>
          <p>www.theshipmanagency.com</p>
          <p className=" text-gray-400">
            *Contact Leslie if you’d like me to come speak at your university,
            bookstore, book club, or event.
          </p>
        </div>

        <div>
          <h1 className=" font-bold">ASSISTANT</h1>
          <p>Courtney Patterson</p>
          <p>assistant@nicoledennisbenn.com</p>

          <p className=" text-gray-400">
            *Contact for Bookclub requests, Workshop inquiries, and
            miscellaneous.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
