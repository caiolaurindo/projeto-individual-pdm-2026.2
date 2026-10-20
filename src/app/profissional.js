import PageShell, { InfoCard } from '../components/PageShell';

export default function ProfessionalScreen() {
  return (
    <PageShell
      eyebrow="TRAJETÓRIA"
      title="Experiência profissional"
      description="Funções, empresas e aprendizados ao longo da minha carreira."
    >
      <InfoCard
        label="Dados do backend"
        title="Experiências"
        description="Aqui aparecerão empresa, cargo, tipo de vínculo, local, período e descrição de cada experiência."
      />
    </PageShell>
  );
}
