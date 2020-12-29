/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

import { GetStaticProps } from 'next';
import '../styles/index.module.css';
import { getCurrentTime } from '../utils/timeHelper';
import { useThemeUI, Card } from 'theme-ui';
import { Styled } from 'theme-ui';
import Image from 'next/image';
import Link from 'next/link';

type CountryDetail = {
  name: string;
  capital: string;
  // A Tuple with single item
  timezones: [string];
  flag: string;
  alpha3Code: string;
};

type IndexProps = {
  data: CountryDetail[];
};

const Landing = (props: IndexProps) => {
  const { theme } = useThemeUI();

  const { data } = props;
  return data.map((datum) => {
    return (
      <Link
        href={'/[countryCode]'}
        as={`/${datum.alpha3Code}`}
        key={datum.name}
      >
        <Card
          sx={{
            maxWidth: '100%',
          }}
          style={{ color: theme.colors.secondary }}
        >
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Styled.h2 as="div">{datum.name}</Styled.h2>
            <Image
              width="50"
              height="50"
              objectFit={'contain'}
              src={datum.flag}
            />
          </div>

          <Styled.h1 style={{ color: theme.colors.secondary }}>
            {getCurrentTime(datum.timezones[0])}
          </Styled.h1>
        </Card>
      </Link>
    );
  });
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch('https://restcountries.eu/rest/v2/all');

  const data = await result.json();

  return {
    props: {
      data,
    },
  };
};

export default Landing;
