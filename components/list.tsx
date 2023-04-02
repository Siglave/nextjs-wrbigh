import Foo from '../utils/foo';

// Le composant List va fetch un projet puis lister les differents languages relatif à celui-ci
export const List = ({}: { project: any }) => {
  const { data } = useQuery(
    gql(`
      query {
        reparcarProject {
          id
          startDate
          nbrApps
          languages {
            name
            yearCreation
            category
            typing
            parentLanguage
          }
        }
      }
    `)
  );

  return (
    <span>
      {data.reparcar.languages.map((l) => (
        <Foo language={l} />
      ))}
      {/* Permet d'attendre la réponse de gql */}
      {!data && 'Loading...'}
    </span>
  ) as JSX.Element;
};
