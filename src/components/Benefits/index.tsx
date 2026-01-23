import { SelectedPage } from "@/types/enums";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../HText";
import type { BenefitType } from "@/types/types";
import Benefit from "./Benefit";
import ActionButton from "../ActionButton/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className=""
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide a wide range of benefits for our members, including
            access to state-of-the-art equipment, personalized training plans,
            and a supportive community of fitness enthusiasts.{" "}
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => {
            return (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* DESCRIPTION */}
          <div>
            {/*TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500"> FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/*DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quis vero, dolore hic ex nam alias cum! Expedita amet sed
                debitis sint numquam recusandae porro. Possimus magni doloremque
                assumenda aut.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque quisquam distinctio quis totam ab quam laborum
                aspernatur illum quos, quia, beatae asperiores! Molestiae,
                aliquid quod alias ad ex laboriosam quo?
              </p>
            </motion.div>

            {/*BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
