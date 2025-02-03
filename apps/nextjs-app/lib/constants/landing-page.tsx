import { RouteProps, FeatureWithDescriptionProps,
    TestimonialProps, 
    PricingProps,
    FAQProps,
    FooterListProps,
    TeamProps} from "@repo/ts-types/landing-page/v1";

export const routeList: RouteProps[] = [
    {href: "#features", label: "Features",},
    {href: "#testimonials", label: "Testimonials",},
    {href: "#pricing", label: "Pricing",},
    {href: "#faq", label: "FAQ",}
]

export const featuresWithDescription: FeatureWithDescriptionProps[] = [
  { title: "Aesthetic Landing Page", description: "Minimalist and aesthetic, inspired by shadcn-landing-page.", href: "./features/landing.png" },
  { title: "Atomic Design Shadcn Components", description: "Organized as atoms, molecules, organisms, and templates.", href: "./features/shadcn.png" },
  { title: "Shadcn Themes", description: "Switch themes easily with a simple import statement.", href: "./features/shadcn-themes.webp" },
  { title: "Authv5 Authentication", description: "Email and social authentication support.", href: "./features/authv5.png" },
  { title: "Razorpay Payments", description: "Integrated Razorpay for seamless transactions.", href: "./features/razorpay.webp" },
  { title: "Vercel Blob Storage", description: "Profile images and modifications stored on Vercel.", href: "./features/vercel.jpg" },
  { title: "Prisma ORM", description: "Efficient user data management using Prisma.", href: "./features/prismaorm.jpg" },
  { title: "Profile Management Settings", description: "Edit and manage user profile details.", href: "./features/settings.png" },
  { title: "Resend Email", description: "Easily resend verification and reset emails.", href: "./features/resend.png" },
  { title: "Sidebar Navigation", description: "Smooth navigation between sections and settings.", href: "./features/sidebar.png" },
  { title: "Notification System", description: "Real-time notifications for users.", href: "./features/notifications.png" },
  { title: "Customized Pricing for API Credits", description: "Cashfree Payments integration for API credits.", href: "./features/cashfree.avif" },
  { title: "Notion Client Library", description: "Fetch and manage data via Notion API.", href: "./features/notion.png" },
  { title: "OpenAI Client Library", description: "Integrate OpenAI API for intelligent responses.", href: "./features/openai.png" }
];

export const featureList: string[] = [
  "Landing Page", "Dark/Light theme", "Docusaurus Documentation", "Razorpay Payments",
  "NextAuth Authentication", "Social Logins", "Shadcn Atomic Design Components",
  "Shadcn Themes", "Shadcn Templates", "Profile Management Settings", "Prisma ORM",
  "Resend Email", "Vercel Blob Storage", "Responsive design", "Minimalist",
  "Session Management", "Third Party Integrations", "Notification System",
  "Customized Pricing for API Credits", "Notion Client Library", "OpenAI Client Library"
];


export const testimonials: TestimonialProps[] = [
  { image: "./anoop.jpg", name: "Anoop Karnik Dasika", userName: "@anooplegend1992", comment: "Best boilerplate for micro SaaS monorepo!" },
  { image: "./batman.jpg", name: "Batman", userName: "@batman", comment: "I could've saved Gotham with this!" },
  { image: "./einstein.jpg", name: "Albert Einstein", userName: "@alberteinstein", comment: "This could've solved the universe's equation!" },
  { image: "./newton.jpg", name: "Isaac Newton", userName: "@isaacnewton", comment: "More than just three laws of motion!" },
  { image: "./buddha.jpeg", name: "Gautam Buddha", userName: "@gautambuddha", comment: "Understanding the meaning of life... programmatically!" },
  { image: "./ironman.jpeg", name: "Iron Man", userName: "@ironman", comment: "Could've prevented Thanos!" }
];;
      
export const FAQList: FAQProps[] = [
  { question: "Is this boilerplate free?", answer: "Yes, it's open-source.", value: "item-1" },
  { question: "What tools are used?", answer: "Next.js, React, TypeScript, Prisma, Razorpay, Shadcn components, and more.", value: "item-2" },
  { question: "Is this beginner-friendly?", answer: "Yes, with proper documentation study.", value: "item-3" },
  { question: "How can I contribute?", answer: "Fork, modify, and submit pull requests!", value: "item-4" }
];


