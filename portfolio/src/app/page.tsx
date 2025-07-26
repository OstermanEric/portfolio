import Image from "next/image";



const Home = () => {
  return (
    <main className="max-w-6xl mx-auto flex flex-col gap-16">


      {/** first section is profile picture, name, few words who I am */}
      <section className="flex flex-col sm:flex-row items-center sm:items-start gap-4 py-20">
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
      <section>
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 py-0">About Me</h2>
          <p className="text-xl text-gray-600 py-5">testing</p>
        </div>
      </section>


      {/** third section is technical expertise*/}
      <section>
        <div>
          <h2 className="text-2xl font-semibold text-blue-900">Technical Expertise</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-5">
          <div className="rounded border border-gray-200">
            <h3 className="font-semibold mb-2 text-purple-500 text-xl py-2 px-4">Programming</h3>
            <ul className="px-4 text-gray-600">
              <li>Java</li>
              <li>C#</li>
              <li>Typescript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="rounded border border-gray-200">
            <h3 className="font-semibold mb-2 text-purple-500 text-xl py-2 px-4">Deployment</h3>
            <ul className="px-4 text-gray-600">
              <li>CI/CD</li>
              <li>Git</li>
              <li>GitLab</li>
            </ul>
          </div>
          <div className="rounded border border-gray-200">
            <h3 className="font-semibold mb-2 text-purple-500 text-xl py-2 px-4">Web Development</h3>
          </div>
        </div>
      </section>
      {/** fourth section is featured projects*/}
      <section></section>
      {/** fifth section is experience(?)*/}
      <section></section>
      {/** sixth section is education*/}
      <section></section>
    </main >
  )
}

export default Home;