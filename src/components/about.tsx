export function About() {
  return (
    <div
      id="about"
      className="my-10 mx-auto flex flex-row gap-3 justify-center"
    >
      <img
        src="/Untitled-111.jpg"
        width={300}
        height={300}
        alt="ProfilePic"
        className="rounded-md shadow-lg"
      />
      <div className="text-white mt-4">
        <h1 className="text-2xl font-bold mb-2">Who Am I?</h1>
        <p className="text-base text-justify max-w-md">
          I’m Yudis Aqsha, a Computer Science graduate from Telkom University.
          As a Fullstack Developer, I specialize in designing, developing, and
          maintaining both front-end and back-end web applications using
          technologies like HTML, CSS, JavaScript, and frameworks such as React
          and Node.js. I focus on ensuring seamless integration between the
          client and server.
        </p>
      </div>
    </div>
    // <div className="w-screen bg-[#3a5a80] py-16 px-12 flex flex-row items-start gap-10">
    //   <img
    //     src="/Untitled-111.jpg"
    //     width={300}
    //     height={300}
    //     alt="ProfilePic"
    //     className="rounded-md shadow-lg"
    //   />
    //   <div className="text-white mt-4">
    //     <h1 className="text-2xl font-bold mb-2">Who Am I?</h1>
    //     <p className="text-base max-w-md">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. I build things for the web and break phones in the process.
    //     </p>
    //   </div>
    // </div>
  );
}
