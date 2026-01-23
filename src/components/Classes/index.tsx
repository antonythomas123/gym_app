import { SelectedPage } from "@/types/enums";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "../HText";
import type { ClassType } from "@/types/types";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and muscle with our comprehensive weight training classes suitable for all levels.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Improve flexibility and mindfulness with our expert-led yoga sessions.",
    image: image2,
  },
  {
    name: "Cardio Classes",
    description:
      "Boost your heart rate and burn calories with our high-energy cardio workouts.",
    image: image3,
  },
  {
    name: "Pilates Classes",
    description:
      "Enhance core strength and posture through our precision Pilates routines.",
    image: image4,
  },
  {
    name: "Zumba Classes",
    description:
      "Dance your way to fitness with our fun and energetic Zumba classes.",
    image: image5,
  },
  {
    name: "CrossFit Classes",
    description:
      "Challenge yourself with high-intensity CrossFit workouts designed for all fitness levels.",
    image: image6,
  },
];
const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Explore our diverse range of classes designed to meet your fitness
              goals. From high-intensity workouts to relaxing yoga sessions, we
              have something for everyone.{" "}
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item?.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
