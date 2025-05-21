import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat App",
  description = "this is the Chat App called Chattu",
}) => {
  return (
    <Helmet>
      <title>{title || "first"}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;

//Helmet lets you declaratively define head tags as part of your component tree,
//and it updates them when the component is mounted/unmounted.
//For SEO and dynamic titles/descriptions.
