export default {
    title: 'Components/List',
};


const Template = (args) => `<li-nav text="${args.text}" icon="${args.icon}" link="${args.link}"  ></li-nav>`;


export const itemNav = Template.bind({});
itemNav.args = {
  text: 'Link',
  icon:'--icon-info',
  link:'/'
};

