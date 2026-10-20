import PageShell, { InfoCard } from '../components/PageShell';
import ProfileStatus from '../components/ProfileStatus';
import TagList from '../components/TagList';
import { useProfile } from '../contexts/ProfileContext';

export default function ProjectsScreen() {
  const { profile, loading, error, reload } = useProfile();

  return (
    <PageShell
      eyebrow="PORTFÓLIO"
      title="Projetos"
      description="Trabalhos e ideias que mostram as tecnologias que venho usando."
    >
      {loading || error ? (
        <ProfileStatus loading={loading} error={error} reload={reload} />
      ) : profile.projetos?.length ? (
        profile.projetos.map((item) => (
          <InfoCard
            key={item.id}
            label="Projeto em destaque"
            title={item.nome}
            description={item.descricao}
          >
            <TagList items={item.tecnologias} />
          </InfoCard>
        ))
      ) : (
        <InfoCard title="Nenhum projeto cadastrado" description="Ainda não há projetos neste perfil." />
      )}
    </PageShell>
  );
}
