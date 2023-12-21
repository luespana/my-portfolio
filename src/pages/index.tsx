import Container from "@/components/common/Container";
import Layout from "@/components/common/Layout";
import Title from "@/components/common/Title";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { downloadCv } from "@/utils/downloadFile";

export default function Home() {
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    toast.loading("Downloading");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailPattern.test(email);

    if (isValid && form.current) {
      emailjs
        .sendForm(
          "service_ua6wyak",
          "template_2d3kytx",
          form.current,
          "VEyYzcHpXTzu8HCtK"
        )
        .then(
          (result) => {
            setDisabled(true);
            setEmail("");
            downloadCv("Lucia España - Resume (English).pdf");
            toast.dismiss();
          },
          (error) => {
            console.error(error.text);
          }
        );
    } else {
      toast.dismiss();
      toast.error("The email is invalid");
    }
  };

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
        <div>
          <Title title="My Tech Stack" subtitle="Technologies I work with" />
          <div>
            <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-16">
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-12 md:gap-16">
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
                <ul className="flex flex-row items-center justify-evenly pt-12 md:gap-16">
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
            <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-16">
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-12 md:gap-16">
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
                <ul className="flex flex-row items-center justify-evenly pt-12 md:gap-16">
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
        <div>
          <Title title="About Me" subtitle="A bit about me" />
          <div className="pt-16 flex flex-col items-center">
            <p className="text-center px-8 max-w-3xl">
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
            <div>
              {disabled === false ? (
                <form
                  ref={form}
                  className="flex items-center flex-col pt-10 gap-5"
                >
                  <Input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(value) => setEmail(value)}
                  />
                  <Button label="Download CV" onClick={sendEmail} />
                </form>
              ) : (
                <div className="p-12">
                  <span
                    className="text-xl font-semibold"
                    style={{
                      background: "linear-gradient(to right, #9F7AEA, #D53F8C)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Successful Download
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Container id="projects">
        <div>
          <Title title="Proyects" subtitle="Things I’ve built so far" />
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 justify-items-center pt-16 px-6">
            <Card
              title="Weather App"
              description="The Weather App is a web application designed to provide users with up-to-date weather information for a specified location. Users can easily check the current weather conditions, temperature, humidity, and other relevant details for a chosen city. "
              img="images/weather.png"
              onLiveClick={() =>
                window.open(
                  "https://weather-app-luespana.vercel.app/",
                  "_blank"
                )
              }
              onCodeClick={() =>
                window.open("https://github.com/luespana/Weather-App", "_blank")
              }
            />
            <Card
              title="Star Wars Characters"
              description="The Star Wars Encyclopedia is a comprehensive online resource that provides information about characters, planets, and events from the Star Wars universe. Detailed character information is obtained by integrating an external Star Wars API."
              img="images/star-wars.png"
              onLiveClick={() =>
                window.open("https://star-wars-luespana.vercel.app/", "_blank")
              }
              onCodeClick={() =>
                window.open(
                  "https://github.com/luespana/star-wars-api/tree/main/app",
                  "_blank"
                )
              }
            />
            <Card
              title="Proyect Title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum,
          dolorem quibusdam, sint quia reprehenderit ea labore quaerat fuga."
              img="images/proyect.png"
              onLiveClick={() =>
                window.open("https://www.canva.com/", "_blank")
              }
              onCodeClick={() =>
                window.open("https://www.canva.com/", "_blank")
              }
            />
            <Card
              title="Proyect Title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum,
          dolorem quibusdam, sint quia reprehenderit ea labore quaerat fuga."
              img="images/proyect.png"
              onLiveClick={() =>
                window.open("https://www.canva.com/", "_blank")
              }
              onCodeClick={() =>
                window.open("https://www.canva.com/", "_blank")
              }
            />
            <Card
              title="Proyect Title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum,
          dolorem quibusdam, sint quia reprehenderit ea labore quaerat fuga."
              img="images/proyect.png"
              onLiveClick={() =>
                window.open("https://www.canva.com/", "_blank")
              }
              onCodeClick={() =>
                window.open("https://www.canva.com/", "_blank")
              }
            />
            <Card
              title="Proyect Title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illum,
          dolorem quibusdam, sint quia reprehenderit ea labore quaerat fuga."
              img="images/proyect.png"
              onLiveClick={() =>
                window.open("https://www.canva.com/", "_blank")
              }
              onCodeClick={() =>
                window.open("https://www.canva.com/", "_blank")
              }
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
