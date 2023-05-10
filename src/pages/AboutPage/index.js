import { Link } from "react-router-dom";
const AboutPage = () => {
    return (
        <div>
            <h1>About our company</h1>
            <p>Best staff on the island </p>

            <Link to="contacts"><button className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Contacts
            </button>
            </Link>
        </div>
    );
};
export default AboutPage;