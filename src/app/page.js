import BestWorkation from "@/widgets/BestWorkation";
import CustomiseWorkation from "@/widgets/CustomiseWorkation";
import HomeBanner from "@/widgets/HomeBanner";
import OurStory from "@/widgets/OurStory";
import WhyWorkation from "@/widgets/WhyWorkation";

export default function Home() {
  return (
    <>
    <HomeBanner/>
    <WhyWorkation/>
    <CustomiseWorkation />
    <BestWorkation />
    <OurStory/>
    </>
  );
}
