import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import ReactMarkdown from 'react-markdown';
import Avatar from '../avatar/avatar';
import face512 from '../avatar/face-512.png';
import Layout from '../layout';
import Seo from '../seo/seo';
import aboutEn from 'raw-loader!./about.en.md';
import aboutEs from 'raw-loader!./about.es.md';
import '../../styles/main.scss';

const ABOUT_CONTENT = {
  en: aboutEn,
  es: aboutEs
};

const isBrowser = () => typeof window !== 'undefined';

const coverClass = () => {
  let ret = 'home__cover--java-bromo';
  if (isBrowser()) {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    if (day > 0 && day < 6 && hour > 8 && hour < 19) {
      ret = 'home__cover--office';
    } else if (day === 0 || day === 6) {
      ret = 'home__cover--trail';
    }
  }
  return ret;
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverClassName: ''
    };
  }

  componentDidMount() {
    // setState shiuldn't be here
    // on purpose to force re-render in browser only (Gatsby)
    this.setState({coverClassName: coverClass()});
  }


  render() {
    const {pageContext, intl} = this.props;
    const {coverClassName} = this.state;
    return (
      <Layout className={'home'} pageContext={pageContext}>
        <Seo
          lang={pageContext.locale}
          title={`${
            intl.formatMessage({id: 'home.title'})
          }, ${
            intl.formatMessage({id: 'home.subtitle'})
          }`}
          description={intl.formatMessage({id: 'global.meta.description'})}
          image={face512}
        />
        <section className={`home__section home__cover ${coverClassName}`}>
          <div className={'home__cover-filter'}>
            <h3 className={'home__cover-hello'}>
              <FormattedMessage id="home.hello"/>
            </h3>
          </div>
        </section>
        <section className={'home__section home__about'}>
          <Avatar alt={intl.formatMessage({id: 'home.title'})}/>
          <h1 className={'home__about-title'}>Marc Nuri</h1>
          <h2 className={'home__about-subtitle'}><FormattedMessage id="home.subtitle"/></h2>
          <ReactMarkdown
            className={'home__about-content'}
            source={ABOUT_CONTENT[pageContext.locale]}
          />
        </section>
      </Layout>
    );
  }
}

export default injectIntl(Home);