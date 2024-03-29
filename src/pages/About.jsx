

import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";

export default function About() {
    return (
        <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
            <h1 className="text-center max-w-[18em]">About Me</h1>
            <img className="w-[300px] profile-border" src="/assets/images/chin.jpeg" alt="Profile of Ching" />
            <p className="text-justify">Hello! My name is Chingtham, and I currently work as a local project in Manipur, Imphal. My primary focus centers on constructing and enhancing websites for businesses, helping them establish a robust digital presence.</p>
            <p className="text-justify">I hold a B.C.A. in Computer Engineering from the Manipur University at NIELIT. In a former role, I worked as a Computer Operator at Manipur Press for 1 years, where I specialized in creating and customizing Sharepoint websites for clients. Additionally, I successfully managed a system for processing Sharepoint data in a database. I made the transition into web development driven by my passion for designing websites and solving problems that empower businesses to thrive.</p>
            <p className="text-justify">Beyond coding and interacting with clients, I find joy in giving back to the community. Volunteering at the East Rochester Library allows me to troubleshoot technical issues and teach computer skills to eager learners. In my spare time, I unleash my creativity in the kitchen by baking a wide array of scrumptious desserts, which I take pleasure in sharing with friends and fellow Toastmasters. Speaking of Toastmasters, I am an active member of the Pinnacle Toastmasters club in Pittsford, New York, where I hone my public speaking skills.</p>
            <p className="text-center">Here are a few of my baking creations:</p>
            <CubeCarousel name="desserts" carouselImages={dessertImages} />
            <p className="text-justify">My journey in web development is driven by the desire to make a meaningful impact on businesses and individuals alike. Combining my technical expertise, creativity, and dedication to continuous improvement, I strive to create compelling digital experiences that exceed expectations.</p>
        </section>
    );
}