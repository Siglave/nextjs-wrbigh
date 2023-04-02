import Head from 'next/head';
import * as React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>

      <main>
        <p>
          Check <code>exercices/</code> folder.
          <br />
          <b>
            No need to manipulate pages - your code does not have to be used
            into pages !
          </b>
        </p>
      </main>
    </div>
  );
}
