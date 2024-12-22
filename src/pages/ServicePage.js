import React from "react";
import { useParams } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { Box } from "@mui/material";
import { FaVideo, FaLightbulb, FaNetworkWired, FaMicrophoneAlt, FaChalkboardTeacher, FaBell, FaClinicMedical, FaProjectDiagram, FaBroadcastTower, FaShieldAlt, FaWifi, FaMusic, FaClipboardList } from "react-icons/fa";

const servicesData = {
  residential: [
    {
      name: "Home Theater Systems",
      description: "High-quality sound and visuals for home entertainment.",
      amxDevices: "AMX Enova DGX, Acendo Vibe",
      crestronDevices: "Crestron DM NVX, TSR-310 Remote",
      icon: <FaVideo size={50} className="text-primary" />,
    },
    {
      name: "Smart Home Integration",
      description: "Integrated control for lighting, blinds, and temperature.",
      amxDevices: "AMX Modero G5 Touch Panels",
      crestronDevices: "Crestron Home Automation Hub",
      icon: <FaLightbulb size={50} className="text-warning" />,
    },
    {
      name: "Lighting Solutions",
      description: "Dynamic lighting control for ambiance and energy efficiency.",
      amxDevices: "AMX NetLinx Controllers",
      crestronDevices: "Crestron Horizon Keypads",
      icon: <FaLightbulb size={50} className="text-info" />,
    },
    {
      name: "Security Camera Display",
      description: "Centralized monitoring of security cameras.",
      amxDevices: "AMX SVSI N-Series",
      crestronDevices: "Crestron DM NVX Encoder/Decoder",
      icon: <FaBroadcastTower size={50} className="text-danger" />,
    },
    {
      name: "Multi-Room Audio Systems",
      description: "Enjoy seamless audio across multiple rooms.",
      amxDevices: "AMX Precis DSP",
      crestronDevices: "Crestron Home Audio Distribution",
      icon: <FaNetworkWired size={50} className="text-success" />,
    },
    {
      name: "Wi-Fi and Network Solutions",
      description: "Reliable internet and network connectivity for smart homes.",
      amxDevices: "AMX Network Solutions",
      crestronDevices: "Crestron Wi-Fi Systems",
      icon: <FaWifi size={50} className="text-primary" />,
    },
    {
      name: "Energy Management",
      description: "Optimize energy use with smart controls.",
      amxDevices: "AMX Energy Manager",
      crestronDevices: "Crestron Smart Energy",
      icon: <FaShieldAlt size={50} className="text-secondary" />,
    },
    {
      name: "Home Office Setup",
      description: "Seamless AV integration for remote work.",
      amxDevices: "AMX Precis DSP",
      crestronDevices: "Crestron DM NVX",
      icon: <FaProjectDiagram size={50} className="text-info" />,
    },
    {
      name: "Outdoor Entertainment",
      description: "AV systems for gardens and patios.",
      amxDevices: "AMX Outdoor Speakers",
      crestronDevices: "Crestron Outdoor Solutions",
      icon: <FaBroadcastTower size={50} className="text-danger" />,
    },
  ],
  office: [
    {
      name: "Conference Room Setup",
      description: "Modern video conferencing tools.",
      amxDevices: "AMX Acendo Vibe, Enova DGX",
      crestronDevices: "Crestron Flex UC Solutions, Mercury",
      icon: <FaProjectDiagram size={50} className="text-primary" />,
    },
    {
      name: "Digital Signage",
      description: "Display promotional content and schedules.",
      amxDevices: "AMX SVSI N-Series, Precis DSP",
      crestronDevices: "Crestron DM NVX, 4K DigitalMedia",
      icon: <FaVideo size={50} className="text-success" />,
    },
    {
      name: "Interactive Whiteboards",
      description: "Tools for engaging presentations.",
      amxDevices: "AMX Modero Touch Panels",
      crestronDevices: "Crestron Presentation Systems, TS-1070",
      icon: <FaChalkboardTeacher size={50} className="text-warning" />,
    },
    {
      name: "Public Announcement Systems",
      description: "Office-wide announcement systems.",
      amxDevices: "AMX Mass Notification System",
      crestronDevices: "Crestron Commercial Audio Solutions",
      icon: <FaBell size={50} className="text-warning" />,
    },
    {
      name: "Room Scheduling Systems",
      description: "Manage meeting rooms efficiently with scheduling tools.",
      amxDevices: "AMX RoomBook",
      crestronDevices: "Crestron Room Scheduling Panels",
      icon: <FaProjectDiagram size={50} className="text-secondary" />,
    },
    {
      name: "Wi-Fi and Network Optimization",
      description: "Ensure high-speed internet across the office.",
      amxDevices: "AMX Network Solutions",
      crestronDevices: "Crestron Enterprise Networking",
      icon: <FaWifi size={50} className="text-primary" />,
    },
    {
      name: "Sound Masking Systems",
      description: "Enhance privacy with sound masking solutions.",
      amxDevices: "AMX Precis DSP",
      crestronDevices: "Crestron Audio Management",
      icon: <FaShieldAlt size={50} className="text-secondary" />,
    },
    {
      name: "Employee Training AV Setup",
      description: "Interactive systems for training sessions.",
      amxDevices: "AMX Modero Touch Panels",
      crestronDevices: "Crestron Training Systems",
      icon: <FaChalkboardTeacher size={50} className="text-primary" />,
    },
    {
      name: "Video Wall Integration",
      description: "High-quality video walls for presentations.",
      amxDevices: "AMX SVSI N-Series",
      crestronDevices: "Crestron Video Wall Solutions",
      icon: <FaVideo size={50} className="text-info" />,
    },
  ],
  factory: [
    {
      name: "Industrial Display Systems",
      description: "Monitor operations with large displays.",
      amxDevices: "AMX Enova DGX, SVSI N-Series",
      crestronDevices: "Crestron DM NVX, DMPS3-4K-350",
      icon: <FaNetworkWired size={50} className="text-primary" />,
    },
    {
      name: "Noise-canceling Intercom Systems",
      description: "Communication in noisy environments.",
      amxDevices: "AMX Precis DSP, NetLinx",
      crestronDevices: "Crestron Fusion Audio, Saros Speakers",
      icon: <FaMicrophoneAlt size={50} className="text-danger" />,
    },
    {
      name: "Safety Announcements & Alarms",
      description: "Alert systems for emergencies.",
      amxDevices: "AMX NetLinx, Notification Systems",
      crestronDevices: "Crestron Emergency Response, DMPS3",
      icon: <FaBell size={50} className="text-warning" />,
    },
    {
      name: "Automation Solutions",
      description: "Streamline factory operations with automation.",
      amxDevices: "AMX Rapid Project Maker",
      crestronDevices: "Crestron Control Hub",
      icon: <FaBroadcastTower size={50} className="text-secondary" />,
    },
    {
      name: "Energy Monitoring Systems",
      description: "Track energy usage for better efficiency.",
      amxDevices: "AMX Energy Tracker",
      crestronDevices: "Crestron Energy Management",
      icon: <FaShieldAlt size={50} className="text-success" />,
    },
    {
      name: "Surveillance Integration",
      description: "Comprehensive monitoring solutions for factories.",
      amxDevices: "AMX Surveillance Manager",
      crestronDevices: "Crestron Surveillance Hub",
      icon: <FaBroadcastTower size={50} className="text-info" />,
    },
    {
      name: "Factory Data Visualization",
      description: "Real-time data dashboards for monitoring.",
      amxDevices: "AMX Enova DGX",
      crestronDevices: "Crestron Dashboard Integration",
      icon: <FaProjectDiagram size={50} className="text-primary" />,
    },
    {
      name: "Environmental Monitoring",
      description: "Track factory conditions effectively.",
      amxDevices: "AMX Sensor Hub",
      crestronDevices: "Crestron Environmental Systems",
      icon: <FaShieldAlt size={50} className="text-info" />,
    },
    {
      name: "Robotics Integration",
      description: "Seamlessly control robotic systems.",
      amxDevices: "AMX Robotics Manager",
      crestronDevices: "Crestron Robotics Hub",
      icon: <FaBroadcastTower size={50} className="text-secondary" />,
    },
  ],
  school: [
    {
      name: "Smart Classrooms",
      description: "Interactive learning with digital displays and smart boards.",
      amxDevices: "AMX Modero G5, Enova DGX",
      crestronDevices: "Crestron DM NVX, TS-1070 Touch Panel",
      icon: <FaChalkboardTeacher size={50} className="text-success" />,
    },
    {
      name: "Auditorium AV Setup",
      description: "High-quality AV systems for large gatherings.",
      amxDevices: "AMX SVSI N-Series, Precis DSP",
      crestronDevices: "Crestron DMPS3-4K-350, XiO Cloud",
      icon: <FaVideo size={50} className="text-primary" />,
    },
    {
      name: "Public Announcement Systems",
      description: "Centralized announcement system for the entire school.",
      amxDevices: "AMX Mass Notification, NetLinx",
      crestronDevices: "Crestron Fusion Audio, Saros Speakers",
      icon: <FaBell size={50} className="text-warning" />,
    },
    {
      name: "Virtual Classrooms",
      description: "Enable remote learning with virtual classroom solutions.",
      amxDevices: "AMX SVSI Encoder",
      crestronDevices: "Crestron AirMedia",
      icon: <FaProjectDiagram size={50} className="text-info" />,
    },
    {
      name: "Library AV Solutions",
      description: "Audio-visual solutions for modern libraries.",
      amxDevices: "AMX Modero Touch Panels",
      crestronDevices: "Crestron DMPS3 Series",
      icon: <FaVideo size={50} className="text-secondary" />,
    },
    {
      name: "Collaborative Learning Spaces",
      description: "Design spaces for collaborative and group learning.",
      amxDevices: "AMX Collaboration Hub",
      crestronDevices: "Crestron Smart Collaboration Tools",
      icon: <FaLightbulb size={50} className="text-primary" />,
    },
    {
      name: "STEM Lab AV Integration",
      description: "Advanced AV systems for STEM labs and technical education.",
      amxDevices: "AMX Modero G5",
      crestronDevices: "Crestron Smart Lab Solutions",
      icon: <FaNetworkWired size={50} className="text-success" />,
    },
    {
      name: "Sports Facilities AV Solutions",
      description: "Enhance sports events with high-quality AV systems.",
      amxDevices: "AMX Enova DGX",
      crestronDevices: "Crestron Outdoor Audio Systems",
      icon: <FaBroadcastTower size={50} className="text-danger" />,
    },
    {
      name: "Digital Exam Systems",
      description: "Secure and interactive systems for digital exams.",
      amxDevices: "AMX Secure Exam Hub",
      crestronDevices: "Crestron Test Solutions",
      icon: <FaShieldAlt size={50} className="text-warning" />,
    },
  ],
  hospital: [
    {
      name: "Patient Room Entertainment",
      description: "High-quality AV systems for patient relaxation.",
      amxDevices: "AMX Enova DGX, Modero G5",
      crestronDevices: "Crestron DM NVX, Horizon Keypads",
      icon: <FaClinicMedical size={50} className="text-info" />,
    },
    {
      name: "Surgical Room Displays",
      description: "High-definition displays for surgeries.",
      amxDevices: "AMX SVSI N-Series",
      crestronDevices: "Crestron DMPS3-4K-350",
      icon: <FaVideo size={50} className="text-danger" />,
    },
    {
      name: "Hospital-wide Announcement Systems",
      description: "Emergency and general announcements.",
      amxDevices: "AMX Mass Notification Systems",
      crestronDevices: "Crestron Fusion, AirMedia",
      icon: <FaBell size={50} className="text-warning" />,
    },
    {
      name: "Telemedicine Integration",
      description: "Advanced systems for remote patient consultations.",
      amxDevices: "AMX NetLinx Controllers",
      crestronDevices: "Crestron Flex Telehealth",
      icon: <FaProjectDiagram size={50} className="text-primary" />,
    },
    {
      name: "Waiting Room Displays",
      description: "Display information and entertainment in waiting areas.",
      amxDevices: "AMX Enova DGX",
      crestronDevices: "Crestron DM NVX",
      icon: <FaVideo size={50} className="text-info" />,
    },
    {
      name: "Nurse Call Systems",
      description: "Improve patient care with advanced call systems.",
      amxDevices: "AMX Rapid Alert",
      crestronDevices: "Crestron Nurse Call Integration",
      icon: <FaShieldAlt size={50} className="text-danger" />,
    },
    {
      name: "Medical Conference Rooms",
      description: "AV integration for medical meetings and conferences.",
      amxDevices: "AMX Enova DGX",
      crestronDevices: "Crestron Flex Conferencing",
      icon: <FaChalkboardTeacher size={50} className="text-primary" />,
    },
    {
      name: "Pharmacy Display Systems",
      description: "Interactive and informative displays for pharmacies.",
      amxDevices: "AMX Digital Display Systems",
      crestronDevices: "Crestron DMPS3",
      icon: <FaLightbulb size={50} className="text-warning" />,
    },
    {
      name: "Emergency Response Systems",
      description: "Advanced AV systems for emergency response coordination.",
      amxDevices: "AMX Mass Notification",
      crestronDevices: "Crestron Emergency Systems",
      icon: <FaShieldAlt size={50} className="text-secondary" />,
    },
  ],
  shops: [
    {
      name: "Digital Signage",
      description: "Display promotional content and offers to attract customers.",
      amxDevices: "AMX SVSI N-Series, Precis DSP",
      crestronDevices: "Crestron DM NVX, 4K DigitalMedia",
      icon: <FaVideo size={50} className="text-success" />,
    },
    {
      name: "Background Music Systems",
      description: "Create an inviting atmosphere with curated background music.",
      amxDevices: "AMX Precis DSP",
      crestronDevices: "Crestron Saros Speakers, Sonnex Audio",
      icon: <FaMusic size={50} className="text-primary" />,
    },
    {
      name: "Security Camera Integration",
      description: "Monitor your shop with high-quality surveillance solutions.",
      amxDevices: "AMX Surveillance Manager",
      crestronDevices: "Crestron DM NVX Encoder/Decoder",
      icon: <FaBroadcastTower size={50} className="text-danger" />,
    },
    {
      name: "Interactive Display Systems",
      description: "Engage customers with interactive touch displays.",
      amxDevices: "AMX Modero G5 Touch Panels",
      crestronDevices: "Crestron TS-1070 Touch Screen",
      icon: <FaChalkboardTeacher size={50} className="text-warning" />,
    },
    {
      name: "Energy Management Systems",
      description: "Optimize energy consumption to reduce operational costs.",
      amxDevices: "AMX Energy Manager",
      crestronDevices: "Crestron Smart Energy",
      icon: <FaShieldAlt size={50} className="text-info" />,
    },
    {
      name: "Public Announcement Systems",
      description: "Broadcast announcements effectively across the shop.",
      amxDevices: "AMX NetLinx Controllers",
      crestronDevices: "Crestron Fusion Audio Solutions",
      icon: <FaBell size={50} className="text-secondary" />,
    },
    {
      name: "Wi-Fi and Networking",
      description: "Provide seamless connectivity for customers and staff.",
      amxDevices: "AMX Network Manager",
      crestronDevices: "Crestron Enterprise Wi-Fi Solutions",
      icon: <FaWifi size={50} className="text-primary" />,
    },
    {
      name: "Queue Management Systems",
      description: "Improve customer experience with efficient queue handling.",
      amxDevices: "AMX Modero Queue Panels",
      crestronDevices: "Crestron Queue Management Systems",
      icon: <FaClipboardList size={50} className="text-warning" />,
    },
    {
      name: "Lighting Control Systems",
      description: "Enhance shop ambiance with dynamic lighting control.",
      amxDevices: "AMX NetLinx Lighting Control",
      crestronDevices: "Crestron Horizon Keypads",
      icon: <FaLightbulb size={50} className="text-success" />,
    },
  ]
};

function ServicePage() {
  const { environment } = useParams();
  const services = servicesData[environment.toLowerCase()] || [];

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <div className="container mt-5">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/7065796-uhd_2160_3840_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="text-primary text-center text-capitalize">{environment} Services</h1>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}

export default ServicePage;