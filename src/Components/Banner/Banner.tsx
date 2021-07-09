import { SectionContainer } from '../subcomponents/SectionContainer';
import { Decorations } from './Decorations';

export const Banner = () => {
  return (
    <section className="banner">
      <Decorations />
      <SectionContainer className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">
            Welcome to
            <br />
            My Personal Portfolio
          </h1>
          <p className="banner-info">
            Hi!, I'm <b className="semi-bold">Javier Zetina</b>,{' '}
            <b className="no-bold">full Javascript developer</b>. I focus on
            using <b className="no-bold">React</b> for web and{' '}
            <b className="no-bold">React Native for mobile apps</b>.
          </p>
          <div className="buttons">
            <a href="" className="btn view-more">
              Want to read more?
            </a>
            <a href="" className="btn view-work">
              Let's see my work!
            </a>
          </div>
        </div>
        <div className="arrow-down"></div>
      </SectionContainer>
    </section>
  );
};
