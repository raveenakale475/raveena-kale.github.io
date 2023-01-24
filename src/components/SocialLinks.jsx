import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/raveena-kale-b8111a173/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/raveenakale475",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:raveenar.kale@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Phone <FiPhoneCall size={30} />
        </>
      ),
      href: `tel:${9788654245}`,
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Raveena-Kale-Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  const downloadResume = async () => {
    window.open(
      "https://drive.google.com/file/d/1eIv018vU3m9dRGYq7t05cliYzPehIL8I/view?usp=sharing"
    );
  };

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#937DC2]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
              onClick={downloadResume}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
