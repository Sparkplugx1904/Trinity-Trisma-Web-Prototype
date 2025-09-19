import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  Github,
  ExternalLink
} from "lucide-react"

export default function KontakPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Kontak Trinity Club
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Kami siap menjawab pertanyaan dan menerima masukan dari kamu
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  Hubungi kami melalui email untuk pertanyaan formal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">trinity@sman3denpasar.sch.id</p>
                  <p className="text-sm text-muted-foreground">
                    Respon dalam 1-2 hari kerja
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Telepon</CardTitle>
                <CardDescription>
                  Hubungi kami untuk informasi cepat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">+62 812-3456-7890</p>
                  <p className="text-sm text-muted-foreground">
                    Senin - Jumat, 14:00 - 16:00
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Alamat</CardTitle>
                <CardDescription>
                  Kunjungi sekolah kami untuk bertemu langsung
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">SMA Negeri 3 Denpasar</p>
                  <p className="text-sm text-muted-foreground">
                    Jl. Kamboja No.11, Denpasar Utara
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Kota Denpasar, Bali 80239
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Ikuti Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Sosial</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ikuti akun media sosial kami untuk update terkini kegiatan dan informasi Trinity Club
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Instagram</CardTitle>
                <CardDescription>@trinityclub_sman3</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white group-hover:border-transparent transition-all"
                  asChild
                >
                  <a 
                    href="https://instagram.com/trinityclub_sman3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Kunjungi
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Facebook</CardTitle>
                <CardDescription>Trinity Club SMAN3</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-transparent transition-all"
                  asChild
                >
                  <a 
                    href="https://facebook.com/trinityclub.sman3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Kunjungi
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Twitter className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Twitter</CardTitle>
                <CardDescription>@TrinityClub_DPS</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-sky-500 group-hover:text-white group-hover:border-transparent transition-all"
                  asChild
                >
                  <a 
                    href="https://twitter.com/TrinityClub_DPS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Kunjungi
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">GitHub</CardTitle>
                <CardDescription>trinity-club-sman3</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-gray-800 group-hover:text-white group-hover:border-transparent transition-all"
                  asChild
                >
                  <a 
                    href="https://github.com/trinity-club-sman3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Kunjungi
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Jam Operasional</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Waktu Aktivitas Club</h2>
              <p className="text-lg text-muted-foreground">
                Ketahui jadwal rutin kegiatan Trinity Club
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Jadwal Rutin</CardTitle>
                <CardDescription>
                  Jadwal kegiatan rutin Trinity Club setiap minggunya
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">Senin</p>
                        <p className="text-sm text-muted-foreground">Programming Class</p>
                      </div>
                      <Badge variant="secondary">15:00 - 17:00</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">Selasa</p>
                        <p className="text-sm text-muted-foreground">Workshop & Training</p>
                      </div>
                      <Badge variant="secondary">15:00 - 17:00</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">Rabu</p>
                        <p className="text-sm text-muted-foreground">Project Development</p>
                      </div>
                      <Badge variant="secondary">15:00 - 17:00</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">Kamis</p>
                        <p className="text-sm text-muted-foreground">Competition Prep</p>
                      </div>
                      <Badge variant="secondary">15:00 - 17:00</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">Jumat</p>
                        <p className="text-sm text-muted-foreground">Community Meeting</p>
                      </div>
                      <Badge variant="secondary">15:00 - 17:00</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">Sabtu</p>
                        <p className="text-sm text-muted-foreground">Special Events</p>
                      </div>
                      <Badge variant="outline">Sesuai Jadwal</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mau Bergabung?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kami membuka pendaftaran anggota baru setiap awal semester. Hubungi kami untuk informasi lebih lanjut!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Email Kami
              </Button>
            </div>
            
            <div className="mt-8 p-6 bg-card border rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Catatan:</strong> Untuk pendaftaran anggota baru, silakan datang langsung ke ruang IT atau hubungi kontak yang tersedia. 
                Kami akan mengadakan sesi perkenalan dan wawancara singkat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}