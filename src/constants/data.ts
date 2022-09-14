import { IBenefitsSlides, IServiceItem, ISocialLinks } from "./../models/models";
import images from "./images";
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

const { benefitsImages } = images;
const benefitsSlides: IBenefitsSlides[] = [
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

export default { socialLinks, benefitsSlides, servicesItems };
