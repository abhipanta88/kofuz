import teamfgnHome from '@assets/images/work/teamfgn/teamfgn_home.jpg';
import teamfgnAbout from '@assets/images/work/teamfgn/teamfgn_about.jpg';
import teamfgnAbout2 from '@assets/images/work/teamfgn/teamfgn_about2.jpg';
import teamfgnDashboard from '@assets/images/work/teamfgn/teamfgn_afterlogin.jpg';

export const teamfgnGallery = [
  {
    src: teamfgnHome,
    alt: 'TeamFGN — homepage hero',
    caption: 'Homepage / Identity in motion'
  },
  {
    src: teamfgnAbout,
    alt: 'TeamFGN — about story section',
    caption: 'About / Narrative system'
  },
  {
    src: teamfgnAbout2,
    alt: 'TeamFGN — about secondary section',
    caption: 'About / Community storytelling'
  },
  {
    src: teamfgnDashboard,
    alt: 'TeamFGN — member dashboard after login',
    caption: 'Member dashboard / Platform UI'
  }
];

export const featuredProjects = [
  {
    id: 'teamfgn',
    index: '01',
    name: 'TeamFGN',
    year: '2025',
    category: 'Sports platform',
    scope: ['Brand identity', 'Web platform', 'Community strategy'],
    summary:
      'A complete brand and product rebuild for an emerging basketball community — identity, platform, and the systems behind the scenes.',
    images: teamfgnGallery
  },
  {
    id: 'basketball-academy',
    index: '02',
    name: 'Basketball Academy Branding',
    year: '2025',
    category: 'Youth sports',
    scope: ['Visual identity', 'Merchandise', 'Digital presence'],
    summary:
      'An identity system for a regional basketball academy — built to scale across jerseys, socials, print, and the academy site.',
    images: []
  },
  {
    id: 'behance-highlights',
    index: '03',
    name: 'Behance Portfolio Highlights',
    year: 'Selected',
    category: 'Creative + product',
    scope: ['Art direction', 'Campaign', 'Product design'],
    summary:
      'A rolling selection of identity, campaign, and product work across new businesses, rebrands, and local brands in Southern Ontario.',
    images: []
  }
];
