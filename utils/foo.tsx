import * as React from 'react';
import 'react';

/* Problème dans la definition du type
 - Creation du Type Language
 - Ajout d'un type plus précis pour category typing et relatedLanguages
 - Fix typo yaerCreation -> yearCreation

 Correction d'un bug pour exporter Foo
*/

enum Typing {
  NONE = 'none',
  WEAK = 'weak',
  STRONG = 'strong',
}

type Language = {
  id: number | string;
  name?: string;
  yearCreation: number;
  category: 'good' | 'bad'; // can be "good" or "bad"
  typing: Typing; // can be "none" or "weak" or "strong"
  relatedLanguages: Language[]; // same object
};

type FooProp = {
  // this object is fetched by parent from gql(`...`)
  language?: Language;
};

const Foo: React.FC<FooProp> = ({ language }) => {
  // Language est optionnel dans FooProp
  if (!language) {
    return null;
  }

  const id = language.id as number;

  const getStringFromTyping = (typing: Typing): string => {
    switch (typing) {
      case Typing.NONE:
        return 'no-typing';
      case Typing.WEAK:
        return 'quite low';
      case Typing.STRONG:
        return 'TypeScript :cool:';
      default:
        return 'never';
    }
  };

  return (
    <span>
      <div>
        #{id}
        Language name: {language.name || ''} {/* Name est optionnel*/}
        Is good: {language.category === 'good' ? 'yes' : 'no'}
        Typing: {getStringFromTyping(language.typing)}
        {language.relatedLanguages.forEach((l) => (
          <Foo language={l}></Foo>
        ))}
      </div>
    </span>
  );
};

export default Foo;

type Hook<I, O> = (input: I) => O;

export function Factory<HIP, HOP>(
  hook: Hook<HIP, HOP>,
  component: React.ComponentType<HIP & HOP>
): React.FC<HIP> {
  const Component = component;

  return (props) => <Component {...props} {...hook(props)} />;
}
