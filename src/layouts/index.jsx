import { Head } from "minista/head";
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";
import Footer from "@/layouts/Footer";

export default function (props) {
  const {
    children,
    title,
    url,
  } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en'  }}>
        <title>{`StreamVibe | ${title}`}</title>
        <script src="/src/main.js" type="module"/>.
      </Head>
      <Header url={url}/>
      <Content>
        {children}
      </Content>
      <Footer />
    </>
  )
}