import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Car, ShoppingBag, Utensils, CreditCard } from "lucide-react"

const ServicesPage = () => {
  const services = [
    {
      icon: <Car className="w-10 h-10 text-green-600" />,
      title: "GrabRide",
      desc: "Transportasi cepat dan aman dengan driver profesional yang siap mengantar Anda ke tujuan.",
    },
    {
      icon: <Utensils className="w-10 h-10 text-green-600" />,
      title: "GrabFood",
      desc: "Nikmati berbagai kuliner favorit Anda dengan layanan pengantaran cepat langsung ke pintu rumah.",
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-green-600" />,
      title: "GrabMart",
      desc: "Belanja kebutuhan harian dengan mudah tanpa perlu keluar rumah. Cepat, aman, dan praktis.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-green-600" />,
      title: "GrabPay",
      desc: "Solusi pembayaran digital yang memudahkan transaksi di berbagai layanan Grab dan merchant lain.",
    },
  ]

  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Our <span className="text-green-600">Services</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 text-center p-6"
            >
              <CardHeader className="flex flex-col items-center justify-center gap-4">
                {item.icon}
                <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
