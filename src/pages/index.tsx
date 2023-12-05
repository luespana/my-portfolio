import Container from "@/components/common/Container";
import Layout from "@/components/common/Layout";

export default function Home() {
  return (
    <Layout>
      <Container id="home">
        <div className="flex flex-col justify-around items-center pt-4 md:py-18 md:px-10 md:flex-row">
          <div
            style={{
              background: "linear-gradient(to right, #9F7AEA, #D53F8C)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl leading-snug font-extrabold text-center md:text-left"
          >
            <p>Hi,</p>
            <p>My name is</p>
            <p>Lucia.</p>
            <p>I create Digital Solutions</p>
          </div>
          <div className="flex justify-center">
            <img
              src="images/img.png"
              alt="me"
              className="w-[80%] pt-10 md:w-[100%]"
            />
          </div>
        </div>
      </Container>
      <Container id="about">
        <p>About</p>
      </Container>
    </Layout>
  );
}
