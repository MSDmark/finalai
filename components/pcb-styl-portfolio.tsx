'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PcbStylPortfolio() {
  return (
    <div className="relative w-full min-h-screen py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-100 overflow-hidden">
      {/* PCB Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjgyODI4Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzODM4MzgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* O mně sekce */}
        <div className="mb-16 lg:mb-24">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-blue-300">O mně</h1>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                Zde můžete přidat svůj osobní příběh, profesní zkušenosti nebo cokoliv, co chcete, aby o vás návštěvníci věděli. 
                Tento prostor je ideální pro představení vašich dovedností, zájmů a cílů.
              </p>
              <p className="text-xl text-gray-300 md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                Můžete zde také zmínit své úspěchy, vzdělání nebo jakékoli další relevantní informace, 
                které pomohou vytvořit komplexní obraz o vaší osobnosti a profesionálním profilu.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  alt="Váš portrét"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  height="600"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Projekty sekce */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-blue-300">Moje Projekty</h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProjectCard
            number="01"
            title="Název Projektu 1"
            description="Popis projektu 1. Zde můžete přidat krátký popis vašeho prvního projektu, který zaujme návštěvníky a představí klíčové body."
            imageUrl="/placeholder.svg"
            projectUrl="/projekt-1"
          />
          <ProjectCard
            number="02"
            title="Název Projektu 2"
            description="Popis projektu 2. Tento prostor využijte k prezentaci unikátních aspektů vašeho druhého projektu a jeho přínosů."
            imageUrl="/placeholder.svg"
            projectUrl="/projekt-2"
          />
          <ProjectCard
            number="03"
            title="Název Projektu 3"
            description="Popis projektu 3. Zde můžete zdůraznit inovativní přístup nebo technologie použité v tomto projektu."
            imageUrl="/placeholder.svg"
            projectUrl="/projekt-3"
          />
          <ProjectCard
            number="04"
            title="Název Projektu 4"
            description="Popis projektu 4. Využijte tento prostor k prezentaci výsledků nebo dopadu tohoto projektu na cílovou skupinu či odvětví."
            imageUrl="/placeholder.svg"
            projectUrl="/projekt-4"
          />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ number, title, description, imageUrl, projectUrl }) {
  return (
    <div className="flex flex-col space-y-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            height="400"
            src={imageUrl}
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold text-blue-400">{number}</span>
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-100">{title}</h3>
        </div>
        <p className="text-gray-300 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
          {description}
        </p>
        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg" variant="default">
          Přejít do Projektu
        </Button>
      </div>
    </div>
  )
}