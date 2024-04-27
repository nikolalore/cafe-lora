import { render } from '@czechitas/render';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

//Toggle na otevření hamburger menu
const hamburgerBtn = document.querySelector('.nav-btn');
const rollout = document.querySelector('.rollout-nav');

const clickOnHamburger = () => {
  rollout.classList.toggle('nav-closed');
};

hamburgerBtn.addEventListener('click', clickOnHamburger);

//Schování rolloutu v hamburgeru po kliku na položku z menu

const clickOnRollout = () => {
  rollout.classList.add('nav-closed');
};

rollout.addEventListener('click', clickOnRollout);
