import React from "react";
import { Link } from "react-router-dom";
import PricingItem from "./PricingItem";

const PricingArea = () => {
  return (
    <section className="pricing-area pb-90">
      <div className="" style={{margin: "0rem 3rem 0rem 3rem"}}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title title-style-two text-center white-title mb-50">
              <h2 className="title">The Right Plan for Your Business</h2>
              <p>
                
              </p>
            </div>
          </div>
        </div>

        <div className="pricing-item-wrap">
          <div className="pricing-tab">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="logo-design-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#logo-design"
                  type="button"
                  role="tab"
                  aria-controls="logo-design"
                  aria-selected="true"
                >
                  Logo Design
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="web-design-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#web-design"
                  type="button"
                  role="tab"
                  aria-controls="web-design"
                  aria-selected="false"
                >
                  Web Design
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="animation-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#animation"
                  type="button"
                  role="tab"
                  aria-controls="animation"
                  aria-selected="false"
                >
                  Animation
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="seo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seo"
                  type="button"
                  role="tab"
                  aria-controls="seo"
                  aria-selected="false"
                >
                  SEO
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="commerce-website-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#commerce-website"
                  type="button"
                  role="tab"
                  aria-controls="commerce-website"
                  aria-selected="false"
                >
                  E-Commerce Website
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane show active"
              id="logo-design"
              role="tabpanel"
              aria-labelledby="logo-design"
            >
              <div className="row g-0 align-items-center justify-content-center">
                <PricingItem title={"Basic Logo Package"} price={69} list={["3 Logo Design Concepts",
                  "04 Revisions",
                  "2 Dedicated Designers",
                  "Free Color Options",
                  "Free Grayscale Format",
                  "Fav icon",
                  "24 To 48 Hours TAT",
                  "All File Formats (Ai, PSD, EPS, PNG, JPG, PDF)",
                  "Add On: $50 For Rush Delivery",
                  "100% Unique Design",
                  "100% Ownership Rights",
                  "100% Satisfaction Guarantee",
                ]} active={false} />
                <PricingItem title={"Professional Logo Package"} price={149} active={true} list={
                  [
                    "8 Logo Design Concepts",
                    "Unlimited Revisions",
                    "3 Dedicated Designers",
                    "Free Stationery Design (Business Card, Letterhead, Envelope)",
                    "Favicon",
                    "Free Color Options",
                    "Free Grayscale Format",
                    "24 to 48 Hours Turnaround Time",
                    "$50 Off on Website Order",
                    "All File Formats (AI, PSD, EPS, PNG, JPG, PDF)",
                    "Add-On: $50 for Rush Delivery",
                    "100% Unique Design",
                    "100% Ownership Rights",
                    "100% Satisfaction Guarantee",
                    "*NO MONTHLY OR ANY HIDDEN FEE*",
                  ]
                } />
                <PricingItem title={"Elite Logo Package"} price={199} active={false}
                  list={
                    [
                      "Unlimited Logo Design Concepts",
                      "Unlimited Revisions",
                      "4 Dedicated Designers",
                      "Free Stationery Design (Business Card, Letterhead, Envelopes, Invoice)",
                      "Corporate Brochure (Up to 2 Pages)",
                      "MS Word Letterhead",
                      "Free Color Options",
                      "Free Grayscale Format",
                      "Favicon",
                      "24 to 48 Hours Turnaround Time",
                      "$50 Off on Website Order",
                      "Add-On: $50 for Rush Delivery",
                      "All File Formats (AI, PSD, EPS, PNG, JPG, PDF)",
                      "100% Unique Design",
                      "100% Ownership Rights",
                      "100% Satisfaction Guarantee",
                    ]
                  }

                />
              </div>
            </div>

            <div
              className="tab-pane"
              id="web-design"
              role="tabpanel"
              aria-labelledby="web-design-tab"
            >
              <div className="row g-0 align-items-center justify-content-center">
                <PricingItem title={"Special Website Package"} price={399} active={false} list={[
                  "5 Pages Website",
                  "5 Stock Images",
                  "J-Query Slider",
                  "Free Domain Registration",
                  "Unlimited Revisions*",
                  "After Sales Support",
                  "100% Satisfaction Guarantee",
                ]}/>
                <PricingItem title={"Website Classic Package"} price={449} active={true} list={[
                  "5 Web Pages",
                  "CMS [WordPress/Joomla]",
                  "J-Query Slider",
                  "5 Stock Images",
                  "Backup Files",
                  "Unlimited Revisions*",
                  "After Sales Support",
                  "100% Satisfaction Guarantee",
                  
                ]}/>
                <PricingItem title={"Website Unlimited Package"} price={999} active={false} list={[
                  "10 Interactive Web Pages",
                  "Mobile Responsive Design",
                  "Desktop, Mobile & Tablet Compatible",
                  "CMS [WordPress/Joomla]",
                  "Unlimited Revisions*",
                  "After Sales Support",
                  "100% Satisfaction Guarantee",
                ]}/>
              </div>
            </div>

            <div
              className="tab-pane"
              id="animation"
              role="tabpanel"
              aria-labelledby="animation-tab"
            >
              <div className="row g-0 align-items-center justify-content-center">
                <PricingItem title={"Silver Animatior"} price={499} active={false} list={[
                  "30 Second Video",
                  "Professional Script",
                  "Storyboard",
                  "Animation",
                  "Voice-Over & Sound Effects",
                  "4 Weeks Delivery",
                  "Unlimited Revisions",
                  "Dedicated Project Manager",
                  "100% Ownership Rights",
                  "100% Satisfaction Guarantee",
                  "*NO MONTHLY OR ANY HIDDEN FEE*",
                ]}/>
                <PricingItem title={"Gold Animator"} price={999} active={true} list={[
                  "60 Second Video",
                  "Professional Script",
                  "Sample Theme",
                  "Storyboard",
                  "Animation",
                  "Voice-Over & Sound Effects",
                  "5 Weeks Delivery",
                  "Dedicated Project Manager",
                  "100% Ownership Rights",
                  "100% Satisfaction Guarantee",
                  "*NO MONTHLY OR ANY HIDDEN FEE*",
                ]}/>
                <PricingItem title={"Platinum Animator"} price={1499} active={false} list={[
                  "90 Second Video",
                  "Professional Script",
                  "Sample Theme",
                  "Storyboard",
                  "Animation",
                  "Voice-Over & Sound Effects",
                  "6 Weeks Delivery",
                  "Dedicated Project Manager",
                  "100% Ownership Rights",
                  "100% Satisfaction Guarantee",
                  "*NO MONTHLY OR ANY HIDDEN FEE*",
                ]}/>
              </div>
            </div>
            <div
            className="tab-pane"
            id="seo"
            role="tabpanel"
            aria-labelledby="seo-tab"
          >
            <div className="row g-0 align-items-center justify-content-center">
              <PricingItem title={"Basic SEO Package"} price={499} active={false} list={[
                "Keyword Research and Analysis",
                "On-Page Optimization (Title Tags, Meta Descriptions, Heading Tags)",
                "10 Keywords Optimization",
                "4 Keywords in the Top 10",
                "Content Optimization",
                "XML Sitemap Creation and Submission",
                "Google Search Console Creation",
                "Google Analytics Setup",
                "Monthly SEO Performance Reports",
                "Email Support",
                "Basic Link Building",
              ]}/>
              <PricingItem title={"Standard SEO Package"} price={799} active={false} list={[
                "Everything in the Basic Package",
                "25 Keywords Optimization",
                "10 Keywords in the Top 10",
                "SEO for up to 10 Pages",
                "Competitor Analysis",
                "Off-Page Optimization (Backlink Building)",
                "Local SEO Optimization",
                "Monthly Ranking Reports",
                "Phone and Email Support",
                "Intermediate Link Building",
              ]}/>
              <PricingItem title={"Advanced SEO Package"} price={1499} active={true} list={[
                "Everything in the Standard Package",
                "50 Keywords Optimization",
                "SEO for up to 20 Pages",
                "20 Keywords in the Top 10",
                "Comprehensive Technical SEO Audit",
                "Advanced Backlink Building and Outreach",
                "Content Creation and Blog Posting (12 Blog Posts per Month)",
                "Social Media Integration for SEO",
                "Bi-Weekly Ranking Reports",
                "Priority Phone, Email, and Chat Support",
                "Dedicated Account Manager",
              ]}/>
              <PricingItem title={"Elite SEO Package"} price={3499} active={false} list={[
                "On-page Optimization (one-time)",
                "Keyword research",
                "Integration of Meta descriptions and Meta titles in the source code of your website",
                "Integration of SEO optimized (keyword-rich) content on the site",
                "Updating your Google My Business account",
                "Google Maps ranking",
                "HTML optimization",
                "Addition of Call to Actions (CTAs) on the website to increase prospect conversion",
                "Goal setup on Google Analytics",
                "Integration of HTML and XML sitemaps",
                "Decrease of website load time",
                "Optimizing the website for several devices (Phones, Tablets, and PCs)",
                "Off-Page Optimization (monthly iteration)",
                "50 High-quality backlinks",
                "10 Business listings",
                "10 Classifieds",
                "8 on-site blogs",
                "1 infographic shared on several platforms, including your website and social media platforms",
                "2 High-quality press releases (posted on high-quality platforms)",
                "10 social media postings on each platform (Facebook, Instagram, and Twitter)",
                "Paid Facebook ads worth a budget of $300/month",
                "10 High-authority domain submissions",
                "Third-party blogging",
                "Monthly detailed reporting",
              ]}/>
            </div>
          </div>

          <div
            className="tab-pane"
            id="commerce-website"
            role="tabpanel"
            aria-labelledby="commerce-website-tab"
          >
            <div className="row g-0 align-items-center justify-content-center">
              <PricingItem title={"E-Commerce Start-Up Package"} price={699} active={false} list={[
                "E-Commerce Website Design and Development",
                "5 Banner Designs",
                "Customized Theme Based Design",
                "Up-to 50 Products",
                "Up-to 5 Categories",
                "Multiple Revisions",
                "Content Management System (CMS)",
                "Mini Shopping Cart Integration",
                "Payment Module Integration",
                "Easy Product Search",
                "Dedicated Designer & Developer",
                "Unlimited Revisions",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
              ]}/>
              <PricingItem title={"E-commerce Professional Package"} price={1599} active={true} list={[
                "E-commerce Website Design and Development",
                "Customized Theme Based Design",
                "7 Banner Designs",
                "Sliding Banner",
                "7 Stock Photos",
                "Unlimited Revisions",
                "Hover Effects",
                "Up to 100 Products",
                "Up to 10 Categories",
                "Content/Inventory Management System",
                "Mobile Responsive",
                "Easy Product Search Bar",
                "Shopping Cart Integration",
                "Payment Module Integration",
                "Direct Checkout",
                "Sign up Checkout",
                "Wish List",
                "Social Media Pages Integration",
                "Sitemap",
                "Complete W3C Validation",
                "Dedicated Team of Designers and Developers",
                "Complete Deployment",
                "Complete Source Files",
                "Dedicated Project Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "*NO MONTHLY OR ANY HIDDEN FEE*",
              ]}/>
              <PricingItem title={"E-commerce Elite Package"} price={1999} active={false} list={[
                "E-commerce Website Design and Development",
                "Customized Tailor-Made Design",
                "Professional, Modern, Unique Design",
                "10 Banner Designs",
                "Sliding Banner",
                "10 Stock Photos",
                "Unlimited Revisions",
                "Special Hover Effects",
                "Up to 500 Products",
                "Unique Banner Slider",
                "Up to 25 Categories",
                "Product Reviews & Ratings",
                "Content/Inventory Management System",
                "Mobile Responsive",
                "Easy Product Search Bar",
                "Shopping Cart Integration",
                "Payment Module Integration",
                "Direct Checkout",
                "Sign up Checkout",
                "Wish List",
                "Social Media Pages Integration",
                "Blog Page (If Required)",
                "Sitemap",
                "Complete W3C Validation",
                "Dedicated Team of Designers and Developers",
                "Complete Deployment",
                "Complete Source Files",
                "Dedicated Project Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "*NO MONTHLY OR ANY HIDDEN FEE*",
              ]}/>

            </div>

          </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default PricingArea;
