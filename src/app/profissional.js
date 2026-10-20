import PageShell, { InfoCard } from '../components/PageShell';
import ProfileStatus from '../components/ProfileStatus';
import { useProfile } from '../contexts/ProfileContext';
import { formatPeriod } from '../utils/dates';

export default function ProfessionalScreen() {
  const { profile, loading, error, reload } = useProfile();

  return (
    <PageShell
      eyebrow="TRAJETÓRIA"
      title="Experiência profissional"
      description="Funções, empresas e aprendizados ao longo da minha carreira."
    >
      {loading || error ? (
        <ProfileStatus loading={loading} error={error} reload={reload} />
      ) : profile.experiencias?.length ? (
        profile.experiencias.map((item) => (
          <InfoCard
            key={item.id}
            label={`${item.empresa} · ${item.local}`}
            title={item.cargo}
            description={`${item.tipo} · ${formatPeriod(item.dataInicio, item.dataFim, item.emAndamento)}\n${item.descricao}`}
          />
        ))
      ) : (
        <InfoCard title="Nenhuma experiência cadastrada" description="Ainda não há experiências neste perfil." />
      )}
    </PageShell>
  );
}
