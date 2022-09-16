import {
    IServiceItem,
    ISocialLinks,
    ITestimonialCircle,
    ITestimonialSlide,
    IImages,
    ISphere,
    ITeamItem,
} from "./../models/models";

import images from "./images";
const { benefitsImages, avatarsImages, companiesImages } = images;

//========================================================================================================================================================

const socialLinks: ISocialLinks[] = [
    {
        link: "#",
        iconClass: "_icon-twitter",
    },
    {
        link: "#",
        iconClass: "_icon-fb",
    },
    {
        link: "#",
        iconClass: "_icon-inst",
    },
    {
        link: "#",
        iconClass: "_icon-yt",
    },
    {
        link: "#",
        iconClass: "_icon-M",
    },
];
//========================================================================================================================================================

const benefitsSlides: IImages[] = [
    {
        img: benefitsImages.benefits01,
        imgWEBP: benefitsImages.benefits01_WEBP,
        alt: "Benefit 1",
    },
    {
        img: benefitsImages.benefits02,
        imgWEBP: benefitsImages.benefits02_WEBP,
        alt: "Benefit 2",
    },
    {
        img: benefitsImages.benefits03,
        imgWEBP: benefitsImages.benefits03_WEBP,
        alt: "Benefit 3",
    },
];

//========================================================================================================================================================

const servicesItems: IServiceItem[] = [
    {
        color: "_c1",
        title: "Webdesign",
        icon: "_icon-axe",
        text: "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
    },
    {
        color: "_c2",
        title: "Webdev",
        icon: "_icon-nuclear",
        text: "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.",
    },
    {
        color: "_c3",
        title: "Marketing",
        icon: "_icon-fort",
        text: "Eu augue ut lectus arcu bibendum at. Pellentesque nec nam aliquam sem et tortor consequat.",
    },
    {
        color: "_c3",
        title: "Marketing",
        icon: "_icon-scales",
        text: "Id venenatis a condimentum vitae. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Tortor dignissim convallis aenean et.",
    },
    {
        color: "_c2",
        title: "Webdev",
        icon: "_icon-skittles",
        text: "Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Malesuada fames ac turpis egestas sed.",
    },
    {
        color: "_c1",
        title: "Webdesign",
        icon: "_icon-brain",
        text: "Integer quis auctor elit sed vulputate mi. Semper auctor neque vitae tempus. Vulputate odio ut enim blandit volutpat maecenas volutpat.",
    },
];

//========================================================================================================================================================

const testimonialsSlides: ITestimonialSlide[] = [
    {
        img: avatarsImages.avatar09,
        imgWEBP: avatarsImages.avatar09_WEBP,
        name: "Kerry Johnes",
        company: "Some Company",
        text: "Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique.",
    },
    {
        img: avatarsImages.avatar10,
        imgWEBP: avatarsImages.avatar10_WEBP,
        name: "Konan Wizard",
        company: "Desert",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi commodi tempore, illum placeat id?",
    },
    {
        img: avatarsImages.avatar11,
        imgWEBP: avatarsImages.avatar11_WEBP,
        name: "Tim Boil",
        company: "Grape",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid, error voluptatem tempore optio doloremque.",
    },
];
const testimonialsCircles: ITestimonialCircle[] = [
    {
        img: avatarsImages.avatar02,
        imgWEBP: avatarsImages.avatar02_WEBP,
        color: "_bc3",
    },
    {
        img: avatarsImages.avatar03,
        imgWEBP: avatarsImages.avatar03_WEBP,
        color: "_bc1",
    },
    {
        img: avatarsImages.avatar04,
        imgWEBP: avatarsImages.avatar04_WEBP,
        color: "_bc2",
    },
    {
        img: avatarsImages.avatar05,
        imgWEBP: avatarsImages.avatar05_WEBP,
        color: "_bc2",
    },
    {
        img: avatarsImages.avatar06,
        imgWEBP: avatarsImages.avatar06_WEBP,
        color: "_bc1",
    },
    {
        img: avatarsImages.avatar07,
        imgWEBP: avatarsImages.avatar07_WEBP,
        color: "_bc2",
    },
    {
        img: avatarsImages.avatar08,
        imgWEBP: avatarsImages.avatar08_WEBP,
        color: "_bc3",
    },
];

