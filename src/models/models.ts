export interface ISocialLinks {
    link: string;
    iconClass: string;
}

export interface IImages {
    img: string;
    imgWEBP: string;
    alt: string;
}

export interface IServiceItem {
    title: string;
    color: string;
    icon: string;
    text: string;
}

export interface ITestimonialSlide {
    img: string;
    imgWEBP: string;
    name: string;
    company?: string;
    text: string;
}

export interface ITestimonialCircle {
    img: string;
    imgWEBP: string;
    color: string;
}

export interface ISphere {
    title: string;
    text: string;
    icon: string;
}

export interface IStep {
    step: string;
    title: string;
    text: string;
    img: string;
    imgWebp: string;
}

export interface ITeamItem {
    name: string;
    position: string;
    img: string;
    imgWebp: string;
    link01: string;
    link01Icon: string;
    link02: string;
    link02Icon: string;
    link03: string;
    link03Icon: string;
}
