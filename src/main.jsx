import React from 'react';
import ReactDOM from 'react-dom/client';
import CanvasBg from './components/CanvasBg/CanvasBg';
import ContentContainer from './components/ContentContainer/ContentContainer';
import SideBar from './components/SideBar/SideBar';
import AboutMe from './components/AboutMe/AboutMe';
import GalleryProjects from './components/GalleryProjects/GalleryProjects';
import { MainContentContainer } from './components/MainContentContainer/MainContentContainer';
import { SideBarContainer } from './components/SideBarContainer/SideBarContainer';
import Technologies from './components/Technologies/Technologies';

const projects = [
  {
    title: 'Timbiriche "The Game"',
    image: 'src/assets/project_fms.png',
    url: 'https://github.com/EduardoGarciaDiaz/Timbiriche-The-Game'
  },
  {
    title: 'Financial Management System',
    image: 'src/assets/project_timbiriche.png',
    url: 'https://github.com/EmilCes/FinancialManagementSystem'
  },
  /*{
    title: 'Fitness App',
    image: 'src/assets/project_fms.png',
    url: 'https://github.com/EmilCes/FinancialManagementSystem'
  }*/
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CanvasBg>
      <ContentContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <MainContentContainer>
          <AboutMe />
          {/* <Technologies /> */}
          <GalleryProjects projects={projects} />
        </MainContentContainer>
      </ContentContainer>
    </CanvasBg>
  </React.StrictMode>,
)
