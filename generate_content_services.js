const fs = require('fs');

const path = '/Users/saipavan/Desktop/BeyondWebco/Velocity Marketing/src/data/contentData.js';
let content = fs.readFileSync(path, 'utf8');

const servicesContent = `export const SERVICES_SECTION = {
  label: "WHAT WE DO",
  heading: "Our Services",
  intro: "Velocity Marketing is a leading BTL (Below-the-Line) marketing agency delivering innovative, result-driven on-ground brand activation solutions across India. We specialize in creating impactful consumer experiences through product sampling, retail branding, outdoor advertising, transit branding, rural marketing, corporate activations, and promotional campaigns. With a skilled execution team and nationwide network, we help brands increase visibility, engage target audiences, generate quality leads, and drive measurable business growth through customized marketing solutions.",
};

export const SERVICES = [
  {
    id: "01",
    title: "Direct Marketing",
    shortDesc: "Connect directly with your target audience through personalized, face-to-face approaches and targeted distribution.",
    icon: "Users",
    image: "/assets/services/Events & Promotions.png",
    items: [
      "Door-to-Door Marketing",
      "Leaflet Insertion",
      "Leaflet Distribution",
      "Product Sampling"
    ],
    detailedDesc: "Connect directly with your target audience through our Door-to-Door Marketing services and targeted distribution strategies that build trust and drive measurable results."
  },
  {
    id: "02",
    title: "Brand Activations",
    shortDesc: "Create memorable customer experiences and strong connections with your audience through targeted promotional events.",
    icon: "Sparkles",
    image: "/assets/services/Brand Activations.png",
    items: [
      "Mall Activations",
      "Apartment Activations",
      "Corporate Activations",
      "School & College Campaigns"
    ],
    detailedDesc: "Create memorable customer experiences and strong connections with your audience through targeted promotional events across high-value locations."
  },
  {
    id: "03",
    title: "Outdoor Advertising",
    shortDesc: "Build strong, continuous brand visibility in urban and rural landscapes through premium outdoor media strategies.",
    icon: "MapPin",
    image: "/assets/services/outdoor activation.png",
    items: [
      "Hoardings & Billboards",
      "No Parking Board Branding",
      "Wall Painting"
    ],
    detailedDesc: "Build strong, continuous brand visibility in urban and rural landscapes through premium and cost-effective outdoor media strategies."
  },
  {
    id: "04",
    title: "Transit Branding",
    shortDesc: "Turn vehicles into moving advertisements to deliver continuous, dynamic brand exposure across cities and towns.",
    icon: "Truck",
    image: "/assets/services/Logistics & Operations.png",
    items: [
      "Auto Branding",
      "Van Campaigns",
      "Audio Announcements"
    ],
    detailedDesc: "Turn vehicles into moving advertisements to deliver continuous, dynamic brand exposure across cities and towns."
  },
  {
    id: "05",
    title: "Retail & Merchandising",
    shortDesc: "Enhance your in-store presence and monitor retail performance with eye-catching branding solutions.",
    icon: "ShoppingBag",
    image: "/assets/services/Retail marketing.png",
    items: [
      "Retail Branding",
      "Merchandising Services",
      "Retail Audits"
    ],
    detailedDesc: "Enhance your in-store presence and monitor retail performance with eye-catching branding solutions and professional merchandising execution."
  },
  {
    id: "06",
    title: "Consumer Insights",
    shortDesc: "Collect valuable customer data and deliver engaging product interactions with our trained personnel.",
    icon: "PieChart",
    image: "/assets/services/Audit & Analytics.png",
    items: [
      "Brand Promoters",
      "Consumer Surveys"
    ],
    detailedDesc: "Collect valuable customer data and deliver engaging product interactions with our trained personnel and structured research activities."
  },
  {
    id: "07",
    title: "Rural Marketing",
    shortDesc: "Expand your brand's reach and impact into deep rural markets with highly localized engagement strategies.",
    icon: "Map",
    image: "/assets/services/Digital Support.png",
    items: [
      "Village Activations",
      "Haat Promotions",
      "Community Engagement"
    ],
    detailedDesc: "Expand your brand's reach and impact into deep rural markets with highly localized engagement strategies."
  },
  {
    id: "08",
    title: "Events & Entertainment",
    shortDesc: "Execute impactful promotional events and captive entertainment advertising for maximum brand recall.",
    icon: "Calendar",
    image: "/assets/services/Events & Promotions.png",
    items: [
      "Event Management",
      "Brand Activations",
      "Theatre Branding"
    ],
    detailedDesc: "Execute impactful promotional events and captive entertainment advertising for maximum brand recall and audience engagement."
  }
];`;

const startIndex = content.indexOf('export const SERVICES_SECTION = {');
const endIndexStr = '];\n\nexport const COVERAGE_SECTION = {';
const endIndex = content.indexOf(endIndexStr);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + servicesContent + '\n\n' + content.substring(endIndex + 3);
  fs.writeFileSync(path, content);
  console.log('Successfully updated contentData.js');
} else {
  console.error('Could not find start or end index');
}
