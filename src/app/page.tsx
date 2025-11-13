"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Heart, Utensils, Trophy, Users, ChefHat, Medal, Globe, Sparkles, Calendar, Phone } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/gd2b706e86f6e910b13ed52666ee5f3b41e8fec950eca1b7de3452536d2e803679a033b6239dc2e5b038fdca8c5c6cf7ba67b8bcc9cdbae22f174e0b4b910d6d2_1280.jpg"
          logoAlt="Memorial Sushi Sports logo"
          brandName="Memorial Sushi Sports"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Honoring Lives Through Culinary Art"
          description="We create meaningful memorial experiences combining traditional sushi craftsmanship with sports tributes, celebrating the passions that defined your loved ones."
          tag="Memorial Dining"
          tagIcon={Heart}
          buttons={[
            {
              text: "Plan Memorial",
              href: "contact"
            },
            {
              text: "View Services",
              href: "about"
            }
          ]}
          imageSrc="https://pixabay.com/get/gc8aae01a9d2a4cb7599ce2fbcf4f120a9a0fa8538cfbed574a49666ca1e1e16a5b9f68636f18791f31bbe92632dd65a2fb3c8c3819b31daf7d49485f547af293_1280.jpg"
          imageAlt="Elegant sushi memorial arrangement with sports memorabilia"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We understand that every life tells a unique story. Our mission is to honor those stories through thoughtfully crafted culinary memorials that celebrate both tradition and personal passions."
          features={[
            {
              icon: Utensils,
              title: "Artisan Sushi Craft",
              description: "Master chefs create beautiful sushi arrangements using traditional techniques passed down through generations, ensuring every piece honors your loved one."
            },
            {
              icon: Trophy,
              title: "Sports Memorabilia Integration",
              description: "We seamlessly incorporate sports themes and memorabilia into our presentations, celebrating athletic achievements and sporting passions."
            },
            {
              icon: Heart,
              title: "Compassionate Service",
              description: "Our dedicated team provides gentle, understanding support during difficult times, helping families create meaningful memorial experiences."
            },
            {
              icon: Users,
              title: "Family Focused",
              description: "Every memorial dining experience is designed to bring families together, sharing stories and celebrating the life of their loved one."
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Memorial Services"
          description="Comprehensive memorial dining experiences tailored to honor your loved one's memory and bring comfort to families during difficult times."
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Custom Sushi Arrangements",
              description: "Personalized sushi platters designed to reflect your loved one's favorite flavors, colors, and presentation styles, created with the finest ingredients and artistic attention to detail.",
              icon: ChefHat
            },
            {
              title: "Sports Memorial Themes",
              description: "Specialized arrangements incorporating sports memorabilia, team colors, and athletic achievements to celebrate the sporting passions that brought joy to their life.",
              icon: Medal
            },
            {
              title: "Memorial Catering",
              description: "Full-service catering for memorial gatherings, providing elegant dining experiences that allow families to focus on remembrance while we handle every culinary detail.",
              icon: Globe
            },
            {
              title: "Celebration of Life Events",
              description: "Complete event planning and execution for celebration of life gatherings, combining memorial dining with meaningful ceremonies and tribute presentations.",
              icon: Sparkles
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Memorial Dining Packages"
          description="Choose from our carefully crafted memorial dining packages, each designed to honor your loved one with dignity and culinary artistry."
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              name: "Memorial Sushi Tribute",
              price: "$299",
              imageSrc: "https://pixabay.com/get/g22a2021e74b5ddb42ea3866165fdc88ffaeefd6a5ba3b97ab57dd66fb08fdaba4f251cf83cceaa45a10b55068198a6c87b74598d538857e6b100d5c50b3a99fc_1280.jpg",
              imageAlt: "Elegant memorial sushi arrangement"
            },
            {
              id: "2",
              name: "Sports Legend Combo",
              price: "$399",
              imageSrc: "https://pixabay.com/get/ga222bb5e2ec63fef8c5213598a29e305147c61d8d7c0df4c4eaab2e5dd72b3fcf408199409501c5cf9dc17936829ef7b7fbcb5a37325a29bad6b1366bef4988f_1280.jpg",
              imageAlt: "Sports themed sushi with memorabilia"
            },
            {
              id: "3",
              name: "Celebration of Life Set",
              price: "$499",
              imageSrc: "https://pixabay.com/get/gf5a3f145456986f5a4f04ceb6d8564c80e8a21c9f0604967541137797eae8999bb013a3dad25a80c5ec74a7f1edd27fdbf8a40f028dbec5148cd5ffdad856f69_1280.jpg",
              imageAlt: "Complete celebration dining set"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Memorial Service Plans"
          description="Compassionate pricing for memorial dining experiences that honor your loved one while providing comfort to your family."
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "intimate",
              name: "Intimate Memorial",
              price: "$299",
              buttons: [
                {
                  text: "Select Plan",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Serves 6-8 people",
                "Custom sushi arrangement",
                "Memorial presentation",
                "Basic sports theme option"
              ]
            },
            {
              id: "family",
              badge: "Most Popular",
              badgeIcon: Heart,
              name: "Family Gathering",
              price: "$499",
              buttons: [
                {
                  text: "Select Plan",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Serves 12-15 people",
                "Premium sushi selection",
                "Sports memorabilia integration",
                "Professional service staff",
                "Memorial keepsake included"
              ]
            },
            {
              id: "celebration",
              name: "Celebration of Life",
              price: "$799",
              buttons: [
                {
                  text: "Select Plan",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Serves 20-25 people",
                "Full catering service",
                "Custom memorial displays",
                "Event coordination",
                "Photography documentation",
                "Memorial video tribute"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Celebrating Lives Together"
          description="Our commitment to honoring memories through culinary artistry has touched hundreds of families across the community."
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "Families",
              description: "Served with compassionate memorial dining experiences",
              icon: Heart
            },
            {
              id: "2",
              value: "15",
              title: "Years",
              description: "Combining traditional sushi artistry with memorial services",
              icon: Calendar
            },
            {
              id: "3",
              value: "50+",
              title: "Sports",
              description: "Different sports themes incorporated into memorial tributes",
              icon: Trophy
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Families We've Honored"
          description="The privilege of serving families during their most difficult times inspires us to provide compassionate, meaningful memorial experiences."
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Grateful Daughter",
              testimonial: "The memorial sushi arrangement for my father was absolutely beautiful. They perfectly captured his love for baseball and fine dining. It brought our family so much comfort during a difficult time.",
              imageSrc: "https://pixabay.com/get/g2f0b0bb4205ade6a412ff63bca6785c57c90e758e1ccba1ec2ffa62082fa9b228c7ee3d67be2ddedce38a55c65c26b6197b876e708fa36014c0fe246a10b03ab_1280.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Loving Husband",
              testimonial: "When we lost my wife, who was both a chef and tennis champion, this team created something magical. The sports-themed sushi tribute honored both her passions beautifully.",
              imageSrc: "https://pixabay.com/get/g2b1aabf7f12bbc235545657f1b3910f4aa6a9c4f91973d0a3e3e8fdf45b822ad32e1a51bddfe8f1f6274f90d495db9af5ab58fbff429ca13da9fb4874196197d_1280.jpg",
              imageAlt: "Michael Rodriguez portrait"
            },
            {
              id: "3",
              name: "Lisa Chen",
              role: "Family Organizer",
              testimonial: "The celebration of life catering service exceeded our expectations. Every detail was handled with such care and professionalism. Our grandfather would have been so proud.",
              imageSrc: "https://pixabay.com/get/g947320fe333698e79eff0125264082c005cdb55560da997963714ac3d289d0b6fbdb6cd5cf68880b36775a1c761d83263307bfef9d00e6b61e3bfb714f6e6e4c_1280.jpg",
              imageAlt: "Lisa Chen portrait"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Memorial Coordinator",
              testimonial: "As a funeral director, I've worked with many catering services. Their combination of culinary artistry and sensitive service is unmatched. Families always feel truly cared for.",
              imageSrc: "https://pixabay.com/get/ge90b4186b0fbef6c08412132afa75e867953211d72b7f2c49cacac424e06c7ffc89079d1976ccfa0bee64352a0e3603f9da3cbd3840362aec863daa4b864066a_1280.jpg",
              imageAlt: "David Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Partners"
          description="We collaborate with leading companies and organizations to provide comprehensive memorial services and honor life celebrations."
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g50fe754bd102c4f71126eb097bf569b16a1a1ce6831feeb22ab46758d181953f209fc1af0476f722e2c610a43c336376059b8b7c39d722bd38b66d5236eb5453_1280.jpg",
            "https://pixabay.com/get/g2713250d61d6a61f87a238eda1df8f2d7fcdfc35ce5ba6396920147e48a13dd68c8d5e72413e563f87eeea9fb6bd918ea1f73ac66b54b0ac828c91d9f944ed11_1280.jpg",
            "https://pixabay.com/get/g1a133a2495d4dfdd261796834fcf1fa51a009cd4beaa7e42708b32d479816bdc41b780649faed94e423d5569f72354ee03dc701b725adba3803995bf871d6f9d_1280.jpg",
            "https://pixabay.com/get/g7ee0da3593b80789a352db1c2908a9e8f6fb1456d2bb19864fb808b1864e0e24389af731919de9b11b3469efdc3aa4bb39cf0daa621a2e2637df9585ea496eb1_1280.jpg",
            "https://pixabay.com/get/ge2856b4f4b8d4ecf42914a2429ef56efc7594806b8bba5f3d9c084a3cf965d42b32661b751d0a5d3cb026b7c2883d14e_1280.jpg",
            "https://pixabay.com/get/ga88c592e3d6475235f904cd3af9bcd762d919805e19e5e3bd5814806f15b03cb4c772f5149187ada1e060fe81fdc39b57812542fc42f8e82ae02c26ed80a1977_1280.jpg",
            "https://pixabay.com/get/gd35b682f38452903c90474f4ddea9a58212a7f20cd40ec5e10fcf96fc227d903add24fb396cfe8e95885d8f85d7894d009706c023cf1eb9eee4290000a2f29be_1280.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="We understand this is a sensitive time. Here are answers to common questions about our memorial dining services."
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How far in advance should we book memorial services?",
              content: "We recommend booking 3-5 days in advance when possible, but we understand that memorial arrangements often need to be made quickly. We maintain flexible scheduling and emergency availability to accommodate urgent needs."
            },
            {
              id: "2",
              title: "Can you accommodate dietary restrictions and allergies?",
              content: "Absolutely. We work carefully with families to ensure all dietary needs are met, including vegetarian, vegan, gluten-free, and allergy-specific requirements. Our chefs are experienced in adapting traditional sushi to various dietary needs."
            },
            {
              id: "3",
              title: "Do you provide service staff for memorial events?",
              content: "Yes, our family gathering and celebration of life packages include professional service staff trained specifically for memorial events. They provide discreet, compassionate service that allows families to focus on remembrance."
            },
            {
              id: "4",
              title: "How do you incorporate sports themes into memorial dining?",
              content: "We work with families to understand their loved one's sporting interests and integrate team colors, memorabilia, and themed presentations. This can include custom arrangements shaped like sports equipment or displays featuring favorite teams."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Plan a Memorial Service"
          description="Let us help you create a meaningful tribute that celebrates your loved one's life. Contact us to discuss your memorial dining needs with compassion and care."
          tagIcon={Phone}
          inputPlaceholder="Your email address"
          buttonText="Contact Us"
          termsText="We respect your privacy during this difficult time. Your information will be handled with the utmost confidentiality."
          imageSrc="https://pixabay.com/get/gd401000790e096ca309e6f426d10db71ee9bc221402226f19e5e660f6ff8f0d2ee19b7132bcb34fdba661e5cd1c554a7484c3b077fd91d8a2c1443feba8aac37_1280.jpg"
          imageAlt="Peaceful memorial garden setting"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Memorial Dining",
                  href: "about"
                },
                {
                  label: "Sports Tributes",
                  href: "features"
                },
                {
                  label: "Event Catering",
                  href: "products"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Testimonials",
                  href: "testimonials"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Mission",
                  href: "about"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                }
              ]
            }
          ]}
          logoSrc="https://pixabay.com/get/gd2b706e86f6e910b13ed52666ee5f3b41e8fec950eca1b7de3452536d2e803679a033b6239dc2e5b038fdca8c5c6cf7ba67b8bcc9cdbae22f174e0b4b910d6d2_1280.jpg"
          logoAlt="Memorial Sushi Sports logo"
          copyrightText="© 2025 | Memorial Sushi Sports"
        />
      </div>
    </ThemeProvider>
  );
}