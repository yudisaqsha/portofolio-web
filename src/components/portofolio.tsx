export default function Portofolio() {
  return (
    <div
      id="portofolio"
      className="bg-white w-screen h-auto mt-5 py-10 text-center"
    >
      <h1 className="font-extrabold text-4xl">My Previous Work</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10">
        <li className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <a
            href={"http://frontend-lakoe-kel3.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Screenshot_2.jpg"
              alt="Lakoe App"
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h2 className="text-2xl font-bold text-gray-800">Lakoe App</h2>
              <h3 className="text-sm text-gray-500 mb-2">
                Collaborative Project
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lakoe is an online marketplace that lets you create and manage
                your own personal store with ease. Sell products, connect with
                customers, and grow your brand—all in one convenient platform.
              </p>
            </div>
          </a>
        </li>

        <li className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <a
            href={"https://circle-sage.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
          <img
            src="/Screenshot_1.jpg"
            alt="Circle App"
            className="w-full h-60 object-cover"
          />
          <div className="p-6 text-left">
            <h2 className="text-2xl font-bold text-gray-800">Circle App</h2>
            <h3 className="text-sm text-gray-500 mb-2">Solo Project</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Circle is a social media platform built for seamless
              conversations. Create threads, reply, like posts, and follow
              people to stay connected with the discussions that matter to you.
            </p>
          </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
