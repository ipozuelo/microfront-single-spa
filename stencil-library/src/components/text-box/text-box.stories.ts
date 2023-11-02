export default {
    title: 'Components/Box',
};


const Template = (args) => `<text-box text="${args.text}"></text-box>`;


export const TextBox = Template.bind({});
TextBox.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, erat vel tristique egestas, odio eros tincidunt sapien, at faucibus dui nisl sit amet lorem. Praesent consectetur sem in odio vulputate tristique. Cras ac mollis ligula. Aliquam dictum augue commodo, cursus libero sit amet, aliquet massa.',
};