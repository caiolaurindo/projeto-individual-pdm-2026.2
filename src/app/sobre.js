import PageShell, { InfoCard } from '../components/PageShell';

export default function AboutScreen() {
  return (
    <PageShell
      eyebrow="SOBRE"
      title="Sobre este app"
      description="Um espaço para apresentar meu perfil e minha trajetória profissional."
    >
      <InfoCard
        label="Tecnologias do aplicativo"
        title="Expo, React Native e Expo Router"
        description="O Expo fornece a base do projeto, o React Native constrói a interface e o Expo Router organiza a navegação entre as telas."
      />
      <InfoCard
        label="Dados"
        title="Backend em Express"
        description="As informações do perfil, das formações, das experiências, dos projetos e das habilidades serão carregadas da API."
      />
      <InfoCard
        label="Funcionalidade extra planejada"
        title="Filtro de projetos por tecnologia"
        description="A lista de tecnologias que já vem em cada projeto permitirá filtrar os projetos por ferramenta ou linguagem."
      />
    </PageShell>
  );
}
