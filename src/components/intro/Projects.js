import Project from "./Project";

function Projects() {
    const projects = [{title: "FEMA: Disaster Preparedness and Recovery",
                        explain: "Contributed to the development of FEMA's official web page, which helps users prepare for, respond to, and recover from disasters. The app provides real-time weather alerts, emergency tips, and access to disaster recovery centers.",
                        url: "https://www.fema.gov/",
                        picName: "Fema.png"
                    },
                    {title: "Bartesian: The World’s Top-Selling Cocktail System",
                    explain: "Developed the web companion app for Bartesian, the award-winning cocktail maker that allows users to create premium cocktails at home. The app enhances the user experience by providing recipe suggestions, smart device connectivity, and automated cocktail customization based on user preferences.",
                    url: "https://bartesian.com/",
                    picName: "Bartesian.png"
                    },
                    {title: "WildTrackAI: Protecting Endangered Species",
                    explain: "Engineered the web platform for WildTrackAI, enabling real-time tracking and monitoring of endangered species through footprint analysis. The app leverages AI and advanced analytics to help conservationists protect wildlife across the globe",
                    url: "https://www.wildtrack.org/",
                    picName: "WildTrackAI.png"
                    },
                    {title: "Surrogacy Together: Building Families through Connection",
                    explain: "I collaborated on the development of the Surrogacy Together app, a platform dedicated to helping families navigate the surrogacy process. The app connects intended parents, surrogates, and experts, providing a community and resources to support their journeys.",
                    url: "https://thebiggestask.com/",
                    picName: "Surrogacy.png"
                    },
                    {title: "AfricanOneStop: Your Gateway to African Products and Services",
                    explain: "I contributed to the development of AfricanOneStop, a web platform designed to connect users with a wide range of African products, services, and businesses. The app offers an easy-to-use interface and a seamless shopping experience for users across the continent and beyond. Available on both Android and iOS, it brings African commerce to the global stage.",
                    url: "https://africaonestop.com/",
                    picName: "AfricanOneStop.png"
                    }]
    const list = [];
    projects.map((project, index) => {
        list.push(<Project key={index} order={index + 1} title={project.title} explain={project.explain} url={project.url} picName={project.picName}/>)
    })
    return(
        list
    )

}

export default Projects;