import { useRouter } from "next/router";
import { BuilderComponent, Builder, builder } from "@builder.io/react";
import DefaultErrorPage from "next/error";

import Head from "next/head";
import "components/Navbar";
import "components/Slogan";
import "components/Hero";
import "components/Subscribe";
import "components/Footer";
import "components/BookDetails";
import "components/BookList/Books";
import "components/BookDescription";
import "components/About/AboutHero";
import "components/SocialLinks";
import "components/About/AboutDescription";
import "components/ContactAction";

const BUILDER_API_KEY = "58accab74f514256ae48ff1260497a3d";
builder.init(BUILDER_API_KEY);

export async function getStaticProps({ params }) {
  const page =
    (await builder
      .get("page", {
        userAttributes: {
          urlPath: "/" + (params?.page?.join("/") || ""),
        },
      })
      .toPromise()) || null;

  return {
    props: {
      page,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const pages = await builder.getAll("page", {
    options: { noTargeting: true },
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({ page }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const isLive = !Builder.isEditing && !Builder.isPreviewing;
  if (!page && isLive) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <BuilderComponent model="page" content={page} />
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Slogan />
//       <Hero />
//       <BookDetails
//         quotes="“Dennis-Benn is a prodigious world-straddler, and not just
//           geographically; her characters are <br /> memorable and fully drawn,
//           and the devastating meta-legacies they conjure are all too real.”"
//         author="VOGUE"
//         href="/"
//       />
//       <Subscribe />
//       <Footer />
//     </>
//   );
// }
