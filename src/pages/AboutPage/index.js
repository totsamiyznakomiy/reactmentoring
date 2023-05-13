import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <h1>THC Temple</h1>
      <p>Best cannabise on island!</p>

      <Link to="contacts">
        <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          Conntacts
        </button>
      </Link>
    </>
  );
};

export default AboutPage;