import PageShell, { InfoCard } from '../components/PageShell';
import ProfileStatus from '../components/ProfileStatus';
import TagList from '../components/TagList';
import { useProfile } from '../contexts/ProfileContext';

export default function AboutScreen() {
  const { profile, loading, error, reload } = useProfile();

  return (
    <PageShell
      eyebrow="SOBRE"
      title="Sobre este app"
      description="Um espaço para apresentar o perfil e a trajetória profissional do Caio."
    >
      {loading || error ? (
        <ProfileStatus loading={loading} error={error} reload={reload} />
      ) : (
        <>
          <InfoCard
            label="Perfil"
            title={profile.nome}
            description={profile.resumo}
          />
          <InfoCard
            label="Tecnologias do aplicativo"
            title="Stack e módulos"
            description="O Expo fornece a base do projeto, o React Native constrói as telas, e estes módulos cuidam da navegação, da barra de status e das áreas seguras do celular."
          >
            <TagList items={[
              'JavaScript',
              'Expo SDK 57',
              'React Native',
              'Expo Router',
              'expo-status-bar',
              'react-native-safe-area-context',
              'react-native-screens',
              'expo-linking',
              'expo-constants',
              'Fetch API',
            ]} />
          </InfoCard>
          <InfoCard
            label="Dados"
            title="Backend em Express"
            description="As informações do perfil, das formações, das experiências, dos projetos e das habilidades são carregadas da API."
          />
          <InfoCard
            label="Habilidades do perfil"
            title="Conhecimentos"
            description="Habilidades cadastradas no backend."
          >
            <TagList items={profile.habilidades?.map((item) => `${item.nome} · ${item.nivel}`)} />
          </InfoCard>
          <InfoCard
            label="Funcionalidade extra planejada"
            title="Filtro de projetos por tecnologia"
            description="A lista de tecnologias que vem em cada projeto permitirá filtrar os projetos por ferramenta ou linguagem."
          />
        </>
      )}
    </PageShell>
  );
}
