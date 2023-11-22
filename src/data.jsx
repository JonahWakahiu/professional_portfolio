import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <FaHome className="nav_icon" />,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    icon: <FaUser className="nav_icon" />,
  },
  {
    id: 3,
    name: "Projects",
    path: "/projects",
    icon: <FaFolderOpen className="nav_icon" />,
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
    icon: <FaEnvelopeOpen className="nav_icon" />,
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    desc: "Jonah",
  },
  {
    id: 2,
    title: "Last Name : ",
    desc: "Wakahiu",
  },
  {
    id: 3,
    title: "Age : ",
    desc: "Jonah Wakahiu",
  },
  {
    id: 4,
    title: "Nationality : ",
    desc: "Kenyan",
  },
  {
    id: 5,
    title: "Email : ",
    desc: "jonah.wakahiumaina@gmail.com",
  },
  {
    id: 6,
    title: "Phone Number : ",
    desc: "+254 796 893524",
  },
  {
    id: 7,
    title: "linkedin : ",
    desc: "Jonah Wakahiu",
  },
  {
    id: 8,
    title: "languages : ",
    desc: "English, Kiswahili",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },
  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },
  {
    id: 3,
    no: "10+",
    title: "Happy <br /> Clients",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "95",
  },
  {
    id: 2,
    title: "Css",
    percentage: "90",
  },
  {
    id: 3,
    title: "JavaScript",
    percentage: "60",
  },
  {
    id: 4,
    title: "React",
    percentage: "50",
  },
  {
    id: 5,
    title: "PHP",
    percentage: "80",
  },
  {
    id: 6,
    title: "Laravel",
    percentage: "40",
  },
  {
    id: 7,
    title: "JQuery",
    percentage: "60",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023",
    title: "Web Developer",
    desc: "Developed my own portfolio and others",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023, May - 2023, Aug",
    title: "System Development <span> Kenyatta University</span>",
    desc: "Development of Chandaria Incubation system",
  },
  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019, Aug - 2023, April",
    title:
      "Bsc. Applied Physics and Computer Science <span>Multimedia University of Kenya</span>",
    desc: "I learned and equipped myself with skills of programming",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019, Jan - 2019, April",
    title: "Computer package certificate <span>Dykaan College</span>",
    desc: "Microsoft office",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2014 - 2018",
    title: "Kenya Certificate of Secondary education <span>Njabini Boys</span>",
    desc: "I graduated with kenya certificate of secondary education",
  },
];
