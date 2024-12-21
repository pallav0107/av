import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import {
  FaLandmark,
  FaHospitalAlt,
  FaShoppingCart,
  FaHome,
  FaSchool,
  FaProcedures,
} from "react-icons/fa";

const customerIcons = [
  {
    name: "Sydney Opera House",
    icon: <FaLandmark size={50} className="text-primary" />,
  },
  {
    name: "Royal Prince Alfred Hospital",
    icon: <FaHospitalAlt size={50} className="text-danger" />,
  },
  {
    name: "Westfield Sydney",
    icon: <FaShoppingCart size={50} className="text-success" />,
  },
  {
    name: "Bondi Beach Residences",
    icon: <FaHome size={50} className="text-info" />,
  },
  {
    name: "The King's School, Parramatta",
    icon: <FaSchool size={50} className="text-warning" />,
  },
  {
    name: "St. Vincent's Hospital Sydney",
    icon: <FaProcedures size={50} className="text-danger" />,
  },
  {
    name: "Circular Quay Residences",
    icon: <FaHome size={50} className="text-secondary" />,
  },
];

function CustomerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box mt={5} className="customer-slider">
      <Slider {...settings}>
        {customerIcons.map((customer, index) => (
          <Box key={index} textAlign="center">
            <Box mb={2}>{customer.icon}</Box>
            <Typography variant="body2" color="textSecondary">
              {customer.name}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default CustomerSlider;
