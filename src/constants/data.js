

import * as Icons from "../components/Icons";

export const navMenu = [
    {
        id: 'Home',
        href: '/',
    },
    {
        id: 'Services',
        href: '/services',
    },
    {
        id: 'About',
        href: '/about',
    },
    {
        id: 'Resume',
        href: '/resume',
    },
]

export const projects = [
    {
        title: 'Bliss Cake',
        src: '/assets/images/projects/bliss.png',
        altText: 'Screenshot of Bliss Cake home page',
        ariaLabel: "Opens modal window with more information about the Bliss Cake web project",
        details: {
            description: "Bliss Cake is located in Manipur Imphal, India. They provide online order and delivery services. They use multiple features of online selection filtering sorting to help user get easy and testing option before the final confirmation by communicating individually with best result.",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'WordPress',
                    Icon: Icons.WordPressIcon,

                },
                // {
                //     title: 'PHP',
                //     Icon: Icons.PHPIcon,
                // },
                {
                    title: 'BackEnd',
                    Icon: Icons.DatabaseIcon,
                },
                // {
                //     title: 'jQuery',
                //     Icon: Icons.JQueryIcon,
                // },
                {
                    title: 'API',
                    Icon: Icons.APIIcon,
                },
            ],
            url: '',
            githubUrl: null,
        },
    },
    {
        title: 'Toi',
        src: '/assets/images/projects/Toi.png',
        altText: 'Screenshot of Toi home page',
        ariaLabel: "Opens modal window with more information about the ThreeSeeds web project",
        details: {
            description: "ThreeSeeds is a non-profit organization located in California. Their mission is to provide educational, employment, and entrepreneurial opportunities that build self-esteem and empowers one to become self-sufficient.",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'WordPress',
                    Icon: Icons.WordPressIcon,
                },
                {
                    title: 'PHP',
                    Icon: Icons.PHPIcon,
                },
                {
                    title: 'BackEnd',
                    Icon: Icons.DatabaseIcon,
                },
            ],
            url: 'https://www.tasteofimphal.com/',
            githubUrl: null,
        },
    },
    {
        title: 'UpCap',
        src: '/assets/images/projects/Upcap.png',
        altText: 'Screenshot of Blended Concoctions home page',
        ariaLabel: "Opens modal window with more information about the Blended Concoctions web project",
        details: {
            description: "A coffee shop website designed using vanilla HTML, CSS, JavaScript, and a hint of jQuery.",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'jQuery',
                    Icon: Icons.JQueryIcon,
                },
            ],
            url: "https://upcap.co.in/",
            githubUrl: "https://github.com/ChingKhuman",
        },
    },
]

export const testimonials = [
    {
        quote: "I am incredibly grateful for Edward's remarkable efforts of completely revamping our nonprofit's website. His dedication and expertise in enhancing the site's security measures while also ensuring a seamless user experience has been nothing short of exceptional. The new website not only boasts a robust security infrastructure that safeguards sensitive data, but it also welcomes visitors with an intuitive and user-friendly interface. Edward took our organization's mission to heart and translated it into an online platform that not only represents our values but also engages our audience effectively. His selfless commitment to improving our online presence has undoubtedly elevated our nonprofit's reach and impact. We owe him a debt of gratitude for his invaluable contribution in making our website a secure and inviting space for all.",
        name: 'Alicia P.',
        title: 'Executive Director of Three Seeds Organization',
        src: '/assets/images/testimonials/alicia.webp',
        altText: 'Profile of Alicia P.',
    }
]

export const socialMedias = [
    {
        href: 'khumanchigtham123@gmail.com',
        ariaLabel: 'Compose an email to Ed Park',
        title: 'Write an Email to Ed Park',
        Icon: Icons.EmailIcon,
    },
    {
        href: 'www.linkedin.com/in/ching-singh-4a79a821a',
        ariaLabel: 'Goes to Ed Park&apos;s LinkedIn profile',
        title: 'LinkedIn Profile',
        Icon: Icons.LinkedInIcon,
    },
    {
        href: 'https://github.com/ChingKhuman',
        ariaLabel: 'Chingtham Singh;s GitHub profile',
        title: 'GitHub Profile',
        Icon: Icons.GitHubIcon,
    },
    {
        href: '',
        ariaLabel: 'Goes to Ed Park&apos;s Twitter profile',
        title: 'Twitter Profile',
        Icon: Icons.TwitterIcon,
    },
];

