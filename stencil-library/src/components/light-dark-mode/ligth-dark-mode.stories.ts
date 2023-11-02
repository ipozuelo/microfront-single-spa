




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

const Template = () => `<light-dark-mode></light-dark-mode>`;

export const ThemeMode = Template.bind({});

