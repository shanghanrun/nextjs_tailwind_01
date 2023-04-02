import Layout from "@/components/layout";
const NOTION_TOKEN="secret_HGla1aHDiymuPnnj7NqZdm1s6VFOZfaE2DxMQ5SKrXw"

const NOTION_DATABASE_ID="3514c7297c1542758d4b83537b633f80"

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_TOKEN });



export default function Project(){
  return (
    <Layout>
      <h1>프로젝트 페이지 입니다.</h1>
    </Layout>
  )
}
//빌드할 때 데이터받아와서 정적으로 만든다.
export async function getStaticProps(context) {  
  // (async () => {
  //   const databaseId = NOTION_DATABASE_ID;
  //   const response = await notion.databases.query({
  //     database_id: databaseId,
  //     filter: {
  //       or: [
  //         {
  //           property: 'In stock',
  //           checkbox: {
  //             equals: true,
  //           },
  //         },
  //         {
  //           property: 'Cost of next trip',
  //           number: {
  //             greater_than_or_equal_to: 2,
  //           },
  //         },
  //       ],
  //     },
  //     sorts: [
  //       {
  //         property: 'Last ordered',
  //         direction: 'ascending',
  //       },
  //     ],
  //   });
  //   console.log(response);
  // })();
  return {
    props: {}, // will be passed to the page component as props
  }
}