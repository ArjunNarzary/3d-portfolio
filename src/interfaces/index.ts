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

export type { IService, IExperience, ITechnology };
