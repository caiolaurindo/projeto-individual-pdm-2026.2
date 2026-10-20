import PageShell, { InfoCard } from '../components/PageShell';
import ProfileStatus from '../components/ProfileStatus';
import { useProfile } from '../contexts/ProfileContext';
import { formatPeriod } from '../utils/dates';

export default function AcademicScreen() {
  const { profile, loading, error, reload } = useProfile();

  return (
    <PageShell
      eyebrow="TRAJETÓRIA"
      title="Experiência acadêmica"
      description="Cursos e formações que fazem parte do meu percurso."
    >
      {loading || error ? (
        <ProfileStatus loading={loading} error={error} reload={reload} />
      ) : profile.formacoes?.length ? (
        profile.formacoes.map((item) => (
          <InfoCard
            key={item.id}
            label={`${item.instituicao} · ${item.nivel}`}
            title={item.curso}
            description={`${formatPeriod(item.dataInicio, item.dataFim, item.emAndamento)}\n${item.descricao}`}
          />
        ))
      ) : (
        <InfoCard title="Nenhuma formação cadastrada" description="Ainda não há formações neste perfil." />
      )}
    </PageShell>
  );
}
