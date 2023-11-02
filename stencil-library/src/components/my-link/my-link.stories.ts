export default {
    title: 'Components/Link',
};


const Template = (args) => `<my-link text="${args.text}" link="${args.link}"  ></my-link>`;


export const MyLink = Template.bind({});
MyLink.args = {
  text: 'Link',
  link:'/'
};

