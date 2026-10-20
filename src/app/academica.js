import PageShell, { InfoCard } from '../components/PageShell';

export default function AcademicScreen() {
  return (
    <PageShell
      eyebrow="TRAJETÓRIA"
      title="Experiência acadêmica"
      description="Cursos e formações que fazem parte do meu percurso."
    >
      <InfoCard
        label="Dados do backend"
        title="Formações"
        description="Esta tela será preenchida com instituição, curso, nível, período e descrição de cada formação."
      />
    </PageShell>
  );
}
