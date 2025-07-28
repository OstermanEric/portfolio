import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";



const Home = () => {
  return (
    <main className="max-w-6xl mx-auto flex flex-col gap-16">

      <div className="py-10">
        {/** first section is profile picture, name, few words who I am */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-4 py-10">
          {/** div for photo */}
          <div>
            <Image
              src={"/eric-photo.PNG"}
              alt={"Eric Osterman"}
              width={250}
              height={300}
              className="rounded-lg shadow-lg object-cover max-h-[250px]"
            />
          </div>
          {/** div for name and sentence */}
          <div className="text-center sm-text-left space-y-4 px-20">
            <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-blue-900 to-purple-300 bg-clip-text text-transparent">Eric Osterman</h1>
            <p className="text-xl bg-gray-600 bg-clip-text text-transparent py-10">Software Engineer interested in web design, mobile apps, and general software development.</p>
          </div>
        </section>


        {/** second section is about me section*/}
        <section className="py-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 py-0">About Me</h2>
            <p className="text-xl text-gray-600 py-5">I am a software engineer with primary experience in unit testing, CI/CD pipelines and web design. I graduated from Lehigh University in 2024 with a degree in Computer Science and Cognitive Science. I have passions in building applications, mainly web/mobile ones.</p>
          </div>
        </section>


        {/** third section is technical expertise*/}
        <section>
          <div>
            <h2 className="text-2xl font-semibold text-blue-900">Technical Expertise</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 py-5">
            <div className="rounded border border-gray-200 p-4">
              <h3 className="font-semibold mb-2 text-purple-500 text-xl py-2 px-4">Programming</h3>
              <ul className="px-4 text-gray-600 space-y-1">
                <li>Java</li>
                <li>C#</li>
                <li>Typescript</li>
                <li>Python</li>
                <li>Powershell</li>
              </ul>
            </div>
            <div className="rounded border border-gray-200 p-4">
              <h3 className="font-semibold mb-2 text-purple-500 text-xl py-2 px-4">Testing & Deployment</h3>
              <ul className="px-4 text-gray-600 space-y-1">
                <li>CI/CD</li>
                <li>Unit Testing</li>
                <li>Power Automate</li>
                <li>GitLab</li>
                <li>XUnit</li>
                <li>Vercel</li>
                <li>Static Analysis Tools (SonarQube, Parasoft)</li>
              </ul>
            </div>
            <div className="rounded border border-gray-200 p-4">
              <h3 className="font-semibold mb-2 text-purple-500 text-xl py-2 px-4">Web Development</h3>
              <ul className="px-4 text-gray-600 space-y-1">
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="rounded border border-gray-200 p-4">
              <h3 className="font-semibold mb-2 text-purple-500 text-xl py-2 px-4">Tools</h3>
              <ul className="px-4 text-gray-600 space-y-1">
                <li>Git</li>
                <li>Visual Studio</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>


        {/** fourth section is featured projects*/}
        <section>
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 py-4">Featured Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 py-0">
              <div className="rounded border border-gray-200 p-4">
                {/* Placeholder for second project */}
                <div className="flex flex-col h-80 relative">

                  {/* Top half image */}
                  <div className="relative h-1/2 w-full">
                    <Image
                      src="/image-seg-1.png"
                      alt="Image Segmentation Report"
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="100vw"
                    />
                  </div>

                  {/* Bottom half content */}
                  <div className="h-1/2 flex flex-col justify-start px-4 py-2 space-y-2">
                    <div className="flex justify-between py-2">
                      <a href="https://github.com/OstermanEric/Image_Segmentation"><h2 className="text-lg font-semibold text-purple-500 hover:underline">Image Segmentation Report</h2></a>
                      <a
                        href="https://github.com/OstermanEric/Image_Segmentation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 inline-flex items-center space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 3h6v6" />
                          <path d="M10 14L21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      </a>

                    </div>
                    <p className="text-sm text-gray-600">
                      Report investigating the efficacy between the K-Means clustering and Segment Anything Model (SAM) in segmenting the lungs from the CT-CASE 15 dataset.
                    </p>
                    <div className="mt-auto">
                      {/* Tags / badges */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-800">
                          Computer Vision
                        </span>
                        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-800">
                          Python
                        </span>
                        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-800">
                          Image Segmentation
                        </span>
                        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-800">
                          Jupyter Notebook
                        </span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              <div className="rounded border border-gray-200 p-4">
                {/* Placeholder for second project */}
                <div className="flex flex-col h-80 relative">

                  {/* Top half image */}
                  <div className="relative h-1/2 w-full">
                    <Image
                      src="/website-1.png"
                      alt="Image Segmentation Report"
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="100vw"
                    />
                  </div>

                  {/* Bottom half content */}
                  <div className="h-1/2 flex flex-col justify-start px-4 py-2 space-y-2">
                    <div className="flex justify-between py-2">
                      <a href="https://thepwcf.org"><h2 className="text-lg font-semibold text-purple-500 hover:underline">Peaceful Warrior Chess Foundation</h2></a>
                      <a
                        href="https://thepwcf.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 inline-flex items-center space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 3h6v6" />
                          <path d="M10 14L21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      </a>

                    </div>
                    <p className="text-sm text-gray-600">
                      Developed website for The Peaceful Warrior Chess Foundation. Allows donations, has contact form, and conveys information regarding foundation.
                    </p>
                    <div className="mt-auto">
                      {/* Tags / badges */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-800">
                          Web Design
                        </span>
                        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-800">
                          Typescript
                        </span>
                        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-gray-200 text-gray-800">
                          Vercel
                        </span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </section>
        {/** fifth section is experience(?)*/}
        <section></section>
        {/** sixth section is education*/}
        <section>
          <h2 className="text-2xl font-semibold text-blue-900 py-8">Education</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-card text-card-foreground">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-purple-500 text-lg">B.A. in Computer Science and Cognitive Science</h3>
                    <p className="text-md text-gray-600">Lehigh University</p>
                  </div>
                  <div className="text-right">
                    <p className="text-md text-gray-600">2019-2024</p>
                    <p className="text-md text-gray-600">Bethlehem, PA</p>
                  </div>
                </div>
                <div className="p-6 px-0">
                  <p className="text-md text-gray-600">Double major in Computer Science and Cognitive Science.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


<section>
  <h2 className="text-2xl font-semibold text-blue-900 py-8">Get in Touch</h2>
  <div className="flex flex-wrap gap-4">

    <a
      href="mailto:ejosterman@gmail.com"
      className="text-purple-500 hover:text-purple-500 transition px-4 hover:scale-110"
      aria-label="Email"
    >
      <Mail className="w-6 h-6" />
    </a>

    <a
      href="https://github.com/OstermanEric"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-500 hover:text-purple-500 transition px-4 hover:scale-110"
      aria-label="GitHub"
    >
      <Github className="w-6 h-6" />
    </a>

    <a
      href="https://www.linkedin.com/in/ejosterman/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-500 hover:text-purple-500 transition px-4 hover:scale-110"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-6 h-6" />
    </a>

  </div>
</section>

      </div>
    </main >

  )
}

export default Home;