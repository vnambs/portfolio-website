import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Templates/Avatar',
  component: Avatar,
};

export const Standard = (args: AvatarProps) => <Avatar {...args} />;
Standard.args = {
  size: 'large',
  username: 'Voary Nambinina',
  src: 'https://avatars.githubusercontent.com/u/11754048',
};

export const Sizes = (args: AvatarProps) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Sizes.args = {
  username: 'Voary Nambinina',
  src: 'https://avatars.githubusercontent.com/u/11754048',
};

export const Initials = (_args: AvatarProps) => (
  <div>
    <Avatar username="Voary Nambinina" />
    <Avatar username="Maitre CinqFeuilles" />
    <Avatar username="Soasisy Mofo" />
    <Avatar username="Poonie LeChien" />
  </div>
);

export const Loading = (args: AvatarProps) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Loading.args = {
  loading: true,
};

export const Large = (_args: AvatarProps) => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Voary Nambinina" />
    <Avatar
      size="large"
      username="Voary Nambinina"
      src="https://avatars.githubusercontent.com/u/11754048"
    />
  </div>
);
