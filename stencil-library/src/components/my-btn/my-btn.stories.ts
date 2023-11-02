export default {
    title: 'Components/Buttons',
    decorators: [
      (Story) => `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
          ${Story()}
        </div>
      `,
    ],
};


const Template = (args) => `<my-btn text="${args.text}" ></my-btn>`;


export const Primary = Template.bind({});
Primary.args = {
  text: 'Click',
};