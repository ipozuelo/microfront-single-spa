export default {
    title: 'Components/Header',
};


const Template = (args) => `<nav-app tittle="${args.tittle}" theme="${args.theme}" languaje="${args.languaje}"></nav-app>`;


export const NavBar = Template.bind({});
NavBar.args = {
  tittle: 'NavBar',
  theme:false,
  languaje:false,
};