import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Trophy, Zap, Calendar, Target, BookOpen, Lightbulb } from "lucide-react"

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Tentang Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Trinity Club Informatika
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Club Informatika resmi di bawah naungan SMA Negeri 3 Denpasar yang berdedikasi untuk mengembangkan bakat dan minat siswa di bidang teknologi informasi.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi wadah pengembangan bakat dan minat di bidang teknologi informasi yang unggul, inovatif, dan berkontribusi dalam kemajuan pendidikan teknologi di SMA Negeri 3 Denpasar.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Menyelenggarakan pembelajaran programming dan teknologi informasi yang berkualitas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Mengikuti berbagai kompetisi IT tingkat kota, provinsi, dan nasional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Membangun komunitas IT yang solid dan kolaboratif di lingkungan sekolah</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Mengembangkan project nyata yang bermanfaat untuk sekolah dan masyarakat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divisi */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Divisi Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Struktur Organisasi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trinity Club memiliki beberapa divisi yang fokus pada bidang masing-masing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Programming Division</CardTitle>
                <CardDescription>
                  Fokus pada pengembangan kemampuan pemrograman berbagai bahasa dan framework
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Networking Division</CardTitle>
                <CardDescription>
                  Mempelajari konsep jaringan komputer, keamanan siber, dan administrasi sistem
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Competition Division</CardTitle>
                <CardDescription>
                  Menyiapkan anggota untuk berbagai kompetisi IT dan olimpiade komputer
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Workshop Division</CardTitle>
                <CardDescription>
                  Mengorganisir workshop dan pelatihan dengan topik-topik terkini di bidang IT
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Event Division</CardTitle>
                <CardDescription>
                  Mengelola dan mengorganisir berbagai event dan kegiatan club
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Innovation Division</CardTitle>
                <CardDescription>
                  Mengembangkan inovasi dan project kreatif di bidang teknologi
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Kegiatan */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Kegiatan Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa yang Kami Lakukan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai kegiatan rutin dan project yang kami jalankan setiap tahunnya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Rutin Programming Class</h3>
                  <p className="text-muted-foreground">Kelas pemrograman reguler setiap minggu dengan berbagai bahasa pemrograman</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Competition Training</h3>
                  <p className="text-muted-foreground">Pelatihan khusus untuk persiapan mengikuti berbagai kompetisi IT</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tech Workshop</h3>
                  <p className="text-muted-foreground">Workshop teknologi dengan pembicara internal dan eksternal</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Project Development</h3>
                  <p className="text-muted-foreground">Pengembangan project nyata untuk mengasah kemampuan teknis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community Service</h3>
                  <p className="text-muted-foreground">Kegiatan pengabdian masyarakat dengan penerapan teknologi</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovation Lab</h3>
                  <p className="text-muted-foreground">Laboratorium inovasi untuk mengembangkan ide-ide kreatif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}