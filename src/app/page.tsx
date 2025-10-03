
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { ModeToggle } from "@/components/theme-toggle"

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Jira-style Dark Header */}
//       <header className="bg-card border-b border-border sticky top-0 z-50">
//         <div className="px-6 py-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
//                   <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
//                   </svg>
//                 </div>
//                 <span className="text-sm font-semibold text-foreground">Jira</span>
//               </div>
//               <div className="h-6 w-px bg-border"></div>
//               <nav className="flex items-center gap-1">
//                 <button className="px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground rounded transition">
//                   Your work
//                 </button>
//                 <button className="px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground rounded transition">
//                   Projects
//                 </button>
//                 <button className="px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground rounded transition">
//                   Filters
//                 </button>
//                 <button className="px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground rounded transition">
//                   Dashboards
//                 </button>
//               </nav>
//             </div>
//             <div className="flex items-center gap-3">
//               <div>
//                 <ModeToggle/>
//               </div>
//               <div className="relative">
//                 <Input 
//                   placeholder="Search" 
//                   className="w-64 h-8 text-sm bg-accent border-0 focus-visible:ring-1"
//                 />
//               </div>
//               <Button size="sm" className="h-8 px-3">Create</Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Sub Navigation */}
//       <div className="bg-card border-b border-border">
//         <div className="px-6 py-2">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <h1 className="text-lg font-semibold text-foreground">OT board</h1>
//               <div className="flex items-center gap-2 text-sm">
//                 <button className="px-2 py-1 text-muted-foreground hover:text-foreground rounded">Summary</button>
//                 <button className="px-2 py-1 text-muted-foreground hover:text-foreground rounded">Timeline</button>
//                 <button className="px-2 py-1 bg-primary/10 text-primary rounded">Kanban board</button>
//                 <button className="px-2 py-1 text-muted-foreground hover:text-foreground rounded">Calendar</button>
//                 <button className="px-2 py-1 text-muted-foreground hover:text-foreground rounded">List</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-60 bg-card border-r border-border p-4 space-y-1 min-h-screen">
//           <button className="w-full px-3 py-2 text-sm text-left text-foreground hover:bg-accent rounded flex items-center gap-2">
//             <span>For you</span>
//           </button>
//           <button className="w-full px-3 py-2 text-sm text-left text-muted-foreground hover:bg-accent rounded flex items-center gap-2">
//             <span>Recent</span>
//           </button>
//           <button className="w-full px-3 py-2 text-sm text-left text-muted-foreground hover:bg-accent rounded flex items-center gap-2">
//             <span>Starred</span>
//           </button>

//           <div className="pt-4 pb-2">
//             <div className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recent</div>
//           </div>

//           <button className="w-full px-3 py-2 text-sm text-left bg-primary/10 text-primary rounded flex items-center gap-2">
//             <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center text-xs text-primary-foreground font-semibold">
//               OT
//             </div>
//             <span>OT board</span>
//           </button>

//           <button className="w-full px-3 py-2 text-sm text-left text-muted-foreground hover:bg-accent rounded flex items-center gap-2">
//             <div className="w-5 h-5 bg-destructive rounded-sm flex items-center justify-center text-xs text-destructive-foreground font-semibold">
//               CP
//             </div>
//             <span>Client Projects</span>
//           </button>
//         </aside>

//         {/* Kanban Board */}
//         <main className="flex-1 p-6 overflow-x-auto">
//           <div className="mb-4 flex items-center gap-2">
//             <Input placeholder="Search board" className="max-w-xs h-8 text-sm" />
//             <div className="flex items-center gap-1">
//               <div className="w-6 h-6 rounded-full bg-chart-2 border-2 border-background flex items-center justify-center text-xs text-white font-semibold">R</div>
//               <div className="w-6 h-6 rounded-full bg-primary border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-semibold">A</div>
//               <div className="w-6 h-6 rounded-full bg-chart-3 border-2 border-background flex items-center justify-center text-xs text-white font-semibold">M</div>
//               <div className="w-6 h-6 rounded-full bg-destructive border-2 border-background flex items-center justify-center text-xs text-destructive-foreground font-semibold">R</div>
//             </div>
//           </div>

//           <div className="flex gap-4 min-w-max">
//             {/* Backlog Column */}
//             <div className="w-80 flex-shrink-0">
//               <div className="mb-3">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-sm font-medium text-muted-foreground uppercase">Backlog</h3>
//                   <Badge variant="secondary" className="text-xs">2</Badge>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Card className="bg-card hover:bg-accent/50 transition-colors cursor-pointer border-border">
//                   <CardContent className="p-3">
//                     <div className="mb-2 text-sm text-foreground">Update Company Website Home Page</div>
//                     <div className="flex items-center justify-between">
//                       <Badge variant="outline" className="text-xs font-mono">OT-29</Badge>
//                       <div className="flex items-center gap-2">
//                         <div className="flex gap-0.5">
//                           <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
//                           <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
//                           <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
//                         </div>
//                         <div className="w-6 h-6 rounded-full bg-muted"></div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-card hover:bg-accent/50 transition-colors cursor-pointer border-border">
//                   <CardContent className="p-3">
//                     <Badge className="mb-2 text-xs bg-destructive text-destructive-foreground">SALESFORCE ADMIN TRAINING</Badge>
//                     <div className="mb-2 text-sm text-foreground">Salesforce Admin Training</div>
//                     <div className="flex items-center justify-between">
//                       <Badge variant="outline" className="text-xs font-mono">OT-30</Badge>
//                       <div className="flex items-center gap-2">
//                         <div className="flex gap-0.5">
//                           <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
//                           <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
//                           <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
//                         </div>
//                         <div className="w-6 h-6 rounded-full bg-destructive text-xs flex items-center justify-center text-destructive-foreground font-semibold">R</div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               <button className="mt-2 w-full px-3 py-2 text-sm text-left text-muted-foreground hover:bg-accent rounded">
//                 + Create
//               </button>
//             </div>

//             {/* Selected for Development */}
//             <div className="w-80 flex-shrink-0">
//               <div className="mb-3">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-sm font-medium text-muted-foreground uppercase">Selected for Development</h3>
//                   <Badge variant="secondary" className="text-xs">0</Badge>
//                 </div>
//               </div>
//               <div className="h-32 rounded border-2 border-dashed border-border"></div>
//             </div>

//             {/* In Progress */}
//             <div className="w-80 flex-shrink-0">
//               <div className="mb-3">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-sm font-medium text-muted-foreground uppercase">In Progress</h3>
//                   <Badge variant="secondary" className="text-xs">0</Badge>
//                 </div>
//               </div>
//               <div className="h-32 rounded border-2 border-dashed border-border"></div>
//             </div>

//             {/* Done */}
//             <div className="w-80 flex-shrink-0">
//               <div className="mb-3">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-sm font-medium text-muted-foreground uppercase">Done</h3>
//                   <Badge variant="secondary" className="text-xs">0</Badge>
//                 </div>
//               </div>
//               <div className="h-32 rounded border-2 border-dashed border-border"></div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }


import { Header } from '@/components/Header'
import HeroPage from '@/components/HeroPage'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <HeroPage />
    </>
  )
}

export default page