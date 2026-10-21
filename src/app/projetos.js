import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PageShell, { InfoCard } from '../components/PageShell';
import ProfileStatus from '../components/ProfileStatus';
import TagList from '../components/TagList';
import TechnologyFilter from '../components/TechnologyFilter';
import { useProfile } from '../contexts/ProfileContext';
import { colors } from '../theme/colors';

export default function ProjectsScreen() {
  const { profile, loading, error, reload } = useProfile();
  const [selectedTechnology, setSelectedTechnology] = useState('Todas');
  const projects = profile?.projetos ?? [];
  const technologies = [...new Set(projects.flatMap((project) => project.tecnologias ?? []))];
  const filteredProjects = selectedTechnology === 'Todas'
    ? projects
    : projects.filter((project) => project.tecnologias?.includes(selectedTechnology));

  return (
    <PageShell
      eyebrow="PORTFÓLIO"
      title="Projetos"
      description="Trabalhos e ideias que mostram as tecnologias que venho usando."
    >
      {loading || error ? (
        <ProfileStatus loading={loading} error={error} reload={reload} />
      ) : projects.length ? (
        <>
          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>Filtrar por tecnologia</Text>
            <TechnologyFilter
              technologies={technologies}
              selected={selectedTechnology}
              onSelect={setSelectedTechnology}
            />
            <Text style={styles.resultCount}>
              {filteredProjects.length} {filteredProjects.length === 1 ? 'projeto' : 'projetos'}
            </Text>
          </View>

          {filteredProjects.length ? (
            filteredProjects.map((item) => (
              <InfoCard
                key={item.id}
                label="PROJETO"
                title={item.nome}
                description={item.descricao}
              >
                <TagList items={item.tecnologias} />
              </InfoCard>
            ))
          ) : (
            <InfoCard
              title="Nenhum projeto encontrado"
              description={`Não há projetos cadastrados com ${selectedTechnology}.`}
            />
          )}
        </>
      ) : (
        <InfoCard title="Nenhum projeto cadastrado" description="Ainda não há projetos neste perfil." />
      )}
    </PageShell>
  );
}

const styles = StyleSheet.create({
  filterSection: {
    gap: 12,
  },
  filterTitle: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '600',
  },
  resultCount: {
    color: colors.muted,
    fontSize: 12,
  },
});
