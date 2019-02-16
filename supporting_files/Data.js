import React from "react";
import { Dimensions } from "react-native";

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;

export const PortalData = [
  {
    name: "My Timetable",
    code: "#008988",
    image: require("../assets/portal-icons/timetable1.png")
  },
  {
    name: "My Blackboard",
    code: "#BF9839",
    image: require("../assets/portal-icons/blackboard2.png")
  },
  {
    name: "My Email",
    code: "#014A87",
    image: require("../assets/portal-icons/newout1.png")
  },
  {
    name: "My UWL One Drive",
    code: "#03A4EC",
    image: require("../assets/portal-icons/onedrive.png")
  },
  {
    name: "My Registry",
    code: "#BB3800",
    image: require("../assets/portal-icons/registry.png")
  },
  {
    name: "Library",
    code: "#A75509",
    image: require("../assets/portal-icons/library.png")
  },
  {
    name: "UWL Honours",
    code: "#014A87",
    image: require("../assets/portal-icons/calculator.png")
  },
  {
    name: "Students' Union",
    code: "#583D8C",
    image: require("../assets/portal-icons/su.png")
  },
  {
    name: "Lynda.com Tutorials",
    code: "#D8811A",
    image: require("../assets/portal-icons/lynda.png")
  },
  {
    name: "UWL Skype",
    code: "#458B31",
    image: require("../assets/portal-icons/skype-logo.png")
  },
  {
    name: "Attendance",
    code: "#CE0755",
    image: require("../assets/portal-icons/attendance.png")
  },
  {
    name: "Campus",
    code: "#009086",
    image: require("../assets/portal-icons/school-campus.png")
  },
  {
    name: "Employability",
    code: "#BB3901",
    image: require("../assets/portal-icons/businessman.png")
  },
  {
    name: "Student Services",
    code: "#02A4EC",
    image: require("../assets/portal-icons/infouwl.png")
  },
  {
    name: "IT Help' Union",
    code: "#583D8C",
    image: require("../assets/portal-icons/support.png")
  }
];

export const NewsData = [
  {
    logo: require("../assets/logos/UWL-BANNER.png"),
    title: "UWL is a top 50 UK University – Guardian University Guide 2019",
    subtitle:
      "Great news for the University of West London (UWL), as it achieves its highest ever position in UK league tables, climbing to an impressive No.50 in the new Guardian University Guide 2019 rankings of UK higher education institutions.",
    image: require("../assets/news/uwl-guardia.jpg")
  },
  {
    logo: require("../assets/logos/uwlsu-logo.png"),
    title: "Student Trustee & NUS Delegate Elections",
    subtitle:
      "Student Trustee's are elected through cross campus elections at the start of the academic year. Each Student Trustee has a specific duty to speak up and represent the Student body they represent on the highest decision making body at UWLSU. They will also work with Executive Team, play a leading role in running & supporting campaigns and undertake an active role in promoting the Union and its values. Think this could be you? Find out more here.",
    image: require("../assets/news/Webbanner1.jpg")
  },
  {
    logo: require("../assets/logos/uwlsu-logo.png"),
    title: "Lunch and Learn: UWLSU Women in Leadership",
    subtitle:
      "Black women are beginning to emerge as leaders across all industries, academia and not for profit organisations, but this has not come without well-documented adversities, ranging from socioeconomic hurdles, to unconscious bias and discrimination.",
    image: require("../assets/news/bhmuwlsu.png")
  },
  {
    logo: require("../assets/logos/UWL-BANNER.png"),
    title: "Workshops: Money Management/budgeting",
    subtitle:
      "Need advice on budgeting and managing your money? Sign up today to our FREE Money Management Workshops",
    image: require("../assets/news/pexels-photo-716276.jpeg")
  }
];

export const UserData = [
  (name = "Emeline Wung"),
  (course = "Computer Science Bsc"),
  (year = "2nd year"),
  (image = require("../assets/userpic.jpeg"))
];
