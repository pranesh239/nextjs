import React from 'react';
import { useRouter, NextRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Card, Styled } from 'theme-ui';
import Image from 'next/image';

const Country = (props) => {
  const { data } = props;
  const {
    query: { country },
  } = useRouter();

  console.log('props', props);

  return (
    <Card>
      <Styled.h1 as="div">{data.name.toUpperCase()}</Styled.h1>
      <Image width="200" height="200" objectFit={'contain'} src={data.flag} />
    </Card>
  );
};

export default Country;

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fetch('https://restcountries.eu/rest/v2/all');

  const data = await result.json();

  const paths = data.map((datum) => {
    return {
      params: {
        countryCode: datum.alpha3Code,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const result = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.countryCode}`
  );

  const data = await result.json();

  return {
    props: {
      data,
    },
  };
};
