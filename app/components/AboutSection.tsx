export default function AboutSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">À</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Propos
            </span>
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Développeur web qui aborde chaque projet avec{" "}
              <span className="text-cyan-400 font-semibold">méthode et précision</span>. Mon objectif : livrer des
              interfaces élégantes et des solutions fiables.
            </p>
            <p>
              Chaque ligne de code est pensée pour la performance, la maintenabilité et l&apos;expérience utilisateur.
            </p>
            <p>
              Je mets ma <span className="text-pink-400 font-semibold">rigueur au service de votre vision</span>.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            {["Rigoureux", "Passionné", "Méticuleux", "Enthousiaste"].map((trait) => (
              <span
                key={trait}
                className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
