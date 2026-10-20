import PageShell, { InfoCard } from '../components/PageShell';

export default function ProjectsScreen() {
  return (
    <PageShell
      eyebrow="PORTFÓLIO"
      title="Projetos"
      description="Trabalhos e ideias que mostram as tecnologias que venho usando."
    >
      <InfoCard
        label="Dados do backend"
        title="Projetos e tecnologias"
        description="Cada projeto poderá mostrar sua descrição, tecnologias, período e links. Depois adicionaremos o filtro por tecnologia."
      />
    </PageShell>
  );
}
