import Head from "next/head";

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "EnCluster",
  keywords:
    "notes sharing, resource sharing for students, students, resource sharing, online school, tools to help online school, online school tools",
  description: "Share resources and notes for school and clubs @EnCluster",
};