export const footerList: FooterListProps = {
  "Follow Us": [
      { label: "Twitter", href: "https://x.com/anooplegend1992" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/anoopkarnik/" },
      { label: "Github", href: "https://github.com/anoopkarnik" },
      { label: "YouTube", href: "https://www.youtube.com/@bayesianlabs" },
      { label: "Discord", href: "https://discord.gg/ephjwba9" }
  ],
  "Documentation": [
      { label: "Overview", href: "https://docs.bayesian-labs.com/docs/overview/" },
      { label: "FAQs", href: "https://docs.bayesian-labs.com/docs/faqs" }
  ],
  "Legal": [
      { label: "Terms & Conditions", href: "/landing/terms-of-service" },
      { label: "Privacy Policy", href: "/landing/privacy-policy" }
  ]
};


export const teamList: TeamProps[] = [
  {
    imageUrl: "/anoop.jpg",
    name: "Anoop Karnik Dasika",
    position: "Founder",
    description: "Just into creating Sci-Fi stuff. Currently working on automation and gamifying the boring stuff, we do in life.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/anoopkarnik/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/anoop.karnik1",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/anoopkarnik",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/anooplegend1992",
      },
      {
        name: "Github",
        url: "https://github.com/anoopkarnik",
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@bayesianlabs",
      }
    ]
  }
];


export const pricingList: PricingProps[] = [
  {
    title: "Trial",
    popular: 1,
    price: "$0",
    priceType: "",
    unregisteredHref: "/auth/login",
    registeredHref: "/",
    description:
      "To test live how this project works, you can use this trial plan and perform 20 credits worth of operations.",
    unregisteredButtonText: "Get Started",
    registeredButtonText: "Go to Dashboard",
    benefitList: [
      "Open Source Code",
      "Testing how it works live",
      "Latest Tools and Technologies",
      "20 credits",
      "Mail Support",
    ],
  },
  {
    title: "Small Pack",
    popular: 0,
    price: "$1.99",
    priceType: "",
    unregisteredHref: "/auth/login",
    registeredHref: "/billing",
    description:
      "To test live how this project works, you can use this trial plan and perform 200 credits worth of operations.",
    unregisteredButtonText: "Get Started",
    registeredButtonText: "Go to BillingPage",
    benefitList: [
      "Open Source Code",
      "Testing how it works live",
      "Latest Tools and Technologies",
      "200 credits",
      "Mail Support",
    ],
  },
  {
    title: "Medium Pack",
    popular: 0,
    price: "$4.99",
    priceType: "",
    unregisteredHref: "/auth/login",
    registeredHref: "/billing",
    description:
      "To test live how this project works, you can use this trial plan and perform 500 credits worth of operations.",
    unregisteredButtonText: "Get Started",
    registeredButtonText: "Go to Billing Page",
    benefitList: [
      "Open Source Code",
      "Testing how it works live",
      "Latest Tools and Technologies",
      "500 credits",
      "Mail Support",
    ],
  },
  {
    title: "Large Pack",
    popular: 0,
    price: "$9.99",
    priceType: "",
    unregisteredHref: "/auth/login",
    registeredHref: "/billing",
    description:
      "To test live how this project works, you can use this trial plan and perform 1000 credits worth of operations.",
    unregisteredButtonText: "Get Started",
    registeredButtonText: "Go to Billing Page",
    benefitList: [
      "Open Source Code",
      "Testing how it works live",
      "Latest Tools and Technologies",
      "1000 credits",
      "Mail Support",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: "ꝏ",
    priceType: "",
    unregisteredHref: "https://mail.google.com/mail?view=cm&fs=1&to=support@bayesian-labs.com&su=Support",
    registeredHref: "/https://mail.google.com/mail?view=cm&fs=1&to=support@bayesian-labs.com&su=Support",
    description:
      "Hire us to customize the project as per your requirements and get all the future updates.",
    unregisteredButtonText: "Contact Us",
    registeredButtonText: "Contact Us",
    benefitList: [
      "Open Source Code",
      "Testing how it works live",
      "Latest Tools and Technologies",
      "All Future Updates",
      "Mail Support",
    ],
  },
];
