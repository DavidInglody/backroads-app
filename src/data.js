import image1 from "./images/tour-1.jpeg"
import image2 from "./images/tour-2.jpeg"
import image3 from "./images/tour-3.jpeg"
import image4 from "./images/tour-4.jpeg"

export const pageLinks = [
    {id:1, href:"#home", text:"home"},
    {id:2, href:"#about", text:"about"},
    {id:3, href:"#services", text:"services"},
    {id:4, href:"#tours", text:"tours"},

]

export const socialLinks = [
    {id:1, href: "https://www.facebook.com", icon: "fab fa-facebook"},
    {id:2, href: "https://www.twitter.com", icon: "fab fa-twitter"},
    {id:3, href: "https://www.facebook.com", icon: "fab fa-squarespace"}
]

export const services = [
    {
        id:1 , 
        icon: "fas fa-wallet fa-fw", 
        heading:"saving money", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    },
    {
        id:2 , 
        icon: "fas fa-tree fa-fw", 
        heading:"endless hiking", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    },
    {
        id:3 , 
        icon: "fas fa-socks fa-fw", 
        heading:"amazing comfort", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    }
]

export const tours =[
    {
        id:1,
        img: image1,
        date:"august 26th, 2020",
        heading:"Tibet Adventure",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location:"China",
        duration: "6 Days",
        price: "from $2100"
    },
    {
        id:2,
        img: image2,
        date:"october 1th, 2020",
        heading:"best of java",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location:"indonesia",
        duration: "11 days",
        price: "from $1400"
    },
    {
        id:3,
        img: image3,
        date:"september 15th, 2020",
        heading:"explore hong kong",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location:"hong kong",
        duration: "8 Days",
        price: "from $5000"
    },
    {
        id:4,
        img: image4,
        date:"december 5th, 2019",
        heading:"kenya highlights",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location:"Kenya",
        duration: "20 Days",
        price: "from $3300"
    }
]