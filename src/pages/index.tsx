import Container from "@/components/common/Container";
import Layout from "@/components/common/Layout";
import Title from "@/components/common/Title";

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
      <Container id="tech">
        <div className="pt-4">
          <Title title="My Tech Stack" subtitle="Technologies I work with" />
          <div>
            <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-16 md:pt-8">
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-20 md:gap-16">
                  <li>
                    <img
                      src="images/next.png"
                      alt="git"
                      className="w-[70px] h-[70px]"
                    />
                  </li>
                  <li>
                    <img
                      src="images/javascript.png"
                      alt="javascript"
                      className="w-[70px] h-[70px]"
                    />
                  </li>
                  <li>
                    <img
                      src="images/react.png"
                      alt="react"
                      className="w-[70px] h-[60px]"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-20 md:gap-16">
                  <li>
                    <img
                      src="images/typescript.png"
                      alt="typescript"
                      className="w-[70px] h-[70px]"
                    />
                  </li>
                  <li>
                    <img
                      src="images/git.png"
                      alt="git"
                      className="w-[70px] h-[70px]"
                    />
                  </li>
                  <li>
                    <img
                      src="images/firebase.png"
                      alt="firebase"
                      className="w-[50px] h-[80px]"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-16 md:pt-8">
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-20 md:gap-16">
                  <li>
                    <img
                      src="images/angular.png"
                      alt="angular"
                      className="w-[70px] h-[70px]"
                    />
                  </li>
                  <li>
                    <img
                      src="images/tailwind.png"
                      alt="tailwind"
                      className="w-[70px] h-[60px]"
                    />
                  </li>
                  <li>
                    <img
                      src="images/github.png"
                      alt="github"
                      className="w-[70px] h-[70px]"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-20 md:gap-16">
                  <li>
                    <img
                      src="images/node.png"
                      alt="node"
                      className="w-[70px] h-[70px]"
                    />
                  </li>
                  <li>
                    <img
                      src="images/css.png"
                      alt="css"
                      className="w-[70px] h-[70px]"
                    />
                  </li>
                  <li>
                    <img
                      src="images/figma.png"
                      alt="figma"
                      className="w-[65px] h-[75px]"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container id="about">
        <div className="pt-10">
          <Title title="About Me" subtitle="A bit about me" />
          <div className="pt-20">
            <p className="text-center px-4">
              I have been working in Front-End web development for 2 years.
              Currently, I am studying a Bachelor's degree in Computer Science,
              which gives me a solid foundation in programming fundamentals,
              algorithms and data structures. I have had the opportunity to work
              on different projects, which has allowed me to develop good skills
              in languages like Javascript and libraries like React Js. I
              continue to complement my academic training with specialized
              courses in technologies such as React.js, JavaScript, Node.js and
              Angular.
            </p>
            <div className="flex items-center flex-col justify-center pt-10 gap-5">
              <input
                type="email"
                placeholder="email"
                className="bg-light rounded-3xl p-1.5 pl-4 text-blue"
              />
              <button
                style={{
                  background: "linear-gradient(to right, #9F7AEA, #D53F8C)",
                  color: "white", // Set the text color to contrast with the background
                }}
                className="p-3 rounded-3xl"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
