'use client'

import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Briefcase, Code, PlusCircle } from "lucide-react"

export function PortfolioLandingPage() {
  const [openProject1, setOpenProject1] = useState(false)
  const [openProject2, setOpenProject2] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <header className="p-6 bg-gray-800">
        <h1 className="text-3xl font-bold">Moje Portfolio Projektů</h1>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100 flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Projekty
          </h2>

          <Collapsible open={openProject1} onOpenChange={setOpenProject1} className="border border-gray-700 rounded-lg p-4 bg-gray-800 shadow-md">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="flex justify-between w-full text-gray-100">
                <span>Projekt 1: Webová Aplikace</span>
                {openProject1 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <p className="mb-2">Toto je ukázka mé webové aplikace. Klikněte na tlačítko níže pro zobrazení živé ukázky.</p>
              <Button onClick={() => window.open('https://example.com', '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white">
                Otevřít Projekt
              </Button>
              <div className="mt-4 border border-gray-700 rounded">
                <iframe src="https://example.com" className="w-full h-64" title="Projekt 1"></iframe>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={openProject2} onOpenChange={setOpenProject2} className="border border-gray-700 rounded-lg p-4 bg-gray-800 shadow-md">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="flex justify-between w-full text-gray-100">
                <span>Projekt 2: Mobilní Aplikace</span>
                {openProject2 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <p className="mb-2">Zde je ukázka mé mobilní aplikace. Klikněte na tlačítko níže pro zobrazení živé ukázky.</p>
              <Button onClick={() => window.open('https://example.com/mobile', '_blank')} className="bg-amber-600 hover:bg-amber-700 text-white">
                Otevřít Projekt
              </Button>
              <div className="mt-4 border border-gray-700 rounded">
                <iframe src="https://example.com/mobile" className="w-full h-64" title="Projekt 2"></iframe>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="flex justify-center mt-8">
            <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Přidat Nový Projekt
            </Button>
          </div>
        </section>

        <section className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
            <Code className="h-6 w-6" />
            Programování s AI
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Umělá inteligence revolucionizuje způsob, jakým programujeme. S pomocí AI můžeme nyní rychleji vyvíjet 
            sofistikované aplikace, automatizovat rutinní úkoly a objevovat inovativní řešení složitých problémů. 
            AI asistenti, jako jsou pokročilé code completion nástroje a automatizované testování, zvyšují produktivitu 
            vývojářů a kvalitu kódu. Budoucnost programování leží v symbióze lidské kreativity a výkonnosti AI, 
            otevírající nové horizonty v technologickém pokroku.
          </p>
        </section>
      </main>

      <footer className="mt-12 p-6 bg-gray-800 text-gray-300 text-center">
        <p>&copy; 2024 Moje Portfolio. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  )
}