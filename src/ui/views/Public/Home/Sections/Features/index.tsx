import logo1 from "./../../../../../../assets/Home/feature-1.svg";
import logo2 from "./../../../../../../assets/Home/feature-2.svg";
import logo3 from "./../../../../../../assets/Home/feature-3.svg";
import featureStepLogo1 from "./../../../../../../assets/Home/feature-step-logo-1.svg";
import featureStepLogo2 from "./../../../../../../assets/Home/feature-step-logo-2.svg";
import featureStepLogo3 from "./../../../../../../assets/Home/feature-step-logo-3.svg";
import featureStepImage1 from "./../../../../../../assets/Home/feature-step-1.png";
import featureStepImage2 from "./../../../../../../assets/Home/feature-step-2.png";
import featureStepImage3 from "./../../../../../../assets/Home/feature-step-3.png";
import validateCheck from "./../../../../../../assets/Home/valide-check.svg";

const Features = () => {
  const features = [
    {
      logo: logo1,
      title: "Privacy",
      description:
        "Self-hosting provides you with complete control over your data and ensure maximum privacy.",
    },
    {
      logo: logo2,
      title: "Automatisation",
      description:
        "Automating invoice management revolutionizes business operations by providing accelerated processes and flawless accuracy.",
    },
    {
      logo: logo3,
      title: "Simple invoicing",
      description:
        "Effortless billing made possible with a simple, user-friendly interface that maximizes efficiency and delivers a seamless experience.",
    },
  ];

  const featuresStep = [
    {
      primaryLogo: featureStepLogo1,
      image: featureStepImage1,
      title: "Streamlined invoice creation and management",
      description:
        "Easily create and send professional electronic invoices. Manage customer and supplier information, customize invoice templates, and generate quotes and purchase orders with just a few clicks. Save valuable time while maintaining a professional image with your clients.",
      options: [
        "Quick and easy creation of professional electronic invoices.",
        "Seamless communication with your customers.",
        "Customization of invoice templates to reflect your brand.",
      ],
      position: "left",
    },
    {
      primaryLogo: featureStepLogo2,
      image: featureStepImage2,
      title: "Real-time tracking and financial management",
      description:
        "Maintain complete visibility over payments and payment delays with advanced tracking features. Automate payment reminders to avoid delays and optimize your cash flow. Generate detailed financial reports and statistics to make informed decisions and track your business's progress.",
      options: [
        "Real-time tracking of payments and invoice status.",
        "Monitoring deadlines and sending reminders.",
        "Detailed financial reports for accurate financial analysis.",
      ],
      position: "right",
    },
    {
      primaryLogo: featureStepLogo3,
      image: featureStepImage3,
      title: "Integration and data security for enhanced efficiency",
      description:
        "Seamlessly integrate our invoice management system with your existing workflows and tools. Ensure the security and confidentiality of your data with robust encryption and secure storage. Access your invoices and financial information anytime, anywhere, and enjoy peace of mind knowing that your sensitive data is protected.",
      options: [
        "Seamless integration with your existing tools and systems.",
        "Data security ensured through secure storage.",
        "Convenient access to your invoices from anywhere.",
      ],
      position: "left",
    },
  ];

  return (
    <section className="h-fit w-full bg-white py-24">
      <div className="w-full py-20 bg-violet-950 text-white">
        <div className="container mx-auto flex items-center gap-12">
          {features.map((feature) => {
            return (
              <div className="flex flex-col items-center gap-5 text-center ">
                <img
                  src={feature.logo}
                  alt={"logo-" + feature.title}
                  className="w-16"
                />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-xs w-[80%]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center py-24 text-center gap-5">
        <p className="text-violet-950 text-lg">Features</p>
        <h2 className="text-4xl font-medium">Boost Efficiency and Control</h2>
        <p className="text-gray-800 font-light w-[40%]">
          Automate invoicing, gain real-time insights, and generate detailed
          reports, empowering you to save time, enhance financial control, and
          drive business growth.
        </p>
      </div>
      <div className="flex flex-col mt-16 gap-6 w-full">
        {featuresStep.map((featureStep) => {
          return (
            <>
              <div
                className={`flex  ${
                  featureStep.position === "left"
                    ? "flex-row"
                    : "flex-row-reverse"
                } `}
              >
                <div className="flex  flex-col px-24 py-24 justify-between">
                  <img
                    src={featureStep.primaryLogo}
                    alt="logo-feature"
                    className="w-10"
                  />
                  <h3 className="text-2xl font-semibold">
                    {featureStep.title}
                  </h3>
                  <p className="font-light leading-5">
                    {featureStep.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {featureStep.options.map((option) => {
                      return (
                        <p className="flex gap-2 text-sm items-center">
                          <img
                            src={validateCheck}
                            alt="check_ok"
                            className="w-8"
                          />
                          {option}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <img
                  src={featureStep.image}
                  alt="feature image"
                  className="rounded-lg"
                />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
