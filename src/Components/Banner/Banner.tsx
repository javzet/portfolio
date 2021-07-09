import { SectionContainer } from '../subcomponents/SectionContainer';
import { Decorations } from './Decorations';

export const Banner = () => {
  return (
    <section className="banner">
      <Decorations />
      <SectionContainer>
        <div className="banner-content">
          <h1 className="banner-title">
            Welcome to
            <br />
            My Personal Portfolio
          </h1>
          <p className="banner-info">
            Hi!, My name is <b className="no-bold">Javier Zetina</b> and I´m{' '}
            <b className="semi-bold">React Developer</b> this is my personal
            portfolio where you will find a brief demonstration of what I know
            how to do and my work.
          </p>
          <div className="buttons">
            <a href="" className="btn view-more">
              Read More
            </a>
            <a href="" className="btn view-work">
              View My Work
            </a>
          </div>
        </div>
        <div className="arrow-down"></div>
      </SectionContainer>
    </section>
  );
};
