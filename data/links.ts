type NavLink = {
    href: string;
    label: string;
};

export const menuLinks: NavLink[] = [
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/customers", label: "Customers" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
];

export const footerLinks = {
    Products: [
        { href: "/products", label: "Why Mailchimp?" },
        { href: "/solutions", label: "Product Updates" },
        { href: "/customers", label: "Email Marketing" },
        { href: "/resources", label: "Websites" },
        { href: "/pricing", label: "Transactional Email" },
        { href: "/pricing", label: "How We Compare" },
        { href: "/pricing", label: "GDPR Compliance" },
        { href: "/pricing", label: "Security" },
        { href: "/pricing", label: "Status" },
        { href: "/pricing", label: "Mobile App" },
    ],
    Resources: [
        { href: "/products", label: "Marketing Library" },
        { href: "/solutions", label: "Free Marketing Tools" },
        { href: "/customers", label: "Marketing Glossary" },
        { href: "/resources", label: "Integrations Directory" },
    ],
    Community: [
        { href: "/products", label: "Agencies & Freelancers" },
        { href: "/solutions", label: "Developers" },
        { href: "/customers", label: "Events" },

    ],
    Company: [
        { href: "/products", label: "Our Story" },
        { href: "/solutions", label: "Newsroom" },
        { href: "/customers", label: "Give Where You Live" },
        { href: "/customers", label: "Careers" },
        { href: "/customers", label: "Accessibility" },
    ],
    Help: [
        { href: "/products", label: "Contact Us" },
        { href: "/solutions", label: "Hire an Expert" },
        { href: "/customers", label: "Help Center" },
        { href: "/customers", label: "Talk to Sales" },
    ]
};