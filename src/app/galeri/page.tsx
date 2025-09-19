import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ZoomIn, Calendar, Users, Trophy } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    title: "Workshop Python Programming",
    date: "15 Januari 2024",
    category: "Workshop",
    description: "Workshop pemrograman Python untuk pemula",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "Competition Training 2024",
    date: "20 Februari 2024",
    category: "Competition",
    description: "Pelatihan persiapan kompetisi IT tingkat provinsi",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "Project Showcase",
    date: "10 Maret 2024",
    category: "Project",
    description: "Pameran project hasil karya anggota Trinity Club",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "Networking Basics Workshop",
    date: "25 Maret 2024",
    category: "Workshop",
    description: "Workshop dasar-dasar jaringan komputer",
    image: "/api/placeholder/400/300"
  },
  {
    id: 5,
    title: "Tech Talk: AI & Machine Learning",
    date: "5 April 2024",
    category: "Seminar",
    description: "Seminar teknologi AI dan Machine Learning",
    image: "/api/placeholder/400/300"
  },
  {
    id: 6,
    title: "Competition Award Ceremony",
    date: "20 April 2024",
    category: "Achievement",
    description: "Penghargaan prestasi kompetisi IT",
    image: "/api/placeholder/400/300"
  },
  {
    id: 7,
    title: "Web Development Bootcamp",
    date: "1 Mei 2024",
    category: "Workshop",
    description: "Bootcamp pengembangan web modern",
    image: "/api/placeholder/400/300"
  },
  {
    id: 8,
    title: "Community Service",
    date: "15 Mei 2024",
    category: "Community",
    description: "Kegiatan pengabdian masyarakat",
    image: "/api/placeholder/400/300"
  },
  {
    id: 9,
    title: "Hackathon 2024",
    date: "1 Juni 2024",
    category: "Competition",
    description: "Hackathon internal Trinity Club",
    image: "/api/placeholder/400/300"
  }
]

export default function GaleriPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Galeri Kegiatan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Dokumentasi Kegiatan Trinity Club
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Kumpulan foto dan dokumentasi berbagai kegiatan yang telah kami selenggarakan
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Kegiatan</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Peserta</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-muted-foreground">Prestasi</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ZoomIn className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-muted-foreground">Foto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Koleksi Foto</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai momen berharga selama kegiatan Trinity Club
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                              <ZoomIn className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-sm text-muted-foreground">Image Placeholder</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ZoomIn className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-muted-foreground">Image Preview</p>
                        <p className="text-sm text-muted-foreground mt-2">{item.title}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="secondary">{item.category}</Badge>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold mb-2">Kegiatan Terkait</h4>
                        <p className="text-sm text-muted-foreground">
                          Kegiatan ini merupakan bagian dari program pengembangan kemampuan teknis anggota Trinity Club dalam bidang teknologi informasi.
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ingin Bergabung?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Jadilah bagian dari Trinity Club dan raih pengalaman berharga di bidang teknologi informasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontak"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Hubungi Kami
              </a>
              <a
                href="/tentang"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}