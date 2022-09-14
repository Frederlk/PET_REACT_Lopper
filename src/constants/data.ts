import images from "./images";
//========================================================================================================================================================
interface ISocialLinks {
    link: string;
    iconClass: string;
}

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
interface IBenefitsSlides {
    img: string;
    imgWEBP: string;
    alt: string;
}

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

export default { socialLinks, benefitsSlides };
