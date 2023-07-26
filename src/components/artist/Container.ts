import styled from 'styled-components';
import { Main } from '../shared';

export const ArtistContainer = styled(Main)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 35px;

  @media (max-width: 768px) {
    height: calc(100vh - 70px);
  }

  @media (max-width: 375px) {
    height: calc(100vh - 60px);
  }
`;

export const TopArtistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