export const techSkills = [
    {
        category: 'Front-End Development',
        skills: [
            {
                title: 'HTML',
                Icon: Icons.HtmlIcon,
            },
            {
                title: 'CSS',
                Icon: Icons.CSSIcon,
            },
            {
                title: 'Tailwind CSS',
                Icon: Icons.TailwindCSSIcon,
            },
            {
                title: 'SASS, SCSS',
                Icon: Icons.SassIcon,
            },
            {
                title: 'JavaScript',
                Icon: Icons.JavascriptIcon,
            },
            {
                title: 'React',
                Icon: Icons.ReactIcon,
            },
            {
                title: 'jQuery',
                Icon: Icons.JQueryIcon,
            },
        ],
    },
    {
        category: 'Back-End Development',
        skills: [
            {
                title: 'PHP',
                Icon: Icons.PHPIcon,
            },
            {
                title: 'NodeJS',
                Icon: Icons.NodeJSIcon,
            },
            {
                title: 'ExpressJS',
                Icon: Icons.ExpressJSIcon,
            },
            {
                title: 'SQL Server',
                Icon: Icons.SqlServerIcon,
            },
            {
                title: 'MongoDB',
                Icon: Icons.MongoDBIcon,
            },
            // {
            //     title: 'SSRS',
            //     Icon: Icons.SsrsIcon,
            // },
        ],
    },
    {
        category: 'Programming Languages',
        skills: [
            {
                title: 'Java',
                Icon: Icons.CsharpIcon,
            },
            // {
            //     title: 'VBA',
            //     Icon: Icons.VBIcon,
            // },
        ],
    },
    {
        category: 'Content Management Systems',
        skills: [
            {
                title: 'WordPress',
                Icon: Icons.WordPressIcon,
            },
            {
                title: 'Wix',
                Icon: Icons.WixIcon,
            },
        ],
    },
    {
        category: 'Build Tools, Frameworks, and Versioning',
        skills: [
            {
                title: 'Vite',
                Icon: Icons.ViteIcon,
            },
            {
                title: 'Git',
                Icon: Icons.GitIcon,
            },
            {
                title: 'GitHub',
                Icon: Icons.GitHubIcon,
            },
        ],
    },
    {
        category: 'Design and Prototyping',
        skills: [
            {
                title: 'Responsive Design',
                Icon: Icons.ResponsiveDesignIcon,
            },
            {
                title: 'Pen and Paper',
                Icon: Icons.SketchingIcon,
            },
            {
                title: 'Figma',
                Icon: Icons.FigmaIcon,
            },
        ],
    },
    {
        category: 'Microsoft Products',
        skills: [
            // {
            //     title: 'Sharepoint',
            //     Icon: Icons.SharepointIcon,
            // },
            {
                title: 'Excel',
                Icon: Icons.ExcelIcon,
            },
            {
                title: 'Access',
                Icon: Icons.AccessIcon,
            },
        ],
    },
    {
        category: 'Others',
        skills: [
            {
                title: 'APIs',
                Icon: Icons.APIIcon,
            },
            {
                title: 'REST APIs',
                Icon: Icons.RestAPIIcon,
            },
            {
                title: 'LocalWP',
                Icon: Icons.LocalWP,
            },
        ],
    },
];

export const softSkills = [
    {
        title: 'Creativity',
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Teamwork',
        Icon: Icons.TeamworkIcon,
    },
    {
        title: 'Public Speaking',
        Icon: Icons.PublicSpeakingIcon,
    },
    {
        title: 'Time Management',
        Icon: Icons.ScheduleIcon,
    },
];

export const workExp = [
    {
        company: 'Getafix Technology Pvt Ltd',
        location: 'Manipur, Imphal',
        positions: [
            {
                title: 'React Developer',
                startDate: new Date(2023, 2),
                endDate: new Date(2023, 10),
            },
        ],
        tasks: [
            "Collaborate directly with clients to gather project requirements, provide regular updates, and deliver solutions that tailored to their specific needs",
            "Conduct competitor analysis to identify clients' opportunities for differentiation and growth",
            "Setup API calls and database structures for streamlining clients' business requirements",
            "Demonstrate expertise in designing custom WordPress themes and plugins in PHP, enhancing website functionality and user interactivity",
        ],
    },
    {
        company: 'Lamzing Technology',
        location: 'Hybrid',
        positions: [
            {
                title: 'Software Developer',
                startDate: new Date(2022, 0),
                endDate: new Date(2023, 0),
            },
        ],
        tasks: [
            "Designed semantically structured and responsive websites for mobile and desktop devices",
            "Collaborated with a team of developers to construct full-stack web applications",
            "Utilized agile methodologies such as SCRUM for project management",
        ],
    },
    {
        company: 'Gallaghar',
        location: 'Maharashtra, Pune',
        positions: [
            {
                title: 'Process Analyst',
                startDate: new Date(2020, 2),
                endDate: new Date(2021, 3),
            },
        ],
        tasks: [
            "Developed and customization processes for clients data and customer accounts",
            "Provided technical support for remote production sites to facilitate the completion of device configurations",
            "Collaborated with a small team to improve processes",
            "Designed the different account and make improvement for fast delivered",
            "Successfully completed project  95% improved efficiency in terms of execution time, and incorporated troubleshooting features",
            
        ],
    },
];

