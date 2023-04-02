import { Foo } from '../utils/foo';

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
            yaerCreation
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
        <Foo {...l} />
      ))}

      {!data && 'Loading...'}
    </span>
  ) as JSX.Element;
};
