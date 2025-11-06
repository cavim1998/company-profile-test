import { HeroSection } from "@/components/home/HeroSection"
import { OverviewSection } from "@/components/home/OverviewSection"
import { ServicesPreview } from "@/components/home/ServicesPreview"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <ServicesPreview />
      <TestimonialsSection />
    </div>
  )
}

export default HomePage