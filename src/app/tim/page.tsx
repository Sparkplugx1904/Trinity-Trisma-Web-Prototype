import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Star, 
  GraduationCap,
  Code,
  Zap,
  Trophy,
  Calendar
} from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Budi Santoso, M.Kom",
    role: "Pembina",
    division: "Pembina Club",
    bio: "Dosen tetap di bidang Ilmu Komputer dengan pengalaman lebih dari 15 tahun dalam pendidikan teknologi informasi.",
    achievements: ["Best Lecturer Award 2023", "Pengembang Kurikulum IT", "Peneliti Bidang AI"],
    image: "/api/placeholder/150/150",
    expertise: ["Artificial Intelligence", "Software Engineering", "Database Systems"]
  },
  {
    name: "Ahmad Fauzi, S.T",
    role: "Ketua Club",
    division: "Leadership",
    bio: "Mahasiswa berprestasi dengan passion di bidang programming dan leadership. Memimpin Trinity Club sejak 2023.",
    achievements: ["Juara 1 Hackathon Provincial 2023", "Best Student Leader", "Certified Full Stack Developer"],
    image: "/api/placeholder/150/150",
    expertise: ["Full Stack Development", "Project Management", "Team Leadership"]
  },
  {
    name: "Siti Nurhaliza",
    role: "Wakil Ketua",
    division: "Leadership",
    bio: "Siswa berbakat di bidang networking dan cybersecurity. Aktif dalam berbagai kompetisi IT tingkat nasional.",
    achievements: ["Finalis Olimpiade Komputer 2023", "Certified Network Associate", "Best Presenter"],
    image: "/api/placeholder/150/150",
    expertise: ["Network Security", "Cybersecurity", "Technical Writing"]
  },
  {
    name: "Rizki Pratama",
    role: "Kepala Divisi Programming",
    division: "Programming",
    bio: "Expert di berbagai bahasa pemrograman dan framework modern. Mentor untuk junior members.",
    achievements: ["Google Code-in Finalist", "Multiple Hackathon Winner", "Open Source Contributor"],
    image: "/api/placeholder/150/150",
    expertise: ["Python", "JavaScript", "React", "Node.js", "Machine Learning"]
  },
  {
    name: "Maya Putri",
    role: "Kepala Divisi Networking",
    division: "Networking",
    bio: "Spesialis jaringan komputer dan sistem keamanan. Berpengalaman dalam implementasi infrastruktur IT.",
    achievements: ["Cisco Certified Associate", "Network Security Expert", "IT Infrastructure Architect"],
    image: "/api/placeholder/150/150",
    expertise: ["Network Design", "Security Systems", "Cloud Infrastructure", "System Administration"]
  },
  {
    name: "Dimas Wijaya",
    role: "Kepala Divisi Competition",
    division: "Competition",
    bio: "Strategi kompetisi dengan track record prestasi yang mengesankan di berbagai ajang IT competition.",
    achievements: ["3x National Competition Winner", "Best Problem Solver", "Competition Coach"],
    image: "/api/placeholder/150/150",
    expertise: ["Competition Strategy", "Algorithm Design", "Problem Solving", "Team Coaching"]
  },
  {
    name: "Lestari Handayani",
    role: "Kepala Divisi Workshop",
    division: "Workshop",
    bio: "Organizer berpengalaman dalam mengelola workshop dan pelatihan teknologi untuk berbagai level.",
    achievements: ["Best Event Organizer", "Certified Trainer", "Workshop Series Creator"],
    image: "/api/placeholder/150/150",
    expertise: ["Event Management", "Training Design", "Public Speaking", "Content Creation"]
  },
  {
    name: "Budi Santoso",
    role: "Kepala Divisi Event",
    division: "Event",
    bio: "Kreatif dalam mengkonsep dan mengeksekusi berbagai event IT yang menarik dan bermanfaat.",
    achievements: ["Successful Event Series", "Creative Director Award", "Community Builder"],
    image: "/api/placeholder/150/150",
    expertise: ["Event Planning", "Creative Design", "Community Management", "Marketing"]
  },
  {
    name: "Ani Wijaya",
    role: "Kepala Divisi Innovation",
    division: "Innovation",
    bio: "Inovator dengan passion mengembangkan solusi teknologi kreatif untuk masalah nyata.",
    achievements: ["Innovation Award Winner", "Startup Founder", "Patent Holder"],
    image: "/api/placeholder/150/150",
    expertise: ["Innovation Management", "Product Design", "Startup Development", "Research & Development"]
  }
]

export default function TimPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Tim Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Tim Trinity Club
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Kenali tim solid yang berdedikasi untuk mengembangkan bakat dan minat di bidang teknologi informasi
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">9</div>
              <div className="text-sm text-muted-foreground">Tim Inti</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-muted-foreground">Penghargaan</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm text-muted-foreground">Divisi</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Project</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Anggota Tim</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tim yang terdiri dari pembina dan pengurus yang berdedikasi tinggi
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      {member.role === "Pembina" ? (
                        <GraduationCap className="w-4 h-4 text-primary-foreground" />
                      ) : (
                        <Star className="w-4 h-4 text-primary-foreground" />
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <Badge variant={member.role === "Pembina" ? "default" : "secondary"}>
                      {member.role}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {member.division}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Prestasi
                    </h4>
                    <ul className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                      {member.achievements.length > 2 && (
                        <li className="text-xs text-primary">
                          +{member.achievements.length - 2} lagi
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Keahlian
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.expertise.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{member.expertise.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Struktur Organisasi</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Struktur Kepemimpinan</h2>
              <p className="text-lg text-muted-foreground">
                Struktur organisasi Trinity Club yang mendukung kolaborasi dan pengembangan
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Hierarki Organisasi
                </CardTitle>
                <CardDescription>
                  Struktur organisasi Trinity Club dari tingkat pembina hingga koordinator divisi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Pembina</h4>
                      <p className="text-sm text-muted-foreground">Pembinaan dan pengawasan umum club</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/80 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ketua & Wakil Ketua</h4>
                      <p className="text-sm text-muted-foreground">Koordinasi seluruh kegiatan club</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Kepala Divisi Programming</h4>
                        <p className="text-xs text-muted-foreground">Pengembangan kemampuan programming</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Kepala Divisi Networking</h4>
                        <p className="text-xs text-muted-foreground">Jaringan dan keamanan siber</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Kepala Divisi Competition</h4>
                        <p className="text-xs text-muted-foreground">Persiapan kompetisi</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Kepala Divisi Workshop</h4>
                        <p className="text-xs text-muted-foreground">Pelatihan dan workshop</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Kepala Divisi Event</h4>
                        <p className="text-xs text-muted-foreground">Pengelolaan event</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Kepala Divisi Innovation</h4>
                        <p className="text-xs text-muted-foreground">Inovasi dan project</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ingin Bergabung dengan Tim Kami?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kami selalu mencari talenta baru yang bersemangat di bidang teknologi informasi
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Passionate</h3>
                  <p className="text-sm text-muted-foreground">
                    Memiliki passion dan minat yang kuat di bidang IT
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Team Player</h3>
                  <p className="text-sm text-muted-foreground">
                    Mampu bekerja sama dalam tim dan berkolaborasi
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Innovative</h3>
                  <p className="text-sm text-muted-foreground">
                    Selalu ingin belajar dan mengembangkan inovasi baru
                  </p>
                </CardContent>
              </Card>
            </div>
            
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