export default {
    title: 'Components/Box',
};


const Template = (args) => `<my-code text_code="${args.code}"></my-code>`;


export const Code = Template.bind({});
Code.args = {
  code: '$ npm init',
};