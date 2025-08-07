import FeaturedDestinations from "@/widgets/FeaturedDestinations";
import HomeBanner from "@/widgets/HomeBanner";
import HandpickedTrips from "@/widgets/HandpickedTrips";
import CustomiseWorkation from "@/widgets/CustomiseWorkation";
import CTASection from "@/widgets/CTASection";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HomeBanner />
   <FeaturedDestinations />
   <HandpickedTrips />
   <CustomiseWorkation />
   <CTASection />
   </>
  );
}