//========================================================================================================================================================

const companiesItems: IImages[] = [
    {
        alt: "company 01",
        img: companiesImages.company01,
        imgWEBP: companiesImages.company01_WEBP,
    },
    {
        alt: "company 02",
        img: companiesImages.company02,
        imgWEBP: companiesImages.company02_WEBP,
    },
    {
        alt: "company 02",
        img: companiesImages.company02,
        imgWEBP: companiesImages.company02_WEBP,
    },
    {
        alt: "company 01",
        img: companiesImages.company01,
        imgWEBP: companiesImages.company01_WEBP,
    },
    {
        alt: "company 01",
        img: companiesImages.company01,
        imgWEBP: companiesImages.company01_WEBP,
    },
    {
        alt: "company 02",
        img: companiesImages.company02,
        imgWEBP: companiesImages.company02_WEBP,
    },
];

//========================================================================================================================================================

const spheresItems: ISphere[] = [
    {
        icon: "_icon-axe",
        title: "Research",
        text: "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.",
    },
    {
        icon: "_icon-nuclear",
        title: "Marketing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum similique distinctio deserunt? Quae, ipsam.",
    },
    {
        icon: "_icon-scales",
        title: "Results",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis reprehenderit aliquid in nam ut velit voluptate consequuntur minus inventore!",
    },
];

//========================================================================================================================================================
const teamItems: ITeamItem[] = [
    {
        img: avatarsImages.avatar09,
        imgWebp: avatarsImages.avatar09_WEBP,
        name: "Kerry Jones",
        position: "Designer",
        link01: "/twitter-link01",
        link01Icon: "_icon-twitter",
        link02: "/globe-link01",
        link02Icon: "_icon-globe",
        link03: "/codepen-link01",
        link03Icon: "_icon-codepen",
    },
    {
        img: avatarsImages.avatar11,
        imgWebp: avatarsImages.avatar11_WEBP,
        name: "Kerry Jones",
        position: "Designer",
        link01: "/twitter-link02",
        link01Icon: "_icon-twitter",
        link02: "/globe-link02",
        link02Icon: "_icon-globe",
        link03: "/codepen-link02",
        link03Icon: "_icon-codepen",
    },
    {
        img: avatarsImages.avatar10,
        imgWebp: avatarsImages.avatar10_WEBP,
        name: "Kerry Jones",
        position: "Designer",
        link01: "/twitter-link03",
        link01Icon: "_icon-twitter",
        link02: "/globe-link03",
        link02Icon: "_icon-globe",
        link03: "/codepen-link03",
        link03Icon: "_icon-codepen",
    },
    {
        img: avatarsImages.avatar12,
        imgWebp: avatarsImages.avatar12_WEBP,
        name: "Kerry Jones",
        position: "Designer",
        link01: "/twitter-link04",
        link01Icon: "_icon-twitter",
        link02: "/globe-link04",
        link02Icon: "_icon-globe",
        link03: "/codepen-link04",
        link03Icon: "_icon-codepen",
    },
    {
        img: avatarsImages.avatar13,
        imgWebp: avatarsImages.avatar13_WEBP,
        name: "Kerry Jones",
        position: "Designer",
        link01: "/twitter-link05",
        link01Icon: "_icon-twitter",
        link02: "/globe-link05",
        link02Icon: "_icon-globe",
        link03: "/codepen-link05",
        link03Icon: "_icon-codepen",
    },
    {
        img: avatarsImages.avatar14,
        imgWebp: avatarsImages.avatar14_WEBP,
        name: "Kerry Jones",
        position: "Designer",
        link01: "/twitter-link06",
        link01Icon: "_icon-twitter",
        link02: "/globe-link06",
        link02Icon: "_icon-globe",
        link03: "/codepen-link06",
        link03Icon: "_icon-codepen",
    },
];

export default {
    socialLinks,
    benefitsSlides,
    servicesItems,
    testimonialsSlides,
    testimonialsCircles,
    companiesItems,
    spheresItems,
    teamItems,
};
