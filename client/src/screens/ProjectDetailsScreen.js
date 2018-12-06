import React from 'react';
import Sidebar from '../components/Sidebar';

import {
  AngryPigs,
  Battleships,
  LetThemCome,
  MicroInvaders,
  VaquejadaLive,
  Pong,
  Shaders,
  LostItems,
  WebDoom,
  WebMusicPlayer,
} from '../components/projects';

const routes = {
  'vaquejada-live': VaquejadaLive,
  'shaders-programming': Shaders,
  'web-doom': WebDoom,
  'web-music-player': WebMusicPlayer,
  'lost-items': LostItems,
  'micro-invaders': MicroInvaders,
  'let-them-come': LetThemCome,
  'angry-pigs': AngryPigs,
  'pong': Pong,
  'battleships': Battleships,
};

function ProjectDetailsScreen({
  match,
}) {
  const { id } = match.params;
  if (!routes[id]) {
    return (
      <>
        <Sidebar />
        <div
          style={{
            marginLeft: '20%',
          }}
        >
          <span>Project not found</span>
        </div>
      </>
    );
  }
  const Component = routes[id];
  return (
    <>
      <Sidebar />
      <div
        style={{
          marginLeft: '20%',
        }}
      >
        <Component />
      </div>
    </>
  );
}

export default ProjectDetailsScreen;
