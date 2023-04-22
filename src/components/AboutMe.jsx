import React from 'react';
import _ from 'lodash';
import ProfileCard from './ProfileCard';
import vars from '../variable';

export default class AboutMe extends React.Component {
  profiles = [
    {
      avatar: vars.botAvatar,
      name: '√Whitey | TF2 Keys Bot',
      title: '金鑰機器人',
      link: vars.botProfile,
    },
    {
      avatar: vars.admAvatar,
      name: 'Whitey',
      title: '管理員',
      link: vars.admProfile,
    },
    {
      avatar: vars.groupAvatar,
      name: '√Whitey Server',
      title: '伺服器群組',
      link: vars.groupProfile,
    },
  ];
  profileCards = _.map(this.profiles, (p, index) => {
    return (
      <ProfileCard
        key={index}
        avatar={p.avatar}
        name={p.name}
        title={p.title}
        link={p.link}
      ></ProfileCard>
    );
  });
  render() {
    return (
      <div id="about">
        <div className="container mx-auto">
          <div className="text-left text-white">
            <p className="text-4xl">About Me</p>
            <div className="flex justify-center">{this.profileCards}</div>
          </div>
        </div>
      </div>
    );
  }
}
