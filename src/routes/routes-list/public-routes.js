import URLS from "../../config/urls.config";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";

export const publicRoutes = [
    {
        path: "/",
        element: Home,
    },
    {
        path: URLS.ABOUT_US,
        element: About,
    },
    {
        path: URLS.SKILLS,
        element: Skills,
    },
    {
        path: URLS.PROJECTS,
        element: Projects,
    },
    {
        path: URLS.CONTACT_US,
        element: Contact,
    },
]