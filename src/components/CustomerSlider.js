import React from "react";
import Slider from "react-slick";
import { FaLandmark, FaHospitalAlt, FaShoppingCart, FaHome, FaSchool, FaProcedures } from "react-icons/fa";

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
    <div className="customer-slider mt-5">
      <Slider {...settings}>
        {customerIcons.map((customer, index) => (
          <div key={index} className="text-center">
            <div className="icon-wrapper mb-2">{customer.icon}</div>
            <p className="mt-2 text-muted">{customer.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomerSlider;
