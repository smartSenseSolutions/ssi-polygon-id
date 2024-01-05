import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CredCard } from "./CredInfoCard";
import EmploymentSVG from "../assets/employment.svg";
import MedicalSVG from "../assets/Medical.svg";
import InsuranceSVG from "../assets/insurance.svg";
import IDCardPNG from "../assets/card.png";
import LabReportPNG from "../assets/patient.png";
import EmployeeProofPNG from "../assets/headhunting.png";
import { SendEmploymentVC, SendLabVC } from "../lib/api";
export const Home = () => {
  const nav = useNavigate();

  useEffect(() => {
    const onboard = localStorage.getItem("onboard");
    console.log(onboard);
    if (onboard != "true") {
      nav("/onboarding");
    }
  }, []);
  const sendVCs = async () => {
    const userId = localStorage.getItem("userId") as string;
    const data = await SendEmploymentVC(userId);
    const data2 = await SendLabVC(userId);
    console.log(data, data2);
  };
  return (
    <div className="bg-[#3A3B3B] h-[100vh] w-[100vw] py-[10px]">
      <header>
        <div className="mx-auto max-w-screen-xl py-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div
              className="text-center sm:text-left cursor-pointer"
              onClick={() => {
                nav("/");
                sendVCs();
              }}
            >
              <img
                src="public/images/smartsense-white.png"
                className="h-[70px] w-auto"
              ></img>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col mx-[240px] mt-[12px] px-12 py-6 bg-[#212223] text-white rounded-lg shadow-sm ">
        <h1
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{ opacity: 1, transform: "none" }}
        >
          What's next?
        </h1>
        <p className="hidden lg:block font-semibold  mb-4 text-blue-400">
          Below are the use cases you can explore with your digital credentials.
        </p>
        <div className="mx-[40px] flex flex-col ">
          <CredCard
            title={"Get your Employment Proof"}
            icon={EmploymentSVG}
            content="Secure your employment proof effortlessly – enroll in the verifiable credentials process today for a seamless career validation. Let your professional achievements shine with a simplified and trustworthy employment verification."
            shareableItems={[
              {
                icon: IDCardPNG,
                text: "National ID Card",
              },
            ]}
            nav={() => {
              nav("/employment");
            }}
          />
          <CredCard
            title={"Get your Health Report"}
            icon={MedicalSVG}
            content="Acquire your Lab Report Verifiable Credentials effortlessly – streamline the process of sharing and verifying your medical information. Enhance trust and transparency in healthcare by utilizing this secure and efficient method for showcasing your lab reports."
            shareableItems={[
              {
                icon: IDCardPNG,
                text: "National ID Card",
              },
            ]}
            nav={() => {
              nav("/lab");
            }}
          />

          <CredCard
            title={"Get your Term Insurance"}
            icon={InsuranceSVG}
            content="
        Obtain your Term Insurance Verifiable Credential seamlessly – simplify the verification process for your insurance coverage. Securely access and share your term insurance details, enhancing trust and efficiency in managing your insurance documentation."
            shareableItems={[
              {
                icon: LabReportPNG,
                text: "Health Report",
              },
              {
                icon: EmployeeProofPNG,
                text: "Employment Proof",
              },
            ]}
            nav={() => {
              nav("/insurance");
            }}
          />
        </div>
      </div>
    </div>
  );
};
