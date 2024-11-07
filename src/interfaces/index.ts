interface IService {
    title: string;
    icon: string;
}

interface IExperience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
}

interface ITechnology {
    name: string;
    icon: string;
}

interface IProject {
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link: string;
}

interface ITestimonial {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}

export type { IService, IExperience, ITechnology, IProject, ITestimonial };
