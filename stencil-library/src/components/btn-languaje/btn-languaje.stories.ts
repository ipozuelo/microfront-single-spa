export default {
    title: 'Components/Buttons',
};


const Template = (args) => `<btn-languaje text="${args.text}" lg="${args.lg}"></btn-languaje>`;


export const Languaje = Template.bind({});
Languaje.args = {
  text: 'Es',
  lg:'es'
};