export const extracurriculars = [
    {
        company: 'Future Z',
        location: 'Pune, Maharashtra',
        positions: [
            {
                title: 'Business Associate',
                startDate: new Date(2018, 10),
                endDate: new Date(2019, 10),
            },
            {
                title: 'Sergeant at Arms',
                startDate: new Date(2022, 4),
                endDate: new Date(2023, 6),
            },
        ],
        tasks: [
            "Develop strategies to promote the club to the community, potential members, and guests",
            "Manage the club's social media accounts and website to share club events, achievements, and information",
            "Create content that showcases the club's activities and benefits",
        ],
    },
    {
        company: 'Literacy Rochester',
        location: 'East Rochester, NY',
        positions: [
            {
                title: 'Digital Volunteer',
                startDate: new Date(2022, 3),
                endDate: new Date(2023, 9),
            },
        ],
        tasks: [
            "Diagnose and troubleshoot technical problems",
            "Demonstrate strong communication skills by explaining technical concepts in a clear and understandable manner",
            "Recognized for outstanding problem-solving capabilities",
        ],
    },
];

export const educations = [
    {
        degree: 'B.C.A',
        school: 'NIELIT, Manipur University , Imphal',
        startDate: new Date(2012, 7),
        endDate: new Date(2015, 6),
        location: 'Akampat, Imphal',
    },
];

export const dessertImages = [
    {
        src: '/assets/images/projects/bliss.png',
        altText: 'Oreo cupcakes with the toastmasters club 10th anniversary cupcake topper',
        value: 'oreo-cupcakes',
        label: 'Oreo cupcakes',
    },
    {
        src: '/assets/images/projects/Toi.png',
        altText: 'Large cake decorated to look like an everything bagel',
        value: 'bagel-cake',
        label: 'Everything bagel cake',
    },
    {
        src: '/assets/images/projects/Upcap.png',
        altText: 'Cheese souffle in a ramekin',
        value: 'souffle',
        label: 'Cheese souffle',
    },
    {
        src: '/assets/images/projects/bliss.png',
        altText: 'Plate of chocolate chip cookies',
        value: 'cookies',
        label: 'Chocolate chip cookies',
    },
    {
        src: '/assets/images/projects/Toi.png',
        altText: 'Red velvet cupcake with cream cheese frosting with a strawberry macaron on top',
        value: 'macaron-cupcakes',
        label: 'Red velvet cupcake',
    },
    {
        src: '/assets/images/projects/Upcap.png',
        altText: 'Cannoli cupcakes with chocolate chips on top',
        value: 'cannoli-cupcakes',
        label: 'Cannoli cupcakes',
    },
];

export const generalServices = [
    {
        title: 'Consulting and Strategy',
        description: "I work closely alongside you to understand your goals, target audience, and business objectives. Using this insight, I develop a strategic plan designed to seamlessly transform your goals into a captivating digital presence.",
        Icon: Icons.HandshakeIcon,
    },
    {
        title: 'Branding',
        description: "Let's craft a distinctive visual identity that resonates with your brand. An identity that not only establishes a strong visual presence, but also forges a profound connection with your audience, fostering a sense of trust and authenticity.",
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Competitor Analysis',
        description: "Through my competitor analysis service, I delve deep into the strategies employed within your industry or niche. Armed with this insight, you gain a distinct advantage, positioning yourself uniquely from others.",
        Icon: Icons.TargetIcon,
    },
    {
        title: 'Front-End Development',
        description: "Infusing artistry into functionality, my web design prowess creates visually stunning and intuitive interfaces that captivate your audience. Aesthetics and usability should go hand in hand.",
        Icon: Icons.WebDesignIcon,
    },
    {
        title: 'Back-End Development',
        description: "I build some project that allows to get an endpoint and also provide a bridge which can access all of the project requirement, but Since now I dont have a chance to do as live project , but I did made myself, If have chance I am ready to do full-stack ",
        Icon: Icons.ServerIcon,
    },
    {
        title: 'Responsive Design',
        description: "Your website will be flawlessly showcased across all screens for optimal viewing experience. Responsive design ensures your online presence adapts seamlessly to devices of all sizes.",
        Icon: Icons.DesktopMobileIcon,
    },
];

export const specialties = [
    {
        title: 'Web Hosting and Deployment',
        Icon: Icons.DatabaseIcon,
    },
    {
        title: 'API Development and Integration',
        Icon: Icons.APIIcon,
    },
    {
        title: 'Custom Web Applications',
        Icon: Icons.ProgrammingIcon,
    },
    {
        title: 'Portfolio Websites',
        Icon: Icons.PortfolioIcon,
    },
    {
        title: 'Web Performance Optimization',
        Icon: Icons.RocketIcon,
    },
    {
        title: 'Website Maintenance',
        Icon: Icons.ToolsIcon,
    },
    {
        title: 'Website Migration',
        Icon: Icons.LeftRightArrowsIcon,
    },
];